import React from 'react';
import SearchInputContainer from '../../Components/Common/SearchInput/SearchInputContainer';
import { Link, Outlet } from 'react-router-dom';
import styleName from './Homepage.module.css';

const HomePage = (props) => {
    console.log(props)
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