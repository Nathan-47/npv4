import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import offimg1 from "../images/rolequiz/role_screenshot1.PNG";
import offimg2 from "../images/rolequiz/role_screenshot2.PNG";
import offimg3 from "../images/rolequiz/role_snippet.PNG";


const offquiz = () => {
    return (
        <div className="bg-white">
            <h1 className="project-heading">Elections Officer Quiz</h1>
            <Link className="project-btn" to="https://nathan-47.github.io/officer-role-quiz/" target="_blank" rel="noopener noreferrer">Demo</Link>
            <p className="!mt-16 text-white">
                We wanted to engage students more interactively, so we created a quiz that uses their choices to determine which officer role best suits them. This way, they can confidently run for that role in the next officer election. The quiz helps remove the guesswork and provides students with a much more clearer idea of what role they fit best.
            </p>

            <div className="git-repo">
                <FaGithub  className="git-icon" /><Link to="https://github.com/Nathan-47/officer-role-quiz" target="_blank" rel="noopener noreferrer">View Code</Link>
            </div>

            <div className="learn-section">
                <h2 className="!mb-6"><u>What I learnt</u></h2>
                    <ul className="list-disc list-inside !space-y-6 text-white">
                        <li>I first used if statements to help determine the role that should be given to user once the quiz is completed but this was bad practice as code was repeated. Therefore I used the find() method to efficiently determine the user’s final result. This approach is much simpler than relying on multiple if statements, which was less efficient.

                        <img className="!mt-6 !mb-6 !mx-auto" src={offimg3} alt="find() method snippet" />
                        
                        I used a point system to help with user results. To ensure that users received the correct role based on their answers and accumulated points, I researched methods for accurate scoring. I then implemented a threshold system, each role has a predefined threshold, and find() returns the first role whose threshold is met or exceeded by the user’s total points. This ensures that each result is unique and tailored to the individual user.
                        </li>
                    </ul>
            </div>
            
            <div className="future-section !mt-12">
                <h2 className="!mb-6"><u>Future Improvements</u></h2>
                    <ul className="list-disc list-inside !space-y-4 text-white">
                        <li>Once the user has completed their quiz and is given their suited societies category such as Sport, general insert etc, the tool could then calculate the users answers and give the percentage of how likely it matches to the users personality.</li>
                    </ul>
            </div>

            <div className="project-screenshots">
                <a href={offimg1} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={offimg1} alt="Question 2 of quiz that gives user 5 answer options" /></a>
                <a href={offimg2} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={offimg2} alt="Quiz result page that displays the user given role based off the quiz answers given." /></a>
            </div>
        </div>
    )
}

export default offquiz;