import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import marvel1 from "../images/battlejs/battle_screenshot1.png";
import marvel2 from "../images/battlejs/battle_screenshot2.png";

const marvelplay = () => {
    return (
        <div className="bg-white">
            <h1 className="project-heading">Marvelplay</h1>
            <Link to="https://nathan-47.github.io/marvel-vs/" target="_blank" rel="noopener noreferrer"><button className="project-btn">Demo</button></Link>
            <p className="!mt-16 text-white">
                A 1v1 game where users battle using a default set of four Marvel hero characters against four Marvel villains in a turn-based system, similar to the classic Pokémon games. This project is built using JavaScript, and there’s more to come as the battle game will continue to evolve.
            </p>

            <div className="git-repo">
                <Link to="https://github.com/Nathan-47/marvel-vs" target="_blank" rel="noopener noreferrer"><FaGithub  className="git-icon" /><p>View Code</p></Link>
            </div>

            <div className="project-screenshots">
                <a href={marvel1} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={marvel1} alt="Intro screen showing the 4 playable characters who are; Hulk, Iron Man, Wolverine and Spiderman." /></a>
                <a href={marvel2} target="_blank" rel="noopener noreferrer"><img className="screenshot-thumb" src={marvel2} alt="UI once user has picked their character, which shows the damage of each player, items and fight button." /></a>
            </div>
        </div>
    )
}

export default marvelplay;