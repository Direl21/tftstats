import React from 'react';
import {connect} from 'react-redux'
import Input from './Input';
import { updateSearchName, searchSammonerInfo, buttonDisabled } from '../../redux/Reducers/homePageReducer';

class AccauntInfoContainer extends React.Component {
    render() {
        return <>
            <Input buttonDisabled={this.props.buttonDisabled}
            searchName={this.props.searchName}
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
        searchPlaceholder: state.homePage.searchPlaceholder,
        isLoading: state.homePage.isLoading,
        buttonDisabled: state.homePage.buttonDisabled
    }
}

//const AccauntInfoContainer = connect(mapStateToProps, {updateSearchName, searchSammonerInfo, buttonDisabled})(Input);

export default connect(mapStateToProps, {updateSearchName, searchSammonerInfo, buttonDisabled})(AccauntInfoContainer);