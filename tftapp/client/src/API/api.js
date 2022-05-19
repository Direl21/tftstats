import * as axios from 'axios';

//request on server
const server = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: false
});


export const playerInfoApi = {
    getPlayerInfo(playerName, serverValue) {
        return server.get(`profile/${playerName}/${serverValue}`)
            .then(response => response.data);
    },
    
}