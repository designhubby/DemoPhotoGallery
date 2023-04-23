import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navbar_top_items } from './navbar_top_items';
import {ReactComponent as NavbarLogo} from '../images/noun-camera-5521618.svg'
import Searchitems from './searchitems';
/*
To Do:
hide menu when clicked
https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-navbar-on-click
*/

function Navbar_top({setImg}) {

    const [itemActive, setItemActive] = useState('');
    const [menuActive, setMenuActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [navbarCollapse, setNavbarCollapse] = useState('collapse navbar-collapse');


    const handleOnClick_NavLink=(e)=>{
        setItemActive(e.target.name);
        var btn = document.getElementsByClassName("navbar-toggler"); 
        btn[0].click();
    }

    const handleSearchTermChange= (e)=>{
        console.log('handleSearchTermChange');
        setSearchTerm(e.target.value);
        
    }

    const setCurrentImage=(img)=>{
        setImg(img);
    }


    const showNavList =()=>{

        const navitems = navbar_top_items.map((indiv, index)=>(
            
            <li key={index} className='nav-item' >
                <a href={indiv.path} name={index} onClick={(e)=>handleOnClick_NavLink(e)} className={`nav-link ${index == itemActive ? 'active': ''}`} >{indiv.label}</a>
            </li>
        ))
        return navitems;
    }
    
    return (
        <>
        <div className='mb-5'>
        <nav id='navbartop' className="navbar navbar-expand-lg fixed-top bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><NavbarLogo height={50} width={50}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {showNavList()}
                        
                    </ul>
                    <form className=" d-flex flex-row" onSubmit={(e)=>e.preventDefault()} onClick={()=>setSearchTerm('')}>
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                        
                        <input className="form-control" type="search" value={searchTerm}  onChange={(e)=>handleSearchTermChange(e)} placeholder="Type to search..." aria-label="Search"/>
                        
                        <div className='d-flex flex-column photolistdropdown'><Searchitems term={searchTerm} setCurrentImage={setCurrentImage}/></div>
                    
                    </form>
                
                </div>
            </div>
        </nav>
        
        </div>
        </>
      );
}

export default Navbar_top;