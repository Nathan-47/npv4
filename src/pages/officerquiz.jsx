import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import offimg1 from "../images/rolequiz/role_screenshot1.png";
import offimg2 from "../images/rolequiz/role_screenshot2.png";


const fitrquest = () => {
    return (
        <div className="bg-white">
            <h1 className="project-heading">BCUSU Officer Quiz</h1>
            <Link className="project-btn" to="https://nathan-47.github.io/officer-role-quiz/" target="_blank" rel="noopener noreferrer">Demo</Link>
            <p className="!mt-16 text-white">
                We wanted to engage students more interactively, so we created a quiz that uses their choices to determine which officer role best suits them. This way, they can confidently run for that role in the next officer election. The quiz helps remove the guesswork and provides students with a much more clearer idea of what role they fit best.
            </p>

            <div className="git-repo">
                <Link to="https://github.com/Nathan-47/officer-role-quiz" target="_blank" rel="noopener noreferrer"><FaGithub  className="git-icon" /><p>View Code</p></Link>
            </div>

            <div className="project-screenshots">
                <a href={offimg1} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={offimg1} alt="Question 2 of quiz that gives user 5 answer options" /></a>
                <a href={offimg2} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={offimg2} alt="Quiz result page that displays the user given role based off the quiz answers given." /></a>
            </div>
        </div>
    )
}

export default fitrquest;