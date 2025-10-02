import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import socimg1 from "../images/socquiz/soc_screenshot1.png";
import socimg2 from "../images/socquiz/soc_screenshot2.png";
import socimg3 from "../images/socquiz/soc_snippet.png";


const socquiz = () => {
    return (
        <div className="bg-white">
            <h1 className="project-heading">Society Finder tool</h1>
            <Link className="project-btn" to="https://nathan-47.github.io/Societyquiz/" target="_blank" rel="noopener noreferrer">Demo</Link>
            <p className="!mt-16 text-white">
                Developed a quiz to help students discover which society best matches their interests. The tool enables students to identify suitable societies with confidence and reduces hesitation when deciding which to join during their university life.
            </p>

            <div className="git-repo">
                <FaGithub  className="git-icon" /><Link to="https://github.com/Nathan-47/Societyquiz" target="_blank" rel="noopener noreferrer">View Code</Link>
            </div>

            <div className="learn-section">
                <h2 className="!mb-6"><u>What I learnt</u></h2>
                <ul className="list-disc list-inside !space-y-6 text-white">
                    <li>Using URLSearchParams allows me to avoid hardcoding the category in the URL. This makes it simple to dynamically update both the heading and the grid cards on the results page, providing a smoother and flexible user experience when displaying the societies category displayed to the user.
                    </li>
                </ul>

                <img className="!mt-6 !mx-auto" src={socimg3} alt="" />
            </div>

            <div className="future-section !mt-12">
                <h2 className="!mb-6"><u>Future Improvements</u></h2>
                <ul className="list-disc list-inside !space-y-4 text-white">
                 <li>Once the user has completed their quiz and is given their suited societies category such as Sport, general insert etc, the tool could then calculate the users answers and give the percentage of how likely it matches to the users personality.</li>
                </ul>-
            </div>..

            <div className="project-screenshots">
                <a href={socimg1} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={socimg1} alt="Shows the first question on the finder with both answers available to choose." /></a>
                <a href={socimg2} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={socimg2} alt="Shows all General Societies that can be joined based off the answers given from tool finder" /></a>
            </div>
        </div>
    )
}

export default socquiz;