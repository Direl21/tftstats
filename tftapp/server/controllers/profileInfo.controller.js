import { Profile } from "../ProfileInfo.js";
import { summonerInfoAPI, whichServerName, whichGlobalServerName } from "../services/api.js";
import { doc, newMatchInfo, newParticipansInfo, newTraitsInfo, newUnitsInfo } from "../db/db.js";
import 'dotenv/config';

export const startServer = (req, res) => {
    res.status(200).json('SERVER WORKED')
};

export const riotApiRequest = async (req, res) => {
    
    let playerName = req.params.name;
    let serverValue = req.params.server;
    whichServerName(serverValue);
    whichGlobalServerName(serverValue);

    /*const searchInDb = await Profile.exists({ 
        name: playerName, 
        serverName: serverValue },
        (err, result) => {
            if(err){
                console.log(err.message)
            } else{
                console.log("result:", result)
            }
        }
        
    )*/

        
    //console.log('searchInDb', searchInDb)
    // get player name (search player name on db)
    const playerData = await summonerInfoAPI.getPlayerInfo(playerName, serverValue); //request to the api server, getting info about the player's profile
    const rankData = await summonerInfoAPI.getRankInfo(playerData.id); //request to the api server, getting info about the player's rank
    
    // if player name not on DB, add to DB data 
    const matchData = await summonerInfoAPI.getMatches(playerData.puuid); //request to the api server, getting match id
    
   
    try {
        // create a document to insert
        let docData = doc(playerData, rankData, matchData, serverValue);

    //array to add many arrays(oneMatchData)
    let allMatchData = []; 
    let oneMatchData;

    
    for (const id of matchData) {
        //request to the api server, getting info about matches by id from matchData
        oneMatchData = await summonerInfoAPI.getMatchesInfo(id) 
        //defining a model for writing data to the database
        let newMatch = newMatchInfo(oneMatchData); 

        for (const puuid of oneMatchData.metadata.participants) {
            const playerNameForMatches = await summonerInfoAPI.getPlayerNameByPuuid(puuid)
            
            
            oneMatchData.metadata.participants.forEach((puuid2, index) =>  {
                if (puuid2 === puuid) {
                   
                    let newParticipans = newParticipansInfo(oneMatchData, index);
                    
                    Object.assign(oneMatchData.info.participants[index], playerNameForMatches);
                    newMatch.info.participants[index] = Object.assign(newParticipans, playerNameForMatches);


                    oneMatchData.info.participants[index].traits.forEach((puuid2, index2) =>  {
                        //defining a model for writing data to the database
                        let newTraitsData = newTraitsInfo(oneMatchData, index, index2); 
                        
                        newParticipans.traits[index2] = Object.assign(oneMatchData.info.participants[index].traits[index2], newTraitsData);
                        
                    });

                    oneMatchData.info.participants[index].units.forEach((puuid2, index3) =>  {
                        //defining a model for writing data to the database
                        let newUnitsData = newUnitsInfo(oneMatchData, index, index3); 
                        
                        newParticipans.units[index3] = Object.assign(oneMatchData.info.participants[index].units[index3], newUnitsData);
                        
                    });
                }
            })
            
        }
        
        docData.oneMatchData.push(newMatch);
        
        allMatchData.push(oneMatchData);

        
    } 

    //res.json(docData)
    
    res.json([{playerData: playerData, rankData: rankData, matchData: matchData, oneMatchData: allMatchData}])

    const addProfile = new Profile(docData, true);
        await addProfile.save();
    } catch (e) {
        console.log(e.message)
    }

}