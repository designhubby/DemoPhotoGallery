
import { useRef, useEffect } from 'react';

import {useNavigate } from 'react-router-dom';

export function ImageReloader({interval, currentimage}){

    const imageElement = useRef(null);
    const navigate = useNavigate();

    const handleOnClickImage = ()=>{
        console.log('handleOnClickImage clicked');
        currentimage(imageElement.current.seedimg);
    }

    useEffect(()=>{
        const reloadImage =  ()=>{
            const img = new Image(300);
            const seedimg = `https://picsum.photos/seed/${Math.random()}`;
            img.src = `${seedimg}/300/200`;

            imageElement.current.src = img.src;
            imageElement.current.seedimg = `${seedimg}/600/400`;
            imageElement.current.alt = "Alternate Text";
        };
    
        const timer = setInterval(reloadImage, interval);

        return ()=>clearInterval(timer);
    },[])

    return(
        <a href='#open-modal'>
            <img onClick={()=>handleOnClickImage()} className="d-block" ref={imageElement}/>
       
        </a>
            
        
    )

}