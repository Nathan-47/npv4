import { Link } from 'react-router-dom';


const Landing = () => {
    return ( 
      <div className="bg-white">
        <div className="grid grid-cols-1 gap-8 my-20">
          <p className="hero-intro">A Brummie that is passionate about building and creating digital magic using code.</p>

          <p id="hero-job" className="mt-6 text-lg leading-8 text-gray-300">
          Currently a Web Developer @ <a className="a-link" href="https://www.bcusu.com/">BCUSU</a>
          </p>
      </div>
      </div>
    )
}

export default Landing;