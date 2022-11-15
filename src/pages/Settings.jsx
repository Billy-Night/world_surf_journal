import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar.jsx';

const Settings = () => {
    const navigate = useNavigate();

    const handleSaveSettings = () => {
        navigate('/surf/journal');
    }

    return (
        <div>
            <NavBar />
            <p>This is the settings page, which will be updated soon!</p>
            <button onClick={handleSaveSettings}>Save</button>
        </div>
    )
}

export default Settings;