import { Link } from 'react-router-dom';
import fithero from "../images/fitrquest/fitrquest_thumbnail.png";
import quizhero from "../images/rolequiz/role_thumbnail.png";
import marvhero from "../images/battlejs/battle_thumbnail.png";
import sochero from "../images/socquiz/soc_thumbnail.png"


const projects = () => {
    return (
        <div className="bg-white">
            <h1>Projects</h1>
            <div className="cards-wrapper">
                <div class="grid grid-cols-3 gap-12 group">
                    <Link to="/fitrquest">
                        <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
                        <img className="thumbnail" src={fithero} alt="fitrquest landing page" />
                        <h2 className='project-title'>FitrQuest</h2>
                        <p className="pill-2">React</p>   
                        <p className="pill-2">MongoDB</p>
                        <p className="pill-2">JWT</p>
                        <p className='project-text text-gray-300'>Built for users struggling with how to train and how to stay fit. Take a quest that provides a personalised path to your new training.</p>
                        </div>
                    </Link>

                    <Link to="/officerquiz">
                        <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
                        <img className="thumbnail" src={quizhero} alt="officer role landing page" />
                        <h2 className='project-title'>Officer Role Quiz</h2>
                        <p className="pill-2">JavaScript</p>   
                        <p className="pill-2">JSON</p>
                        <p className='project-text text-gray-300'>A quiz for students of Birmingham City University to help provide a clearer idea of what role they fit best in elections season.</p>
                        </div>
                    </Link>

                    <Link to="/marvelplay">
                        <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
                        <img className="thumbnail" src={marvhero} alt="marvel battle game landing page" />
                        <h2 className='project-title'>Marvel Play</h2>
                        <p className="pill-2">JavaScript</p>   
                        <p className="pill-2">Marvel</p>
                        <p className='project-text text-gray-300'>Go up against the computer in a battle replicating the old Pokémon rpg elements using Marvel hero and villains.</p>
                        </div>
                    </Link>
                </div>

                <div class="grid grid-cols-3 !mt-20 gap-12 group">
                    <Link to="/socquiz">
                        <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
                        <img className="thumbnail" src={sochero} alt="marvel battle game landing page" />
                        <h2 className='project-title'>Society finder tool</h2>
                        <p className="pill-2">JavaScript</p>   
                        <p className="pill-2">JSON</p>
                        <p className='project-text text-gray-300'>A tool finder that allows students to find a society that matches their interest.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default projects;