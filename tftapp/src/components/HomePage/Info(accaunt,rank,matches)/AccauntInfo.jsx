import React from 'react';

const AccauntInfo = (props) => {
    if (props.searchInfo === null) {
        return <div></div>
    }
    return (
        <div>
            <ol>
                <li>{props.searchInfo.name}</li>
                <li>{props.searchInfo.profileIconId}</li>
                <li>{props.searchInfo.summonerLevel}</li>
            </ol>
        </div>
    )
}

export default AccauntInfo;