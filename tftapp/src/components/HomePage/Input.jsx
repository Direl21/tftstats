import React from 'react';
import { useSelector } from 'react-redux';

const Input = (props) => {
    let searchValue = React.createRef();
    console.log(props);

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
                <button disabled={props.isLoading} onClick={getUserData}>Search</button>
            </div>
        </div>
    )
}

export default Input;