import { summonerInfoAPI, whichServerName } from '../../API/api';

const UPDATE_SEARCH_NAME = 'UPDATE_SEARCH_NAME';
const SEARCH_PLAYER_INFO = 'SEARCH_PLAYER_INFO';
const BUTTON_IS_DISABLED = 'BUTTON_IS_DISABLED';
const PLAYER_RANK_INFO = 'PLAYER_RANK_INFO ';
const PLAYER_LIST_MATCHES = 'PLAYER_LIST_MATCHES ';
const PLAYER_MATCHES_INFO = 'PLAYER_MATCHES_INFO ';
const UPDATE_SERVER_NAME = 'UPDATE_SERVER_NAME ';

const timer = ms => new Promise(res => setTimeout(res, ms));

let initialState = {
    searchName: '',
    searchPlaceholder: 'summoner name',
    searchInfo: null,
    isLoading: false,
    rankInfo: null,
    serverName: {value: 'eune', label: 'EUNE'},
    listMatches: [],
    matchesInfo: []
}

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_NAME:
            {
                console.log(state.searchName);
                return {
                    ...state,
                    searchName: action.playerName
                }
            }
        case SEARCH_PLAYER_INFO:
            {
                console.log(state.searchInfo);
                return {
                    ...state,
                    searchInfo: action.searchInfo
                }
            }
        case BUTTON_IS_DISABLED:
            {
                console.log(state.isLoading);
                return {
                    ...state,
                    isLoading: action.isLoading
                }
            }
        case PLAYER_RANK_INFO:
            {
                console.log(action.rankInfo);
                return {
                    ...state,
                    rankInfo: action.rankInfo
                }
            }
        case PLAYER_LIST_MATCHES:
            {
                console.log(state.listMatches);
                return {
                    ...state,
                    listMatches: action.listMatches
                }
            }
        case PLAYER_MATCHES_INFO:
            {
                console.log("---------------");
                console.log("state.matchesInfo");
                console.log(state.matchesInfo);
                console.log("---------------");
                console.log("---------------");
                console.log("action.matchesInfo");
                console.log(action.matchesInfo);
                console.log("---------------");

                return {
                    ...state,
                    matchesInfo: [...state.matchesInfo, action.matchesInfo]
                }
            }
        case UPDATE_SERVER_NAME:
            {
                console.log(state.serverName);
                return {
                    ...state,
                    serverName: action.e
                }
            }
        default:
            return state;
    }
}

export const updateSearchName = (playerName) => ({ type: UPDATE_SEARCH_NAME, playerName })
export const searchPlayerInfo = (searchInfo) => ({ type: SEARCH_PLAYER_INFO, searchInfo })
export const buttonDisabled = (isLoading) => ({ type: BUTTON_IS_DISABLED, isLoading })
export const playerRankInfo = (rankInfo) => ({ type: PLAYER_RANK_INFO, rankInfo })
export const playerListMatches = (listMatches) => ({ type: PLAYER_LIST_MATCHES, listMatches })
export const playerMatchesInfo = (matchesInfo) => ({ type: PLAYER_MATCHES_INFO, matchesInfo })
export const updateServerName = (e) => ({ type: UPDATE_SERVER_NAME, e })

export const searchSammonerInfo = (playerName, serverValue) => {
    return async (dispatch) => {
        dispatch(buttonDisabled(true));
        whichServerName(serverValue);
        const playerData = await summonerInfoAPI.getPlayerInfo(playerName);
                dispatch(searchPlayerInfo(playerData));
                console.log(playerData);
                const rankData = await summonerInfoAPI.getRankInfo(playerData.id)
                        dispatch(playerRankInfo(rankData));
                        console.log(rankData);
                const matchData = await summonerInfoAPI.getMatches(playerData.puuid)
                        dispatch(playerListMatches(matchData));
                        for (const id of matchData) {
                            const oneMatchData = await summonerInfoAPI.getMatchesInfo(id) 
                            console.log(oneMatchData);
                            dispatch(playerMatchesInfo(oneMatchData))
                            dispatch(buttonDisabled(false));
                        }   
    }
}

export default homePageReducer;