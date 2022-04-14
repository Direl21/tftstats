import React from 'react';
import styleName from './MatchesInfo.module.css';
import TraitsContainer from '../Traits/TraitsContainer';
import ReactTooltip from 'react-tooltip';
import { NavLink, useParams } from 'react-router-dom';
import Units from '../Units/Units';
import Arguments from '../Arguments/Arguments';

//This component renders information about the matches
//Receives data from riot api (matchesInfo) 
const MatchesInfo = (props) => {
    let params = useParams();
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
                                <th>Arguments</th>
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
                            console.log("player.name", player.name);
                            console.log("player.traits", player.traits);
                            const url = "/profile/" + params.serverValue + "/" + player.name
                        return ( 
                            <tr key={index}>
                                <td>{player.placement}</td>
                                <td><img className={styleName.profileIcon} alt='' src={`https://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${player.profileIconId}.png`}/></td>
                                <td align="left">{player.level}</td>
                                <td align="left" className={styleName.nameCell} >
                                    <NavLink className={styleName.champLink} to={url}>{player.name}</NavLink> 
                                </td>
                                <td > 
                                    <Arguments argument={player.augments}/>
                                </td>
                                <td>
                                    <TraitsContainer traitsMas={player.traits}/>
                                </td>
                                <td>
                                    <div className={styleName.champCell}>
                                        <Units units={player.units}/>
                                    </div>
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
                <ReactTooltip id='tooltipchampname' html={true} effect='solid' getContent={(dataTip) => `${dataTip}`}></ReactTooltip>
                <ReactTooltip id='tooltipargumentname' effect='solid' getContent={(dataTip) => `${dataTip}`}></ReactTooltip>
                <ReactTooltip id='tooltipitemname' effect='solid' getContent={(dataTip) => `${dataTip}`}></ReactTooltip>
                {list}
            </div>
            );
    } else {
        return "no data";
    }
}

export default MatchesInfo;