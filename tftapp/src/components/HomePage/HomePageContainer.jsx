import React from 'react';
import {connect} from 'react-redux'
import HomePage from './HomePage';
import { updateSearchName, searchSammonerInfo, buttonDisabled } from '../../redux/Reducers/homePageReducer';

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
        buttonDisabled: state.homePage.buttonDisabled
    }
}

export default connect(mapStateToProps, {updateSearchName, searchSammonerInfo, buttonDisabled})(HomePageContainer);