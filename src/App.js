
import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css';

import Home from './Home/Home';
import Project from './Pages/Project/Project';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';


const routes = createBrowserRouter([
    {
        path: '/',
        element:<Home/>
    },
    {
        path: '/projects',
        element:<Project/>
    }
    ,
    {
        path: '/about',
        element:<About/>
    }
    
    ,
    {
        path: '/contact',
        element:<Contact/>
    },
   
    {
        path: '*',
        element:<Error/>
    }
    
    
    
])

function App() {
    return (
        
      <RouterProvider router={routes}/>
          
          
        
    );
}

export default App;
