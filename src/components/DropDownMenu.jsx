import React, { useContext } from 'react';
import { MyContext } from '../context/MyProvider';
import { Link } from 'react-router-dom';
import './DropDownMenu.css';
import useMediaQuery from '../hooks/useMediaQuery';

const DropDownMenu = () => {
    const context = useContext(MyContext);
    const isDesktop = useMediaQuery('(min-width: 960px)');

   const handleClickSignOut = () => {
        context.setLoggedIn(false);
        context.setUserId(null);
   }

   const handleTripsClick = () => {
    context.tripsApiCall();
   }

    return (
        <div className='drop_down_menu_inner_container'>
            <ul>
                <li><Link to='/settings'>Settings</Link></li>
                <li><Link to='/' onClick={handleClickSignOut} >Log Out</Link></li>
                {isDesktop ? null :
                        <>
                        <li><Link to='/surf/journal'>Journal</Link></li>
                        <li onClick={handleTripsClick}><Link to='/surf/log'>Trips</Link></li>
                        </> 
                }
            </ul>
        </div>
    )
}

export default DropDownMenu;