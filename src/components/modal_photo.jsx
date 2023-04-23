import React, { useState, useEffect, forwardRef } from 'react';

export const Modal_Photo = forwardRef(({img, handleModalShow, modalShow}, ref) => {
    
    
    const [modalClass, setModalClass] = useState('');

    useEffect(()=>{
        if(modalShow == 'modalOut'){
            setModalClass('modalOut')}
        if(modalShow == 'modalIn'){
            setModalClass('modalIn') 
        }
    },[modalShow])



    return(
        <>
        
        <div className={`modal-background ${modalClass}`} onClick={()=>handleModalShow('modalOut')} >
        </div>
        <div ref = {ref} id='open-modal' onClick={()=>handleModalShow('modalOut')} className={`modal1 ${modalClass}`}>
            <div className='d-flex flex-column align-items-center justify-content-center modal-content'>

                        <img className='modal-img' src={img}/>
                        <button type="button" onClick={()=>handleModalShow('modalOut')} className="btn-close position" aria-label="Close"></button>
                        

            </div>
        </div>
        </>
    )

}
)
