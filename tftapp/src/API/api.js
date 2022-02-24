import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://eun1.api.riotgames.com/tft/',
    withCredentials: false
});

const api = "?api_key=RGAPI-69de09f8-9191-4233-8610-1a9605aa45a6";

export const summonerInfoAPI = {
    getPlayerInfo(playerName) {
        return instance.get(`summoner/v1/summoners/by-name/${playerName}${api}`)
        .then(response => response.data);
    }
}