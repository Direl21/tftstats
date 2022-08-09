import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import ProfilePage from './ProfilePage';
import { searchSammonerInfo, updateSearchName, sendErrorsOnServer } from '../../store/Reducers/HomePageReducer';

import { useParams } from 'react-router-dom';

//connect component with reducer
const ProfilePageContainer =  (props) => {

    let params = useParams();
    
    useEffect( () => {
        let getUserData = async () => {
            await props.updateSearchName(params.playerName);
            await props.searchSammonerInfo(params.playerName, params.serverValue);
         };
         getUserData();
      }, [params.playerName]);

    return <>

        <ProfilePage 
            searchInfo={props.searchInfo}
            isLoading={props.isLoading}
            listMatches={props.listMatches}
            matchesInfo={props.matchesInfo}
            rankInfo={props.rankInfo}
            puuId={props.puuId}
            searchName={props.searchName}
            serverName={props.serverName}
            sendErrorsOnServer={props.sendErrorsOnServer}
        />
    </>
}

let mapStateToProps = (state) => {
    return {
        homePage: state.homePage,
        searchInfo: state.homePage.searchInfo,
        isLoading: state.homePage.isLoading,
        listMatches: state.homePage.listMatches,
        matchesInfo: state.homePage.matchesInfo,
        rankInfo: state.homePage.rankInfo,
        puuId: state.homePage.puuId,
        searchSammonerInfo: state.homePage.searchSammonerInfo,
        updateSearchName: state.homePage.updateSearchName,
        searchName: state.homePage.searchName,
        serverName: state.homePage.serverName,
        sendErrorsOnServer: state.homePage.sendErrorsOnServer,
    }
}

export default connect(mapStateToProps, { searchSammonerInfo, updateSearchName, sendErrorsOnServer })(ProfilePageContainer);