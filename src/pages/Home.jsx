import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/log/in');
    }

    return (
        <div className="home_main_container">
            <div className="home_main_inner_container">
                <div className="home_image_container">
                </div>
            </div>
            <div className="home_details_container_wrapper">
                <div className="home_details_container">
                    <p><i>"Record you next adventure"</i></p>
                    <div className="home_btn_container">
                        <button className='home_btn' onClick={handleClickHome}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;