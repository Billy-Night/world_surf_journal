import { useNavigate } from "react-router-dom";

// import NavBar from "../components/NavBar";

const Home = () => {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/log-in');
    }

    return (
        <div>
            <p>Personal surf journal</p>
            <button onClick={handleClickHome}>Log In</button>
        </div>
    )
}

export default Home;