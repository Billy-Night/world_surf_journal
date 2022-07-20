import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();

    const handleClickReg = () => {
        navigate('/log-in');
    };

    return (
        <div>
            <p>This is reg</p>
            <button onClick={handleClickReg}>Sign Up</button>
        </div>
    )
}

export default Registration;