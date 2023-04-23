import React, { useState, useEffect } from 'react';
import { Searchlist } from '../services/search';

const Searchitems = ({term, setCurrentImage}) => {
    console.log('SearchItems COmponent')
    console.log(term);


    const optionItems = ()=>{
        const results = Searchlist(term);
        console.log(`results`)
        console.log(results)
        
        return results.map((indiv,i)=>{
            const 
             id = indiv.id,
             resolutionX = 600,
             resolutionY = 400,
             baseurl = 'https://picsum.photos/id/'
            const url = `${baseurl}${id}/${resolutionX}/${resolutionY}`;
            
            
            return(
                <div key={i} className="dropdown-row" onClick={()=>setCurrentImage(url)}>{indiv.author}</div>
            )
        })
        
    }
    console.log(`optionItems()`)
    console.log(optionItems())
    return (
        term && optionItems()
      );
}
 
export default Searchitems;
