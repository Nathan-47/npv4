import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbFileCv } from "react-icons/tb";


const Landing = () => {
    return ( 
      <div className="bg-white">
        <div className="grid grid-cols-1 gap-8 my-20">
          <h1>A Brummie that is passionate about building and creating digital magic using code.</h1>

          <p id="hero-job" className="mt-6 text-lg leading-8 text-gray-300">
          Currently a Web Developer @ <a className="a-link" href="https://www.bcusu.com/" target="_blank">BCUSU</a>
          </p>


        {/* about section */}
        <h2>About</h2>
        <p id="content-intro">Hi ✋🏾 I'm a web developer currently working at BCUSU, An amazing independent charity, that gives students' their best experience at University. My main focus is to build and design accessible, smooth and slick student digital experiences. 
        <br />
        Away from the desk, I am reading a book or playing games such as Football Manager, God of War and FIFA. I am also a food lover that hikes, powerlifts and plays footie on the side</p>


      {/* history section */}
      <h2>Experience</h2>
      <div className='grid grid-cols-3 gap-4 text-gray-300' id="job-text">
        <div className='job-desc'>2021 - PRESENT</div>
         <div className="col-span-2">
          <p className='job-title'>Web Developer | BCUSU</p>
          <br />
          <p className='job-content'>Working with Graphics/UI Designer to Develop and design more accessible, informative and smoother navigation to students at Birmingham City University.</p>
          <span className="pill">JavaScript</span>
          <span className="pill">CSS</span>
          <span className="pill">JQuery</span>
          <span className="pill">Figma</span>
          </div>

        <div className='job-desc'>2025 - PRESENT</div>
         <div className="col-span-2">
          <p className='job-title'>Volunteer Accessibility Developer | CWW Mind</p>
          <br />
          <p className='job-content'>Using tools such as Skilltide and Lighthouse to help increase WCAG accessibility scores across the website.</p>
          <span className="pill">Wordpress</span>
          <span className="pill">Skilltide</span>
          </div>
      </div>

      <div className="contact-icon">
      <a href=''><TbFileCv />View Resume</a>
      </div>


      {/* contact section */}
      <h2>Contact</h2>
      <div className="grid grid-cols-3 gap-4">
      <div className="contact-icon">
        <a href='mailto:nathan.parchment47@gmail.com'><IoIosMail />Email</a>
      </div>

      <div className="contact-icon">
        <a href='https://github.com/Nathan-47' target="_blank" rel="noopener noreferrer"><FaGithub /> Github</a>
      </div>

      <div className="contact-icon">
        <a href='https://www.linkedin.com/in/nathanparchment/' target="_blank" rel="noopener noreferrer"><FaLinkedin />LinkedIn</a>
      </div>
      </div>

      </div>
      </div>
    )
}

export default Landing;