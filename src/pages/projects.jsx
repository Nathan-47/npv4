import marvelplay from '../images/marvel_play.svg';


const projects = () => {
    return (
        <div className="bg-white">
            <h1>Projects</h1>
            <div className="cards-wrapper">
                <div class="grid grid-cols-3 gap-12 group">
                    <a href="">
                        <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
                        <img className="thumbnail" src={marvelplay} alt="" />
                        <h2 className='project-title'>Marvel Play</h2>
                        <p className="pill-2">React</p>   
                        <p className="pill-2">Netlify</p>
                        <p className='project-text text-gray-300'>A Marvel character search filter using API to fetch an array of characters with a 1v1 RPG style card game also.</p>
                        </div>
                    </a>

                    <a href="">
                        <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
                        <img className="thumbnail" src={marvelplay} alt="" />
                        <h2 className='project-title'>Marvel Play</h2>
                        <p className="pill-2">React</p>   
                        <p className="pill-2">Netlify</p>
                        <p className='project-text text-gray-300'>A Marvel character search filter using API to fetch an array of characters with a 1v1 RPG style card game also.</p>
                        </div>
                    </a>

                    <a href="">
                        <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
                        <img className="thumbnail" src={marvelplay} alt="" />
                        <h2 className='project-title'>Marvel Play</h2>
                        <p className="pill-2">React</p>   
                        <p className="pill-2">Netlify</p>
                        <p className='project-text text-gray-300'>A Marvel character search filter using API to fetch an array of characters with a 1v1 RPG style card game also.</p>
                        </div>
                    </a>
                </div>

                {/* <div class="grid grid-cols-3 !mt-20 gap-12 group">
                    <a href="">
                        <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
                        <img className="thumbnail" src={marvelplay} alt="" />
                        <h2 className='project-title'>Marvel Play</h2>
                        <p className="pill-2">React</p>   
                        <p className="pill-2">Netlify</p>
                        <p className='project-text text-gray-300'>A Marvel character search filter using API to fetch an array of characters with a 1v1 RPG style card game also.</p>
                        </div>
                    </a>

                    <a href="">
                        <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
                        <img className="thumbnail" src={marvelplay} alt="" />
                        <h2 className='project-title'>Marvel Play</h2>
                        <p className="pill-2">React</p>   
                        <p className="pill-2">Netlify</p>
                        <p className='project-text text-gray-300'>A Marvel character search filter using API to fetch an array of characters with a 1v1 RPG style card game also.</p>
                        </div>
                    </a>

                    <a href="">
                        <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
                        <img className="thumbnail" src={marvelplay} alt="" />
                        <h2 className='project-title'>Marvel Play</h2>
                        <p className="pill-2">React</p>   
                        <p className="pill-2">Netlify</p>
                        <p className='project-text text-gray-300'>A Marvel character search filter using API to fetch an array of characters with a 1v1 RPG style card game also.</p>
                        </div>
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default projects;