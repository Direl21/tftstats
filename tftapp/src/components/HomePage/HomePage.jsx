import React from 'react';
import Preloder from '../common/Preloder';
import AccauntInfo from './Info(accaunt,rank,matches)/AccauntInfo';
import MatchesInfo from './Info(accaunt,rank,matches)/MatchesInfo';
import SelectComponent from './SelectComp';

const HomePage = (props) => {
    let searchValue = React.createRef();
    console.log(props);

    let getUserData = () => {
        let serverValue = props.serverName;
        let playerName = searchValue.current.value;
        props.updateSearchName(playerName);
        props.searchSammonerInfo(playerName, serverValue);
        console.log(props)
    }

    return (
        <div>
            <input id="summonerName" placeholder={props.searchPlaceholder} ref={searchValue}/>
            <div>
                <button disabled={props.isLoading} onClick={getUserData}>Search</button>
            </div>
            <SelectComponent updateServerName={props.updateServerName}/>
            <AccauntInfo searchInfo={props.searchInfo}/>
            {props.isLoading ? <Preloder /> : null }
            <MatchesInfo matchesInfo={props.matchesInfo} />
        </div>
    )
}

export default HomePage;