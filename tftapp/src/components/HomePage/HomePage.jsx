import React from 'react';
import Preloder from '../common/Preloder';
import './homepega.css';
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
        searchValue.current.value = "";
    }
    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.key === "Enter") {
        getUserData();
      }
    };
    return (
        <div>
            <div className='form'>
                <input id="summonerName" className="search-input" placeholder={props.searchPlaceholder} ref={searchValue} onKeyPress={handleKeypress}/>
                <div>
                    <button className="search-btn" disabled={props.isLoading} onClick={getUserData} type="submit">Search</button>
                </div>
                <SelectComponent updateServerName={props.updateServerName}/>
            </div>
                <AccauntInfo searchInfo={props.searchInfo} rankInfo={props.rankInfo}/>
                
                {props.isLoading ? <Preloder /> : null }
                <MatchesInfo matchesInfo={props.matchesInfo} puuId={props.puuId} />
        </div>
    )
}

export default HomePage;