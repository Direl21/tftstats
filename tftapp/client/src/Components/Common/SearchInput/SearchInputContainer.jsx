import React from 'react';
import {connect} from 'react-redux';
import { updateServerName} from '../../../Redux/Reducers/homePageReducer';
import SearchInput from './SearchInput';

const SearchInputContainer = (props) => {

    return <>

        <SearchInput 
            searchPlaceholder={props.searchPlaceholder}
            isLoading={props.isLoading}
            serverName={props.serverName}
            updateServerName={props.updateServerName}
        />
    </>

}

let mapStateToProps = (state) => {
    return {
        homePage: state.homePage,
        searchPlaceholder: state.homePage.searchPlaceholder,
        isLoading: state.homePage.isLoading,
        serverName: state.homePage.serverName,
        updateServerName: state.homePage.updateServerName,
    }
}

export default connect(mapStateToProps, {updateServerName})(SearchInputContainer);