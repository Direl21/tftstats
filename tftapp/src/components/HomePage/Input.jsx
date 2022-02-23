import React from 'react';

const Input = (props) => {
    let searchValue = React.createRef();
    
    let getUserData = () => {

        let playerName = searchValue.current.value;
        props.updateSearchName(playerName);
        props.searchSammonerInfo(playerName);
        console.log(props)

        
    }

    return (
        <div>
            <input id="summonerName" placeholder={props.searchPlaceholder} ref={searchValue}/>
            <div>
                <button onClick={getUserData}>Search</button>
            </div>
        </div>
    )
}

export default Input;