import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://eun1.api.riotgames.com/tft/',
    withCredentials: false
});

const instanceMatches = axios.create({
    baseURL: 'https://europe.api.riotgames.com/tft',
    withCredentials: false
})

const api = "?api_key=RGAPI-9f57b521-68b9-4b88-8f83-4e26bed498cb";

export const summonerInfoAPI = {
    getPlayerInfo(playerName) {
        return instance.get(`summoner/v1/summoners/by-name/${playerName}${api}`)
        .then(response => response.data);
    },
    getRankInfo(id) {
        return instance.get(`league/v1/entries/by-summoner/${id}${api}`)
        .then(response => response.data);
    },
    getMatchesInfo(puuid) {
        return instanceMatches.get(`match/v1/matches/by-puuid/${puuid}/ids${api}`)
        .then(response => response.data);
    }
}
