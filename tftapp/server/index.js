import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import { Profile } from './ProfileInfo.js';
import { summonerInfoAPI, whichServerName, whichGlobalServerName } from './api.js';
import 'dotenv/config';

const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URL;
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('SERVER WORKED')
})

app.get('/profile/:name/:server', cors(corsOptions) , async (req, res) => {
    
        let playerName = req.params.name;
        let serverValue = req.params.server;
        whichServerName(serverValue);
        whichGlobalServerName(serverValue);

        // get player name (search player name on db)
        

        const playerData = await summonerInfoAPI.getPlayerInfo(playerName, serverValue);
        const rankData = await summonerInfoAPI.getRankInfo(playerData.id);
        
        // if player name not on DB, add to DB data 
        
        
        const matchData = await summonerInfoAPI.getMatches(playerData.puuid);
        
        async function main() {
            await mongoose.connect(DB_URL);
        }
        try {
            // create a document to insert
            const doc = {
                id: playerData.id,
                accountId: playerData.accountId,
                puuid: playerData.puuid,
                name: playerData.name,
                profileIconId: playerData.profileIconId,
                revisionDate: playerData.revisionDate,
                summonerLevel: playerData.summonerLevel,
                rankData: {
                    gameType: rankData[0].queueType,
                    tier: rankData[0].tier,
                    rank: rankData[0].rank,
                    leaguePoints: rankData[0].leaguePoints,
                    wins: rankData[0].wins,
                    losses: rankData[0].losses
                },
                matchData: matchData,
                oneMatchData: [],
                serverName: serverValue,
                updatedTime: Date.now(),
            }
            
            
        

        let allMatchData = [];
        let oneMatchData;

        
        for (const id of matchData) {
            oneMatchData = await summonerInfoAPI.getMatchesInfo(id)

            /*doc.oneMatchData.push({ 
                metadata: {
                    dataVersion: oneMatchData.metadata.data_version,
                    matchId: oneMatchData.metadata.match_id,
                    participants: [oneMatchData.metadata.participants]
                }, 
            });*/
            
            let newMatch = {
                metadata: {
                    dataVersion: oneMatchData.metadata.data_version,
                    matchId: oneMatchData.metadata.match_id,
                    participants: [oneMatchData.metadata.participants]
                }, 
                info: {
                    gameDatetime: oneMatchData.info.game_datetime,
                    gameLength: oneMatchData.info.game_length,
                    gameVersion: oneMatchData.info.game_version,
                    participants: []
                }
            }

            for (const puuid of oneMatchData.metadata.participants) {
                const playerNameForMatches = await summonerInfoAPI.getPlayerNameByPuuid(puuid)
                //console.log(playerNameForMatches);
                oneMatchData.metadata.participants.forEach((puuid2, index) =>  {
                    
                        
                    //console.log(newParticipans);
                    if (puuid2 === puuid) {
                        //consoleTool("it is working");
                        let newParticipans = {
                            id: oneMatchData.info.participants[index].id,
                            accountId: oneMatchData.info.participants[index].accountId,
                            puuid: oneMatchData.info.participants[index].puuid,
                            name: oneMatchData.info.participants[index].name,
                            profileIconId: oneMatchData.info.participants[index].profileIconId,
                            revisionDate: oneMatchData.info.participants[index].revisionDate,
                            summonerLevel: oneMatchData.info.participants[index].summonerLevel,
                            augments: [oneMatchData.info.participants[index].augments],
                            companion: {
                                contentID: oneMatchData.info.participants[index].companion.content_ID,
                                skinID: oneMatchData.info.participants[index].companion.skin_ID,
                                species: oneMatchData.info.participants[index].companion.species,
                            },
                            goldLeft: oneMatchData.info.participants[index].gold_left,
                            lastRound: oneMatchData.info.participants[index].last_round,
                            level: oneMatchData.info.participants[index].level,
                            placement: oneMatchData.info.participants[index].placement,
                            playersEliminated: oneMatchData.info.participants[index].players_eliminated,
                            timeEliminated: oneMatchData.info.participants[index].time_eliminated,
                            totalDamageToPlayers: oneMatchData.info.participants[index].total_damage_to_players,
                            traits: [{
                                name: oneMatchData.info.participants[index].traits.name,
                                numUnits: oneMatchData.info.participants[index].traits.num_units,
                                style: oneMatchData.info.participants[index].traits.style,
                                tierCurrent: oneMatchData.info.participants[index].traits.tier_current,
                                tierTotal: oneMatchData.info.participants[index].traits.tier_total
                            }]
                        };
                        
                        oneMatchData.info.participants[index] = Object.assign(playerNameForMatches, oneMatchData.info.participants[index])
                        newMatch.info.participants[index] = Object.assign(newParticipans, oneMatchData.info.participants[index])
                        console.log(newParticipans[index])
                        //doc.oneMatchData.push(newMatch)
                        //console.log(oneMatchData.info.participants[index]);
                        //newMatch.info.participants[index].push(newParticipans);
                    }
                })
                
            }
            
            doc.oneMatchData.push(newMatch);
            allMatchData.push(oneMatchData);
            
        } 
        //console.log(allMatchData[0].metadata);

        res.json([{playerData: playerData, rankData: rankData, matchData: matchData, oneMatchData: allMatchData}])
        
        main().catch(err => console.log(err));

        const addProfile = new Profile(doc);
            console.log(addProfile.name);
            await addProfile.save();
        } catch (err) {
            console.log(err)
        }

}) 

async function serverStartup() {
    try {
        app.listen(PORT, () => console.log('SERVER STARTED'))
    } catch (err) {
        console.log(err)
    }
}

serverStartup()