import { playerInfoApi} from '../../api/api';
import consoleTool from '../../utils/Tools/Console';

const UPDATE_SEARCH_NAME = 'UPDATE_SEARCH_NAME';
const SEARCH_PLAYER_INFO = 'SEARCH_PLAYER_INFO';
const BUTTON_IS_DISABLED = 'BUTTON_IS_DISABLED';
const PLAYER_RANK_INFO = 'PLAYER_RANK_INFO';
const PLAYER_LIST_MATCHES = 'PLAYER_LIST_MATCHES';
const PLAYER_MATCHES_INFO = 'PLAYER_MATCHES_INFO';
const UPDATE_SERVER_NAME = 'UPDATE_SERVER_NAME';
const PLAYER_MATCHES_INFO_REMOVE = 'PLAYER_MATCHES_INFO_REMOVE';
const SEARCH_PLAYER_INFO_REMOVE = 'SEARCH_PLAYER_INFO_REMOVE';


let initialState = {
    searchName: '',
    searchPlaceholder: 'summoner name',
    searchInfo: null,
    isLoading: false,
    rankInfo: null,
    serverName: {value: 'eune', label: 'EUNE'},
    listMatches: [],
    matchesInfo: [],
}

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_NAME:
            {
                //consoleTool(state.searchName);
                return {
                    ...state,
                    searchName: action.playerName
                }
            }
        case SEARCH_PLAYER_INFO:
            {
                //consoleTool(state.searchInfo);
                return {
                    ...state,
                    searchInfo: action.searchInfo
                }
            }
        case SEARCH_PLAYER_INFO_REMOVE:
            {
                //consoleTool(state.searchInfo);
                return {
                    ...state,
                    searchInfo: null
                }
            }
        case BUTTON_IS_DISABLED:
            {
                //consoleTool(state.isLoading);
                return {
                    ...state,
                    isLoading: action.isLoading
                }
            }
        case PLAYER_RANK_INFO:
            {
                //consoleTool(action.rankInfo);
                return {
                    ...state,
                    rankInfo: action.rankInfo
                }
            }
        case PLAYER_LIST_MATCHES:
            {
                //consoleTool(state.listMatches);
                return {
                    ...state,
                    listMatches: action.listMatches
                }
            }
        case PLAYER_MATCHES_INFO:
            {
                //consoleTool("---------------");
                consoleTool("state.matchesInfo");
                consoleTool(state.matchesInfo);
                //consoleTool("---------------");
                //consoleTool("---------------");
                //consoleTool("action.matchesInfo");
                consoleTool(action.matchesInfo);
                //consoleTool("---------------");

                return {
                    ...state,
                    matchesInfo: action.matchesInfo
                }
            }
        case PLAYER_MATCHES_INFO_REMOVE:
            {
                return {
                    ...state,
                    matchesInfo: []
                }
            }
        case UPDATE_SERVER_NAME:
            {
                //consoleTool(state.serverName);
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
export const searchPlayerInfoRemove = (searchInfo) => ({ type: SEARCH_PLAYER_INFO_REMOVE, searchInfo })
export const buttonDisabled = (isLoading) => ({ type: BUTTON_IS_DISABLED, isLoading })
export const playerRankInfo = (rankInfo) => ({ type: PLAYER_RANK_INFO, rankInfo })
export const playerListMatches = (listMatches) => ({ type: PLAYER_LIST_MATCHES, listMatches })
export const playerMatchesInfo = (matchesInfo) => ({ type: PLAYER_MATCHES_INFO, matchesInfo })
export const playerMatchesInfoRemove = (matchesInfo) => ({ type: PLAYER_MATCHES_INFO_REMOVE, matchesInfo })
export const updateServerName = (e) => ({ type: UPDATE_SERVER_NAME, e })

export const searchSammonerInfo = (playerName, serverValue) => {
    return async (dispatch) => {
        let allProfileInfo;

        dispatch(buttonDisabled(true));
        dispatch(searchPlayerInfoRemove());
        
        const data = await playerInfoApi.getPlayerInfo(playerName, serverValue);
        allProfileInfo = data[0];
        consoleTool(allProfileInfo, 1)
        consoleTool(allProfileInfo.playerData);
            dispatch(searchPlayerInfo(allProfileInfo.playerData));
            
            dispatch(playerRankInfo(allProfileInfo.rankData));
            consoleTool(allProfileInfo.rankData);
    
            dispatch(playerListMatches(allProfileInfo.matchData));
            dispatch(playerMatchesInfoRemove("lol"));
            
            dispatch(playerMatchesInfo(allProfileInfo.oneMatchData));
            consoleTool(allProfileInfo.oneMatchData);
            
            dispatch(buttonDisabled(false));
                         
    }
}

export default homePageReducer;