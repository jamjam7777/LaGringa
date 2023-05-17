import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

function Footer() {
    return <div className="footer">
        <div className="socialMedia">
            <InstagramIcon 
            onClick={() => window.open('https://www.instagram.com/the.gringa.loca/')} 
            />
            <LinkedInIcon
            onClick={() => window.open('https://www.linkedin.com/in/jamie-devine')} 
            />
            <GitHubIcon 
             onClick={() => window.open('https://github.com/jamjam7777')} 
            />
        </div>
        <p> &copy; 2023 LaGringaLoca</p>
    </div>;
}

export default Footer;
