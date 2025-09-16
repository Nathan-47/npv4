import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import socimg1 from "../images/socquiz/soc_screenshot1.png";
import socimg2 from "../images/socquiz/soc_screenshot2.png";


const socquiz = () => {
    return (
        <div className="bg-white">
            <h1 className="project-heading">Society Finder tool</h1>
            <Link to="https://nathan-47.github.io/Societyquiz/" target="_blank" rel="noopener noreferrer"><button className="project-btn">Demo</button></Link>
            <p className="!mt-16 text-white">
                Developed a quiz to help students discover which society best matches their interests. This tool enables students to identify suitable societies with confidence and reduces hesitation when deciding which to join at any point of their university life.
            </p>

            <div className="git-repo">
                <Link to="https://github.com/Nathan-47/Societyquiz" target="_blank" rel="noopener noreferrer"><FaGithub  className="git-icon" /><p>View Code</p></Link>
            </div>

            <div className="project-screenshots">
                <img className="screenshot-thumb" src={socimg1} alt="" />
                <img className="screenshot-thumb" src={socimg2} alt="" />
            </div>
        </div>
    )
}

export default socquiz;