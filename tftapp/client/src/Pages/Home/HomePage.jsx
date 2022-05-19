import React from 'react';
import SearchInputContainer from '../../components/Common/SearchInput/SearchInputContainer';
import { Link, Outlet } from 'react-router-dom';
import styleName from './Homepage.module.css';
import consoleTool from '../../utils/Tools/Console';

//This component renders a page that contains some information
const HomePage = (props) => {
    consoleTool(props)
    return (
        <div className={styleName.homeContainer}>
            <span className={styleName.homeNavbar}>
                <Link to="/">TFT</Link>
                <SearchInputContainer />
            </span>
            <Outlet/>
            <video className={styleName.bgVideo} autoPlay loop muted>
                <source src="https://c.tenor.com/mrF5KVpZgyAAAAPo/lol-tft.mp4" type='video/mp4' />
            </video>
        </div>
    )
}

export default HomePage;