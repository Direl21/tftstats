import React from 'react';
import {connect} from 'react-redux'
import Input from './Input';
import { updateSearchName, searchSammonerInfo } from '../../redux/Reducers/homePageReducer';


let mapStateToProps = (store) => {
    return {
        homePage: store.homePage,
        searchName: store.homePage.searchName,
        searchPlaceholder: store.homePage.searchPlaceholder,
    }
}

const AccauntInfoContainer = connect(mapStateToProps, {updateSearchName, searchSammonerInfo})(Input);

export default AccauntInfoContainer;