import React from 'react';
import styleName from './MatchesInfo.module.css';

const MatchesInfo = (props) => {
    console.log(props.matchesInfo);
    if(props.matchesInfo != null){
        let list = props.matchesInfo.map((p, index) => {
            
            p.info.participants.sort((a,b)=> {
                return a.placement - b.placement;
            });
            
           return ( 
                <div key={index} className={styleName.matchBox}>
                    <div  className={styleName.typeGame}> {p.info.tft_game_type}</div>
                    <table>
                        <thead>
                            <tr>
                                <th className={styleName.idCell}>P.</th>
                                <th className={styleName.iconCell}>Icon</th>
                                <th>Summoner</th>
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
                            //console.log(player.units.character_id);
                            
                        return ( 
                            <tr key={index}>
                                <td>{player.placement}</td>
                                <td><img className={styleName.profileIcon} alt='' src={`https://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${player.profileIconId}.png`}/></td>
                                <td align="left">{player.name}</td>
                                <td>
                                    {player.units.map((champion, index) => {
                                        return (
                                        <span key={index}>
                                            <span className={styleName.champIcon}><img src={`../../../../assets/champions/champ-icon/${champion.character_id}.png`}/></span>
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
        return list;
    } else {
        return "no data";
    }
}

export default MatchesInfo;