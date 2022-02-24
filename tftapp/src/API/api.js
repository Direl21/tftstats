import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://eun1.api.riotgames.com/tft/',
    withCredentials: false
});

const api = "?api_key=RGAPI-6cd33a23-4a8e-41ab-8bb1-fcb177452c39";

export const summonerInfoAPI = {
    getPlayerInfo(playerName) {
        return instance.get(`summoner/v1/summoners/by-name/${playerName}${api}`)
        .then(response => response.data);
    }
}