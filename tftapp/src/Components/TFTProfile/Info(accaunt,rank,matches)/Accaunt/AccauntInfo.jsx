import React from 'react';
import styleName from './AccauntInfo.module.css';

//This component renders information about the account
//Receives data from riot api (searchInfo, rankInfo) 
const AccauntInfo = (props) => {
    //console.log(props);
    if (props.searchInfo === null || props.rankInfo === null) {
        return <div></div>
    }
    return (
        <div className={styleName.profileInfo}>
            <div className={styleName.profileIconBox}>
              <img className={styleName.profileIcon} alt='' src={`https://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${props.searchInfo.profileIconId}.png`}/>
              <div className={styleName.profileLvl}>{props.searchInfo.summonerLevel}</div>
            </div>
            <div className={styleName.profileDetail}>
              <div className={styleName.profileName}>{props.searchInfo.name}</div>
            </div>
            {props.rankInfo.map( (p, index) => {
                let icon = "";
                switch (p.tier) {
                    case "IRON":
                        icon = require("../../../../Assets/ranked-emblems/Emblem_Iron.png");
                      break;
                    case "BRONZE":
                        icon = require("../../../../Assets/ranked-emblems/Emblem_Bronze.png");
                      break;
                    case "SILVER":
                        icon = require("../../../../Assets/ranked-emblems/Emblem_Silver.png");
                      break;
                    case "GOLD":
                        icon = require("../../../../Assets/ranked-emblems/Emblem_Gold.png");
                      break;
                    case "PLATINUM":
                        icon = require("../../../../Assets/ranked-emblems/Emblem_Platinum.png");
                      break;
                    case "DIAMOND":
                        icon = require("../../../../Assets/ranked-emblems/Emblem_Diamond.png");
                      break;
                    case "MASTER":
                        icon = require("../../../../Assets/ranked-emblems/Emblem_Master.png");
                      break;
                    case "GRANDMASTER":
                        icon = require("../../../../Assets/ranked-emblems/Emblem_Grandmaster.png");
                      break;
                    case "CHALLENGER":
                        icon = require("../../../../Assets/ranked-emblems/Emblem_Challenger.png");
                  }
                return(
                    <div key={index} className={styleName.profileElo}>
                        <div className={styleName.profileEloName}>{p.tier} {p.rank}</div>
                        <img alt='' className={styleName.rankIcon} src={icon}/>
                    </div>
                ) 
                    
            })}
    
        </div>
    )
}

export default AccauntInfo;