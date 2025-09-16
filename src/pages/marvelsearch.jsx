import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import marimg1 from "../images/marvel/marvel_screenshot1.png";
import marimg2 from "../images/marvel/marvel_screenshot2.png";


const marvelserach = () => {
    return (
        <div className="bg-white">
            <h1 className="project-heading">Marvel Search</h1>
            <Link to="https://marvelalias.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="project-btn">Demo</button></Link>
            <p className="!mt-16 text-white">
                Search for any Marvel character within a database powered by Marvel.com. The selected character is displayed with their name, bio, and image retrieved through the API, complemented by minimal styling.
            </p>

            <div className="git-repo">
                <Link to="https://github.com/Nathan-47/marvelalias-search" target="_blank" rel="noopener noreferrer"><FaGithub  className="git-icon" /><p>View Code</p></Link>
            </div>

            <div className="project-screenshots">
                <img className="screenshot-thumb" src={marimg1} alt="" />
                <img className="screenshot-thumb" src={marimg2} alt="" />
            </div>
        </div>
    )
}

export default marvelserach;