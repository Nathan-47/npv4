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

            <div className="future-section !mt-12">
                <h2 className="!mb-6"><u>Future Improvements</u></h2>
                    <ul className="list-disc list-inside !space-y-4 text-white">
                        <li>While using the search, I noticed that users have to manually delete text using the backspace key, which can negatively impact user experience. This issue can be amended by implementing a clear button within the input box.</li>    
                    </ul>
            </div>

            <div className="project-screenshots">
                <a href={marimg1} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={marimg1} alt="card showing character called Venom's bio" /></a>

                <a href={marimg2} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={marimg2} alt="card showing character called Thor's bio" /></a>
            </div>
        </div>
    )
}

export default marvelserach;