import {summonerInfoAPI} from '../../API/api'

const UPDATE_SEARCH_NAME = 'UPDATE_SEARCH_NAME';
const SEARCH_PLAYER_INFO = 'SEARCH_PLAYER_INFO';

let initialState = {
    searchName: '',
    searchPlaceholder: 'summoner name', 
    searchInfo: null,
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
            console.log(state.searchName);
            return {
                ...state, searchInfo: action.searchInfo
            }
        }
        default: 
            return state;
    }
}

export const updateSearchName = (playerName) => ({type: UPDATE_SEARCH_NAME, playerName})
export const searchPlayerInfo = () => ({type: SEARCH_PLAYER_INFO})

export const searchSammonerInfo = (playerName) => {
    return (dispatch) => {
    
        summonerInfoAPI.getPlayerInfo(playerName)
            .then(data => {
                dispatch(searchPlayerInfo(data));
            })
    }
} 

export default homePageReducer;