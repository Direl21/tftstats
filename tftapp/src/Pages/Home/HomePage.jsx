import React from 'react';
import SearchInputContainer from '../../Components/Common/SearchInput/SearchInputContainer';
import { Link, Outlet } from 'react-router-dom';

const HomePage = (props) => {
    console.log(props)
    return (
        <div>
            <Link to="/">TFT</Link>
            <SearchInputContainer />
            <Outlet/>
        </div>
    )
}

export default HomePage;