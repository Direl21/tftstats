import { newMatchInfo, newParticipansInfo, newTraitsInfo, newUnitsInfo } from "../../db/db.js";
import { summonerInfoAPI } from "../../services/api.js";

export const getMatchesData = async (matchData, docData) => {
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
}