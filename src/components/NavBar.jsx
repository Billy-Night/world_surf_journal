import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { MyContext } from '../context/MyProvider';
import DropDownMenu from './DropDownMenu';
import './NavBar.css';
import avatar from '../assets/avatar.png';
import logo1 from '../assets/logo1.png';

const NavBar = () => {
    // const context = useContext(MyContext);
    const navigate = useNavigate();

    let [ showDropMenu, setshowDropMenu] = useState(false);

    const handleDropDownMenu = () => {
        setshowDropMenu(!showDropMenu)
    }

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <div className="navbar_container">
            <div className="top_navbar_container">
                    <ul>
                        <img onClick={handleLogoClick} src={logo1} alt="logo"/>
                        <li><Link to='/surf/journal'>Journal</Link></li>
                        <li><Link to='/surf/log'>Trips</Link></li>
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