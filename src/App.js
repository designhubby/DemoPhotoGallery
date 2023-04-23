import logo from './logo.svg';

import React, {useState, useEffect,useRef} from 'react';
import { Route, Navigate, Routes, Switch, useHistory, useNavigate, Outlet } from 'react-router-dom';
import { Maingallery } from './components/maingallery';
import Main from './components/main';
import Navbar_top from './components/navbar_top';
import About from './components/about';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


function App() {

  const [img, setImg] = useState();

  return (
    <div className="App">
      
      <Navbar_top setImg={setImg}/>
      <main className="container-fluid m-0 p-0">
        
      <Main/>
      <Maingallery setImg={setImg} img={img}/>
      <About/>
      {/* <Outlet/> */}
      
    </main>
    </div>
  );
}

export default App;
library.add(fab, fas, far);