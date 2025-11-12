import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import fitimg1 from "../images/fitrquest/fitrquest_screenshot1.PNG";
import fitimg2 from "../images/fitrquest/fitrquest_screenshot2.PNG";


const fitrquest = () => {
    return (
        <div className="bg-white">
            <h1 className="project-heading">FitrQuest</h1>
            <Link className="project-btn" to="https://fitrquest-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">Demo</Link>
            <p className="!mt-16 text-white">
                This project helps users discover which sport best suits their fitness goals. It provides a personalized path with estimated calorie requirements, automatically curated meal plans, and training tips to keep users informed and motivated.
            </p>

            <div className="git-repo">
                <FaGithub  className="git-icon" /><Link to="https://github.com/Nathan-47/fitrquest" target="_blank" rel="noopener noreferrer">View Code</Link>
            </div>

            <div className="learn-section">
                <h2 className="!mb-6"><u>What I learnt</u></h2>
                <ul className="list-disc list-inside !space-y-6 text-white">
                    <li>Using Postman to test URL routes was a first for me and made testing login and signup endpoints easy to see if they’re working and if any errors occur that affect user experience.</li>

                    <li>JWT Tokens was a first for me also and I was intrigued on how it is used in applications. As I wanted to create a page for only signed up users this was perfect as JWT verifies identities and protect routes.</li>

                    <li>Using AuthContext I learnt that it tracks authentication state across the app. Letting components check whether a user is logged in without passing props, making it an easier experience for me development wise.</li>

                    <li>Building a MERN app MongoDB is imperative and I learned how to use schemas to define structured fields like name, email, and password for login/signup.</li>
                </ul>
            </div>

            <div className="future-section !mt-12">
                <h2 className="!mb-6"><u>Future Improvements</u></h2>
                <ul className="list-disc list-inside !space-y-4 text-white">
                 <li>Regarding the schema I will look to apply rules such as required and unique to enforce data integrity and simplify management.</li>    
                 <li>Provide more questions to get a more refined/accurate end result</li>
                <li>Allow user to create a new password</li>
                </ul>
            </div>

            <div className="project-screenshots">
                <a href={fitimg1} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={fitimg1} alt="Fitrquest quiz start screen that begins with I am followed by two answers 15-44 or 45+" /></a>
                <a href={fitimg2} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={fitimg2} alt="Completed quiz page path that is displaying all information on Powerlifting" /></a>
            </div>
        </div>
    )
}

export default fitrquest;