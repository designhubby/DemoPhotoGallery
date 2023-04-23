import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (  
        <>
<div id='about' className='page-section'>   
<img className="img-fluid w-100" style={{minHeight: '50vh', objectFit: 'cover'}} src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTg3fHxwdXJwbGUlMjB0ZWFtfGVufDB8MHx8fDE2NDU4MDEzODE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2160&amp;h=768&amp;blend=680159&amp;bm=color" srcSet="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTg3fHxwdXJwbGUlMjB0ZWFtfGVufDB8MHx8fDE2NDU4MDEzODE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2160&amp;h=768&amp;blend=680159&amp;bm=color 2160w, https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTg3fHxwdXJwbGUlMjB0ZWFtfGVufDB8MHx8fDE2NDU4MDEzODE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150&amp;blend=680159&amp;bm=color 150w, https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTg3fHxwdXJwbGUlMjB0ZWFtfGVufDB8MHx8fDE2NDU4MDEzODE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300&amp;blend=680159&amp;bm=color 300w, https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTg3fHxwdXJwbGUlMjB0ZWFtfGVufDB8MHx8fDE2NDU4MDEzODE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768&amp;blend=680159&amp;bm=color 768w, https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTg3fHxwdXJwbGUlMjB0ZWFtfGVufDB8MHx8fDE2NDU4MDEzODE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024&amp;blend=680159&amp;bm=color 1024w" sizes="(max-width: 2160px) 100vw, 2160px" alt="Photo by Annie Spratt" width="2160" height="768"/>
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container py-lg-6 py-4">
        
      <div className='row justify-content-center'>
        <div className='col-xl-10'>
        <h1 className="display-4 fw-bold border-bottom page-section-heading">About</h1>
            <p className=" fs-4 text-center">This project is to demostrate a frontend only photogallery.  Thanks for viewing</p>
        </div>
        </div>
        <Link to={{
          hash:'#masthead'
        }}>
          
        <button className="btn btn-primary btn-lg" type="button"><FontAwesomeIcon icon="fa-solid fa-house" /> Back to Top</button>
        </Link>
      </div>
    </div>
    </div>     
        </>
    );
}

export default About
