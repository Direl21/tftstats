import React from 'react';
import styleName from './MatchesInfo.module.css';
import TraitsContainer from '../Traits/TraitsContainer';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

//This component renders information about the matches
//Receives data from riot api (matchesInfo) 
const MatchesInfo = (props) => {
    //console.log(props.matchesInfo);
    if(props.matchesInfo != null){
        let list = props.matchesInfo.map((p, index) => {
            
            p.info.participants.sort((a,b)=> {
                return a.placement - b.placement;
            });

            setTimeout(()=>{
                ReactTooltip.rebuild();
            },2000)
            
           return ( 
                <div key={index} className={styleName.matchBox}>
                    <div  className={styleName.typeGame}> {p.info.tft_game_type}</div>
                    <table>
                        <thead>
                            <tr>
                                <th className={styleName.idCell}>P.</th>
                                <th className={styleName.iconCell}>Icon</th>
                                <th>lvl</th>
                                <th>Summoner</th>
                                <th>Traits</th>
                                <th>Units</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                    {p.info.participants.map((player, index) => {
                        const sec = player.time_eliminated;
                        const secondsToMinut = (sec) => {
                            var sec_num = parseInt(sec, 10); // don't forget the second param
                                var minutes = Math.floor(sec_num / 60);
                                var seconds = sec_num - (minutes * 60);

                                if (minutes < 10) {minutes = "0"+minutes;}
                                if (seconds < 10) {seconds = "0"+seconds;}
                                return minutes+':'+seconds;
                            }
                            console.log("player.traits", player.traits);
                            
                        return ( 
                            <tr key={index}>
                                <td>{player.placement}</td>
                                <td><img className={styleName.profileIcon} alt='' src={`https://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${player.profileIconId}.png`}/></td>
                                <td align="left">{player.level}</td>
                                <td align="left">
                                    <Link to="/profile">{player.name}</Link> 
                                </td>
                                <td>
                                    <TraitsContainer traitsMas={player.traits}/>
                                </td>
                                <td>
                                    {player.units.map((champion, index) => {
                                        let champions_names = champion.character_id; //champions names from API
                                        let champion_name_tooltip = champions_names.split('_').pop(); //remove from string Set6_
                                        return (
                                        <span key={index}>
                                            <span data-tip={`${champion_name_tooltip}`} data-for='tooltipchampname' className={styleName.champIcon}><img alt='' src={`../../../../assets/champions/champ-icon/${champions_names}.png`}/></span>
                                        </span> 
                                        )
                                    })}
                                </td>
                                <td>{secondsToMinut(sec)}</td>
                                
                            </tr> 
                        )
                    })}
                        </tbody>
                    </table>
                </div>)
        });
        return (
            <div>
                <ReactTooltip id='tooltiptraits' effect='solid' getContent={(dataTip) => `${dataTip}`}></ReactTooltip>
                <ReactTooltip id='tooltipchampname' effect='solid' getContent={(dataTip) => `${dataTip}`}></ReactTooltip>
                {list}
            </div>
            );
    } else {
        return "no data";
    }
}

export default MatchesInfo;