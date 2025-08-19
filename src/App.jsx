import './index.css';
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Navbar from './layouts/navbar';
import Landing from './pages/landing';
import Projects from './pages/projects';

function App() {

    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
      <Route index element={<Landing />} />

      {/* project pages */}
      <Route path='/projects' element={<Projects />}></Route>

      {/* 404 page link */}
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
  
}

export default App
