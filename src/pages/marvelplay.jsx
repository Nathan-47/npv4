import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import marvel1 from "../images/marvel_screenshot1.png";

const marvelplay = () => {
    return (
        <div className="bg-white">
            <h1 className="project-heading">Marvelplay</h1>
            <Link to="/projects"><button className="project-btn">Demo</button></Link>
            <p className="!mt-16 text-white">
                This project allows users to search for a marvel character within the marvel database via Marvel.com and return the character back. The character will be displayed showing their name, bio and image via the API parameters whilst being complemented with minimal styling. 
                <br /><br />
                I created this to get an understanding of how react works and get an insight to using hooks and event handlers to return arrays via marvel API.
            </p>

            <div className="git-repo">
                <Link to="" target="_blank"><FaGithub  className="git-icon" /><p>View Code</p></Link>
            </div>

            <div className="project-screenshots">
                <img className="screenshot-thumb" src={marvel1} alt="" />
                <img className="screenshot-thumb" src={marvel1} alt="" />
            </div>
        </div>
    )
}

export default marvelplay;