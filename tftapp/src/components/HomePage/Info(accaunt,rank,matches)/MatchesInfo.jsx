import React from 'react';

const MatchesInfo = (props) => {
    
    if(props.matchesInfo != null){
        let list = props.matchesInfo.map((p, index) => 
            <div key={index}> {p.info.tft_game_type} </div>
        )
        return list;
    } else {
        return "no data";
    }
}

export default MatchesInfo;