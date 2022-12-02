import React, { useContext, useState } from 'react';
import { MyContext } from '../context/MyProvider';
import { Link, useNavigate } from 'react-router-dom';

import DropDownMenu from './DropDownMenu';
import './NavBar.css';
import avatar from '../assets/avatar.png';
// import { ReactComponent as Logo} from '../assets/siteLogo.svg';
import useMediaQuery from "../hooks/useMediaQuery.jsx";

const NavBar = () => {
    const context = useContext(MyContext);
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const navigate = useNavigate();

    let [ showDropMenu, setshowDropMenu] = useState(false);

    const handleDropDownMenu = () => {
        setshowDropMenu(!showDropMenu)
    }

    const handleLogoClick = () => {
        navigate('/');
    }

    const handleLogClick = () => {
        context.tripsApiCall();
    }

    return (
        <div className="navbar_container">
            <div className="top_navbar_container">
                    <ul>
                        <div className='top_navbar_container-logo-btn' onClick={handleLogoClick} ></div>
                        {isDesktop ?
                        <>
                        <li><Link to='/surf/journal'>Journal</Link></li>
                        <li onClick={handleLogClick}><Link to='/surf/log'>Trips</Link></li>
                        </> 
                        : null }
                        <img onClick={handleDropDownMenu} src={avatar} alt="avatar"/>
                    </ul>  
            </div>
            <div className='drop_down_menu_container'>
                {showDropMenu ? <DropDownMenu /> : null }
            </div>
        </div>
    );
};

export default NavBar;