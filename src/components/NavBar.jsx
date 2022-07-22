import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { MyContext } from '../context/MyProvider';
import DropDownMenu from './DropDownMenu';
import './NavBar.css';

const NavBar = () => {
    // const context = useContext(MyContext);

    let [ showDropMenu, setshowDropMenu] = useState(false);

    const handleDropDownMenu = () => {
        setshowDropMenu(!showDropMenu)
    }

    return (
        <div className="navbar_container">
            <div className="top_navbar_container">
                    <ul>
                        <li><Link to='/surf/journal'>Journal</Link></li>
                        <li><Link to='/surf/log'>Trips</Link></li>
                        <li onClick={handleDropDownMenu}>Avatar</li>
                    </ul>
            </div>
            <div className='drop_down_menu_container'>
                {showDropMenu ? <DropDownMenu /> : null }
            </div>
        </div>
    );
};

export default NavBar;