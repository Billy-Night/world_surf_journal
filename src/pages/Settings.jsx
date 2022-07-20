import { useNavigate } from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate();

    const handleSaveSettings = () => {
        navigate('/surf/journal');
    }

    return (
        <div>
            <p>This is the settings page</p>
            <button onClick={handleSaveSettings}>Save</button>
        </div>
    )
}

export default Settings;