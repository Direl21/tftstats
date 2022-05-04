import * as axios from 'axios';
import consoleTool from '../Components/Common/Tools/Console';

//request for player accaunt info
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