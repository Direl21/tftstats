import axios from 'axios';
import 'dotenv/config';

//request for player accaunt info
const instanceEUNE = axios.create({
    baseURL: 'https://eun1.api.riotgames.com/tft/',
    withCredentials: false
});

const instanceEUW = axios.create({
    baseURL: 'https://euw1.api.riotgames.com/tft/',
    withCredentials: false
});

const instanceBR = axios.create({
    baseURL: 'https://br1.api.riotgames.com/tft/',
    withCredentials: false
});

const instanceJP = axios.create({
    baseURL: 'https://jp1.api.riotgames.com/tft/',
    withCredentials: false
});

const instanceKR = axios.create({
    baseURL: 'https://kr.api.riotgames.com/tft/',
    withCredentials: false
});

const instanceLAN = axios.create({
    baseURL: 'https://la1.api.riotgames.com/tft/',
    withCredentials: false
});

const instanceLAS = axios.create({
    baseURL: 'https://la2.api.riotgames.com/tft/',
    withCredentials: false
});

const instanceNA = axios.create({
    baseURL: 'https://na1.api.riotgames.com/tft/',
    withCredentials: false
});

const instanceOCE = axios.create({
    baseURL: 'https://oc1.api.riotgames.com/tft/',
    withCredentials: false
});

const instanceTR = axios.create({
    baseURL: 'https://tr1.api.riotgames.com/tft/',
    withCredentials: false
});

const instanceRU = axios.create({
    baseURL: 'https://ru.api.riotgames.com/tft/',
    withCredentials: false
});

//request for matches info
const instanceMatchesEurope = axios.create({
    baseURL: 'https://europe.api.riotgames.com/tft/',
    withCredentials: false
})

const instanceMatchesAmerican = axios.create({
  baseURL: 'https://americas.api.riotgames.com/tft/',
  withCredentials: false
})

const instanceMatchesAsia = axios.create({
  baseURL: 'https://asia.api.riotgames.com/tft/',
  withCredentials: false
})


//true server name for select
let url = '';
export const whichServerName = (serverValue) => {
  switch (serverValue) {
    case "eune":
      url = instanceEUNE;
      break;
    case "euw":
      url = instanceEUW;
      break;
    case "br":
      url = instanceBR;
      break;
    case "jp":
      url = instanceJP;
      break;
    case "kr":
      url = instanceKR;
      break;
    case "lan":
      url = instanceLAN;
      break;
    case "las":
      url = instanceLAS;
      break;
    case "na":
      url = instanceNA;
      break;
    case "oce":
      url = instanceOCE;
      break;
    case "tr":
      url = instanceTR;
      break;
    case "ru":
      url = instanceRU;
  }
  console.log(url)
}


//true global server name for matches
let globalUrl = '';

export const whichGlobalServerName = (serverValue) => {
  //console.log('serverValue '+serverValue)
    if (serverValue === "eune" || serverValue === "euw" || serverValue === "tr" || serverValue === "ru") {
      console.log('instanceMatchesEurope')
      globalUrl = instanceMatchesEurope;
    } else if (serverValue === "na" || serverValue === "br" || serverValue === "lan" || serverValue === "las" || serverValue === "oce") {
      console.log('instanceMatchesAmerican')
      globalUrl = instanceMatchesAmerican;
    } else if (serverValue === "kr" || serverValue === "jp") {
      console.log('instanceMatchesAsia')
      globalUrl = instanceMatchesAsia;
    } else {
      console.log('error')
    }
}

const api = "?api_key=" + process.env.API_KEY;

export const summonerInfoAPI = {
    getPlayerInfo(playerName) {
        console.log(url);
        console.log("url");
        return url.get(`summoner/v1/summoners/by-name/${playerName}${api}`)
            .then(response => response.data);
    },
    getRankInfo(id) {
        return url.get(`league/v1/entries/by-summoner/${id}${api}`)
            .then(response => response.data);
    },
    getMatches(puuid) {
        return globalUrl.get(`match/v1/matches/by-puuid/${puuid}/ids${api}&count=2`)
            .then(response => response.data);
    },
    getMatchesInfo(id) {
        return globalUrl.get(`match/v1/matches/${id}${api}`)
            .then(response => response.data);
    },
    getPlayerNameByPuuid(puuid) {
      return url.get(`summoner/v1/summoners/by-puuid/${puuid}${api}`)
            .then(response => response.data);
    }
}