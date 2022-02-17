import "../Wrapper/wrapper.css";
import react, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const Home = () => {
    const [toolApp, setToolApp] = useState([]);
    axios.get('http://localhost:3000/courses').then((res) => {
        setToolApp(res.data);
    })
    return (
        <div id="Wrapper">
            <div className="right-content-tool">
                <div className="content-logo">
                    <span className="logo-uni">uni</span>
                    <span className="logo-g">Gate</span>
                </div>
                <div className="content-description">
                    Centralized applications access point within ONE digital platform |
                    Integrate SSO | AI Bot assistant | Search engine | Collect and
                    centralized notification for approval | Create ticket support,…
                </div>

            </div>
        </div>
    )
};

export default Home;
