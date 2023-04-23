import React, { useState, useEffect } from 'react';
import Navbar_top from './navbar_top';
import { Maingallery } from './maingallery';
import {ReactComponent as Avatar} from '../images/photo-album-svgrepo-com.svg'


function Main() {



    return (
<>
<header id='masthead' className='masthead bg-primary text-white text-center'>
    <div className='container py-lg-6 py-4'>
        <Avatar className='masthead-avatar testav'/>
        <h1 className='mastheading text-uppercase'>Photo Gallery</h1>
    </div>
</header>
</>
      );
}

export default Main;