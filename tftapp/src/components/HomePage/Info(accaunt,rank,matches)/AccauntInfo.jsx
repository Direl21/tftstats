import React from 'react';
import iron from '../../../assets/ranked-emblems/Emblem_Iron.png'
import bronze from '../../../assets/ranked-emblems/Emblem_Bronze.png'
import silver from '../../../assets/ranked-emblems/Emblem_Silver.png'
import gold from '../../../assets/ranked-emblems/Emblem_Gold.png'
import platinum from '../../../assets/ranked-emblems/Emblem_Platinum.png'
import diamond from '../../../assets/ranked-emblems/Emblem_Diamond.png'
import master from '../../../assets/ranked-emblems/Emblem_Master.png'
import grandmaster from '../../../assets/ranked-emblems/Emblem_Grandmaster.png'
import challenger from '../../../assets/ranked-emblems/Emblem_Challenger.png'

const AccauntInfo = (props) => {
    console.log(props);
    if (props.searchInfo === null || props.rankInfo === null) {
        return <div></div>
    }
    return (
        <div>
            <div>{props.searchInfo.name}</div>
            <div>{props.searchInfo.summonerLevel}</div>
            <img alt='' src={`https://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${props.searchInfo.profileIconId}.png`}/>
            {props.rankInfo.map( (p, index) => {
                let icon = "";
                switch (p.tier) {
                    case "IRON":
                        icon = iron;
                      break;
                    case "BRONZE":
                        icon = bronze;
                      break;
                    case "SILVER":
                        icon = silver;
                      break;
                    case "GOLD":
                        icon = gold;
                      break;
                    case "PLATINUM":
                        icon = platinum;
                      break;
                    case "DIAMOND":
                        icon = diamond;
                      break;
                    case "MASTER":
                        icon = master;
                      break;
                    case "GRANDMASTER":
                        icon = grandmaster;
                      break;
                    case "CHALLENGER":
                        icon = challenger;
                  }
                return(
                    <div  key={index}>
                        {p.tier}
                        <img src={icon}/>
                    </div>
                ) 
                    
            })}
    
        </div>
    )
}

export default AccauntInfo;