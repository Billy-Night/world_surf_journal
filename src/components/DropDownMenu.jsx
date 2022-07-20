import { Link } from 'react-router-dom';
import './DropDownMenu.css';

const DropDownMenu = () => {

    return (
        <div className='drop_down_menu_inner_container'>
            <ul>
                <li><Link to='/settings'>Settings</Link></li>
                <li><Link to='/log-in'>Log Out</Link></li>
            </ul>
        </div>
    )
}

export default DropDownMenu;