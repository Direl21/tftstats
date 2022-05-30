import { summonerInfoAPI } from "../../services/api.js";

export const apiRequest = async (playerName, serverValue) => {
    console.log('PLAYERNAME:',playerName);
    console.log('SERVERVALUE:',serverValue);
    // get player name (search player name on db)
    const playerData = await summonerInfoAPI.getPlayerInfo(playerName, serverValue); //request to the api server, getting info about the player's profile
    const rankData = await summonerInfoAPI.getRankInfo(playerData.id); //request to the api server, getting info about the player's rank
    // if player name not on DB, add to DB data 
    const matchData = await summonerInfoAPI.getMatches(playerData.puuid); //request to the api server, getting match id

    return {playerData: playerData, rankData: rankData, matchData: matchData}
}