import './index.css';
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Navbar from './layouts/navbar';
import Landing from './pages/landing';
import Projects from './pages/projects';
import Fitrquest from './pages/fitrquest';
import MarvelSearch from './pages/marvelsearch';
import Officerquiz from './pages/officerquiz';
import Socquiz from './pages/socquiz';
import NoLink from './noLink';
import Blog from './pages/blog';
import PowerAutomate from './pages/powerautomate';


function App() {

    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
      <Route index element={<Landing />} />

      {/* project pages */}
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/fitrquest' element={<Fitrquest />}></Route>
      <Route path='/marvelapi' element={<MarvelSearch />}></Route>
      <Route path='/officerquiz' element={<Officerquiz />}></Route>
      <Route path='/socquiz' element={<Socquiz />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/powerautomate' element={<PowerAutomate />}></Route>

      {/* 404 page link */}
      <Route path="*" element={<NoLink />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
  
}

export default App
