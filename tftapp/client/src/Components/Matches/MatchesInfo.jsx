import React from 'react';
import styleName from './MatchesInfo.module.css';
import ReactTooltip from 'react-tooltip';
import { NavLink, useParams } from 'react-router-dom';
import TraitsContainer from '../Matches/Traits/TraitsContainer';
import Units from '../Matches/Units/Units';
import Arguments from '../Matches/Arguments/Arguments';
import consoleTool from '../../utils/Tools/Console';

//This component renders information about the matches
//Receives data from Riot API (matchesInfo) 
const MatchesInfo = (props) => {
    //hook
    let params = useParams();

    if(props.matchesInfo != null){
        //getting data from array
        let list = props.matchesInfo.map((p, index) => {

            //sort data(participants) in order (from 1 to 8) by 'placment' from array data
            p.info.participants.sort((a,b)=> {
                return a.placement - b.placement;
            });

            //loading tooltips with a delay of 2 seconds
            setTimeout(()=>{
                ReactTooltip.rebuild();
            },2000)
           //p.info.tft_game_type - tft game type(ranked/duble) (data from Riot API)
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

                    {p.info.participants.map((player, index) => { //getting data from array
                        //converting a number (from Riot Api) to a convenient time format
                        const sec = player.time_eliminated;
                        const secondsToMinut = (sec) => {
                            var sec_num = parseInt(sec, 10); // don't forget the second param
                                var minutes = Math.floor(sec_num / 60);
                                var seconds = sec_num - (minutes * 60);

                                if (minutes < 10) {minutes = "0"+minutes;}
                                if (seconds < 10) {seconds = "0"+seconds;}
                                return minutes+':'+seconds;
                            }

                            const url = "/profile/" + params.serverValue + "/" + player.name

                        //player.placement - the position taken by the player (data from Riot API)
                        //player.level - the number of the level to which the player has reached in the game (data from Riot API)
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
                <ReactTooltip id='tooltipargumentname' className={styleName.tooltipArgument} html={true} effect='solid' getContent={(dataTip) => `${dataTip}`}></ReactTooltip>
                <ReactTooltip id='tooltipitemname' effect='solid' getContent={(dataTip) => `${dataTip}`}></ReactTooltip>
                {list}
            </div>
            );
    } else {
        return "no data";
    }
}

export default MatchesInfo;