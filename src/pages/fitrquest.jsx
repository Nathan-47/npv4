import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import fitimg1 from "../images/fitrquest/fitrquest_screenshot1.png"
import fitimg2 from "../images/fitrquest/fitrquest_screenshot2.png"


const fitrquest = () => {
    return (
        <div className="bg-white">
            <h1 className="project-heading">FitrQuest</h1>
            <Link to="https://fitrquest-frontend.onrender.com/" target="_blank" rel="noopener noreferrer"><button className="project-btn">Demo</button></Link>
            <p className="!mt-16 text-white">
                This project is designed to help users discover which sport best suits their fitness goals. It provides a personalised path that includes estimated calorie requirements, automatically curated meal plans, and training tips to keep users informed and motivated.
            </p>

            <div className="git-repo">
                <Link to="https://github.com/Nathan-47/fitrquest" target="_blank" rel="noopener noreferrer"><FaGithub  className="git-icon" /><p>View Code</p></Link>
            </div>

            <div className="project-screenshots">
                <a href={fitimg1} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={fitimg1} alt="Fitrquest quiz start screen that begins with I am followed by two answers 15-44 or 45+" /></a>
                <a href={fitimg2} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={fitimg2} alt="Completed quiz page path that is displaying all information on Powerlifting" /></a>
            </div>
        </div>
    )
}

export default fitrquest;