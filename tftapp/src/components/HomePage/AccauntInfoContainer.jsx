import React from 'react';
import {connect} from 'react-redux'
import Input from './Input';
import { updateSearchName, searchSammonerInfo } from '../../redux/Reducers/homePageReducer';


let mapStateToProps = (state) => {
    return {
        homePage: state.homePage,
        searchName: state.homePage.searchName,
        searchPlaceholder: state.homePage.searchPlaceholder,
    }
}

const AccauntInfoContainer = connect(mapStateToProps, {updateSearchName, searchSammonerInfo})(Input);

export default AccauntInfoContainer;