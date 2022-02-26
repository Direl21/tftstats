import {summonerInfoAPI} from '../../API/api';

const UPDATE_SEARCH_NAME = 'UPDATE_SEARCH_NAME';
const SEARCH_PLAYER_INFO = 'SEARCH_PLAYER_INFO';
const BUTTON_IS_DISABLED = 'BUTTON_IS_DISABLED';
const PLAYER_RANK_INFO = 'PLAYER_RANK_INFO ';
const PLAYER_MATCHES_INFO = 'PLAYER_MATCHES_INFO ';

let initialState = {
    searchName: '',
    searchPlaceholder: 'summoner name', 
    searchInfo: null,
    isLoading: false,
    rankInfo: null,
    matchesInfo: null,
}

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_NAME: {
            console.log(state.searchName);
            return {
                ...state, searchName: action.playerName
            }
        }
        case SEARCH_PLAYER_INFO: {
            console.log(state.searchInfo);
            return {
                ...state, searchInfo: action.searchInfo
            }
        }
        case BUTTON_IS_DISABLED: {
            console.log(state.isLoading);
            return {
                ...state, isLoading: action.isLoading
            }
        }
        case PLAYER_RANK_INFO : {
            console.log(state.rankInfo);
            return {
                ...state, rankInfo: action.rankInfo
            }
        }
        case PLAYER_MATCHES_INFO : {
            console.log(state.matchesInfo);
            return {
                ...state, matchesInfo: action.matchesInfo
            }
        }
        default: 
            return state;
    }
}

export const updateSearchName = (playerName) => ({type: UPDATE_SEARCH_NAME, playerName})
export const searchPlayerInfo = (searchInfo) => ({type: SEARCH_PLAYER_INFO, searchInfo})
export const buttonDisabled = (isLoading) => ({type: BUTTON_IS_DISABLED, isLoading})
export const playerRankInfo = (rankInfo) => ({type: PLAYER_RANK_INFO, rankInfo})
export const playerMatchesInfo = (matchesInfo) => ({type: PLAYER_MATCHES_INFO, matchesInfo})

export const searchSammonerInfo = (playerName) => {
    return (dispatch) => {
        dispatch(buttonDisabled(true));
        summonerInfoAPI.getPlayerInfo(playerName)
            .then(data => {
                dispatch(searchPlayerInfo(data));
                dispatch(buttonDisabled(false));
                console.log(data);
                summonerInfoAPI.getRankInfo(data.id) 
                    .then(data => {
                        dispatch(playerRankInfo(data));
                        console.log(data);
                    })
                summonerInfoAPI.getMatchesInfo(data.puuid)
                    .then(data => {
                        dispatch(playerMatchesInfo(data));
                        console.log(data);
                    })
            })
    }
} 

export default homePageReducer;