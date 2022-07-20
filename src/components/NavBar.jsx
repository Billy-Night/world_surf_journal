import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';

const NavBar = () => {

    let [ showDropMenu, setshowDropMenu] = useState(false);

    const handleDropDownMenu = () => {
        setshowDropMenu(!showDropMenu)
    }

    return (
        <div>
            <ul>
                <li><Link to='/surf/journal'>Journal</Link></li>
                <li><Link to='/surf/log'>Log</Link></li>
                <li onClick={handleDropDownMenu}>Avatar</li>
            </ul>
            {showDropMenu ? <DropDownMenu /> : null }
        </div>
    );
};

export default NavBar;