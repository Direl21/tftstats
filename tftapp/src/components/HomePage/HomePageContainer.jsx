import React from 'react';
import {connect} from 'react-redux'
import HomePage from './HomePage';
import { updateSearchName, searchSammonerInfo, buttonDisabled, updateServerName } from '../../redux/Reducers/homePageReducer';

class HomePageContainer extends React.Component {
    render() {
        return <>
            
            <HomePage buttonDisabled={this.props.buttonDisabled}
            searchName={this.props.searchName}
            searchInfo={this.props.searchInfo}
            searchPlaceholder={this.props.searchPlaceholder}
            isLoading={this.props.isLoading}
            searchSammonerInfo={this.props.searchSammonerInfo}
            updateSearchName={this.props.updateSearchName}
            listMatches={this.props.listMatches}
            matchesInfo={this.props.matchesInfo}
            updateServerName={this.props.updateServerName}
            serverName={this.props.serverName}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        homePage: state.homePage,
        searchName: state.homePage.searchName,
        searchInfo: state.homePage.searchInfo,
        searchPlaceholder: state.homePage.searchPlaceholder,
        isLoading: state.homePage.isLoading,
        buttonDisabled: state.homePage.buttonDisabled,
        listMatches: state.homePage.listMatches,
        matchesInfo: state.homePage.matchesInfo,
        serverName: state.homePage.serverName,
        updateServerName: state.homePage.updateServerName
    }
}

export default connect(mapStateToProps, {updateSearchName, searchSammonerInfo, buttonDisabled, updateServerName})(HomePageContainer);