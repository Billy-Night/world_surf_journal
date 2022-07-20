import { Link } from 'react-router-dom';

const DropDownMenu = () => {

    return (
        <div>
            <p>Drop down menu</p>
            <ul>
                <li><Link to='/settings'>Settings</Link></li>
                <li><Link to='/log-in'>Log Out</Link></li>
            </ul>
        </div>
    )
}

export default DropDownMenu;