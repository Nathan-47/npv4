import './index.css';
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
// import Navbar from './components/navbar';
import Navbar from './layouts/navbar';

function App() {

    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>  

      {/* project pages */}


      {/* 404 page link */}
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
  
}

export default App
