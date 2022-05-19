import React from 'react';
import consoleTool from '../../utils/Tools/Console';
import styleName from './AccountInfo.module.css';
import { RankIconSwitch } from './Helper/RankIconSwitch';

//This component renders information about the account
//Receives data from riot api (searchInfo, rankInfo) 
const AccauntInfo = (props) => {
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
            
            {props.rankInfo.map( (p, index) => { //getting data from array
            
                //this function determines the appropriate icon for the rank
                let icon = RankIconSwitch(p.tier);
                
                return(
                    <div key={index} className={styleName.profileElo}>
                        <div className={styleName.profileEloName}>{p.tier} {p.rank}</div>
                        <img alt='' className={styleName.rankIcon} src={icon.icon}/>
                    </div>
                ) 
                    
            })}
    
        </div>
    )
}

export default AccauntInfo;