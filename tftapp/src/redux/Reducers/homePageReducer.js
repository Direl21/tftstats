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
                console.log(state.rankInfo);
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
                console.log(state.matchesInfo);
                return {
                    ...state,
                    matchesInfo: action.matchesInfo
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
    return (dispatch) => {
        dispatch(buttonDisabled(true));
        whichServerName(serverValue);
        summonerInfoAPI.getPlayerInfo(playerName)
            .then(data => {
                dispatch(searchPlayerInfo(data));
                console.log(data);
                summonerInfoAPI.getRankInfo(data.id)
                    .then(data => {
                        dispatch(playerRankInfo(data));
                        console.log(data);
                    })
                summonerInfoAPI.getMatches(data.puuid)
                    .then(data => {
                        dispatch(playerListMatches(data));
                        let row = new Array();
                        let timer = 1;
                        data.forEach((item, index) => {
                            setTimeout(() => {
                                summonerInfoAPI.getMatchesInfo(item)
                                    .then(data => {
                                        row.push(data);
                                    })

                            }, 500 * index);
                            timer = 500 * index;
                        });
                        setTimeout(() => {
                            dispatch(playerMatchesInfo(row));
                            dispatch(buttonDisabled(false));
                        }, timer)
                    })
            })
    }
}

export default homePageReducer;