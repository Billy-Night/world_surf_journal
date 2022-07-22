import React, { useContext } from 'react';
import { MyContext } from '../context/MyProvider';
import { Link } from 'react-router-dom';
import './DropDownMenu.css';

const DropDownMenu = () => {
    const context = useContext(MyContext);

   const handleClickSignOut = () => {
        context.setLoggedIn(false);
   }

    return (
        <div className='drop_down_menu_inner_container'>
            <ul>
                <li><Link to='/settings'>Settings</Link></li>
                <li><Link to='/' onClick={handleClickSignOut} >Log Out</Link></li>
            </ul>
        </div>
    )
}

export default DropDownMenu;