import * as axios from 'axios';

//request on server
const server = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: false
});

//request on server POST
const serverPost = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: false,
    accesscontrolalloworigin: "*",
    accesscontrolallowMethods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  
});

const config = {
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };


export const playerInfoApi = {
    getPlayerInfo(playerName, serverValue) {
        return server.get(`profile/${playerName}/${serverValue}`)
            .then(response => response.data);
    },   
}

export const sendErrorApi = {
    sendError(playerName, serverValue, type, errorData) {
        return server.post('profile/iconerrors', 
            {
                "playerName" : playerName,
                "serverValue" : serverValue,
                "type" : type, 
                "errorData" : errorData
            },
            config
        )
            .then(response => response.data);
    }
}