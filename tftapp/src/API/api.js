import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://eun1.api.riotgames.com/tft/',
    withCredentials: false
});

const api = "?api_key=RGAPI-5e44756b-61bb-4897-9ccf-f5ec068dce96";

export const summonerInfoAPI = {
    getPlayerInfo(playerName) {
        return instance.get(`summoner/v1/summoners/by-name/${playerName}${api}`)
        .then(response => response.data);
    }
}