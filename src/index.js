import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/main';
import { Maingallery } from './components/maingallery';
import About from './components/about';


const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    // children:[
    //   {
    //     path:'/main/gallery',
    //     element:<Maingallery/>,
    //   },
    //   {
    //     path:'/main/gallery:id',
    //     element:<Maingallery/>,
    //   },
    //   {
    //     path:'/about',
    //     element:<About/>,
    //   }
    // ]
  },



])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
