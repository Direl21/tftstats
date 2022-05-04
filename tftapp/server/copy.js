import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import Profile from './ProfileInfo.js';
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
    
        console.log("dadfd")
        let playerName = req.params.name;
        let serverValue = req.params.server;
        whichServerName(serverValue);
        whichGlobalServerName(serverValue);

        // get player name (search player name on db)
        

        const playerData = await summonerInfoAPI.getPlayerInfo(playerName, serverValue);
        const rankData = await summonerInfoAPI.getRankInfo(playerData.id);

        // if player name not on DB, add to DB data 
        
        const matchData = await summonerInfoAPI.getMatches(playerData.puuid);
        let allMatchData = [];
        let oneMatchData;
        for (const id of matchData) {
            oneMatchData = await summonerInfoAPI.getMatchesInfo(id)
            
            for (const puuid of oneMatchData.metadata.participants) {
                const playerNameForMatches = await summonerInfoAPI.getPlayerNameByPuuid(puuid)
                //console.log(playerNameForMatches);

                oneMatchData.metadata.participants.forEach((puuid2, index) => {
                    if (puuid2 === puuid) {
                        //consoleTool("it is working");
                        oneMatchData.info.participants[index] = Object.assign(playerNameForMatches, oneMatchData.info.participants[index])
                        //console.log(oneMatchData.info.participants[index]);
                    }
                })
            }
            allMatchData.push(oneMatchData);
            
        } 
        res.json([{playerData: playerData, rankData: rankData, matchData: matchData, oneMatchData: allMatchData}])
    
}) 

async function serverStartup() {
    try {
        app.listen(PORT, () => console.log('SERVER STARTED'))
    } catch (err) {
        console.log(err)
    }
}

serverStartup()