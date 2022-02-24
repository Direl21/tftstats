import {summonerInfoAPI} from '../../API/api';

const UPDATE_SEARCH_NAME = 'UPDATE_SEARCH_NAME';
const SEARCH_PLAYER_INFO = 'SEARCH_PLAYER_INFO';
const BUTTON_IS_DISABLED = 'BUTTON_IS_DISABLED';

let initialState = {
    searchName: '',
    searchPlaceholder: 'summoner name', 
    searchInfo: null,
    isLoading: false,
    disaableBut: []
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
        case BUTTON_IS_DISABLED: {
            console.log(state.isLoading);
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default: 
            return state;
    }
}

export const updateSearchName = (playerName) => ({type: UPDATE_SEARCH_NAME, playerName})
export const searchPlayerInfo = () => ({type: SEARCH_PLAYER_INFO})
export const buttonDisabled = (isLoading) => ({type: BUTTON_IS_DISABLED, isLoading})

export const searchSammonerInfo = (playerName) => {
    return (dispatch) => {
        dispatch(buttonDisabled(true));
        console.log(buttonDisabled);
        summonerInfoAPI.getPlayerInfo(playerName)
            .then(data => {
                dispatch(searchPlayerInfo(data));
                dispatch(buttonDisabled(false));
                console.log(buttonDisabled);
            })
    }
} 

export default homePageReducer;