import React, { useState, useEffect, useRef } from 'react';


const Photorow = ({setCurrentImage, randomReset}) => {
    
    const [rand, setRand] = useState([]);

    useEffect(()=>{
        let tempRan = [];
        console.log('effect')
        for(let i = 0; i<4; i++){
            
            tempRan[i] = Math.random();
            
        }
        setRand(tempRan);
    },[randomReset])

    const imageElement = useRef([]);


    const handleOnClick = (e)=>{
        console.log(`handleOnClick ${e.target.name}`);
        console.log(imageElement.current[e.target.name])
        setCurrentImage(imageElement.current[e.target.name]);
    }

    const rowgen = ()=>{
        let result =[];
        for(let i=0; i< 4;i++){
            const seed = rand[i];
            const url = `https://picsum.photos/seed/${seed}/300/200`;
            const furl =`https://picsum.photos/seed/${seed}/600/400`;
            imageElement.current[i]=furl;
            result.push(
                <div className="flex-2-col"  key={i}>
                        <img name = {i} onClick={(e)=>handleOnClick(e)} src={url}/>
                </div>
            )
            i==1 && result.push(<div className='break'></div>)
            
        }
        return(
            <>
            {
                result
            }
            </>

        )
    }
    
    return ( 
        rowgen()
    );
}
 
export default Photorow;