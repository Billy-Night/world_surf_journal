import { useNavigate } from "react-router-dom";
import './Home.css';
// import logo1 from '../assets/logo1.png'

// import NavBar from "../components/NavBar";

const Home = () => {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/log-in');
    }

    return (
        <div className="home_main_container">
            <div className="home_main_inner_container">
                <div className="home_image_container">
                </div>
            </div>
            <div className="home_details_container">
                <p>Personal surf journal</p>
                <button onClick={handleClickHome}>Log In</button>
            </div>
        </div>
    )
}

export default Home;