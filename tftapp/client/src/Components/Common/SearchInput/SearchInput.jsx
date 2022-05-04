import React from "react";
import SelectComponent from "./SelectComp";
import styleName from './SearchInput.module.css';
import { useNavigate} from 'react-router-dom';
import consoleTool from "../Tools/Console";

const SearchInput = (props) => {
    let searchValue = React.createRef();
    let navigate = useNavigate();
    consoleTool(props);


    let getUserData = () => {
        if (searchValue.current.value === "") {
            consoleTool('error')
        } else {
            let playerNameUrl = searchValue.current.value;
            
            searchValue.current.value = "";
            navigate( '/profile/' + props.serverName.value + '/' + playerNameUrl );
        }
    }
    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.key === "Enter") {
        getUserData();
      }
    };
    return (
        <div className={styleName.form}>
            <input id="summonerName" className={styleName.search_input} placeholder={props.searchPlaceholder} ref={searchValue} onKeyPress={handleKeypress} />
            <div>
                <button className={styleName.search_btn} disabled={props.isLoading} onClick={() => getUserData()} type="submit">Search</button>
            </div>
            <SelectComponent updateServerName={props.updateServerName} />
        </div>
    )
}

export default SearchInput;