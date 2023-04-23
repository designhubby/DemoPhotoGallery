
import React, { useState, useEffect,useRef } from 'react';
import { ImageReloader } from './imageReloader';
import { Modal_Photo } from './modal_photo';

const CarouselPhoto = ({setCurrentImage}) => {
    
    const repeatItems = (numberOfTimes)=>{

        const statement = [];
        const imageLoaderObj = <ImageReloader interval={10000} currentimage={setCurrentImage}/>;
        for(let i = 0; i<numberOfTimes; i++){
            let activeclass ='';
            if(i == 0){
                activeclass = 'active';
            }
            statement.push(<div key={i} className={`carousel-item ${activeclass}`}>{imageLoaderObj}</div>);
            
        }
        return statement;
    }

    return ( 
        <>
 
        <div id="carouselControls" className="carousel slide">
            <div className="carousel-inner">
                {repeatItems(4)}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
        </>
     );
}
 
export default CarouselPhoto;