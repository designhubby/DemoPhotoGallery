import {useEffect, useState, useRef} from 'react'
import {useNavigate, Link, useLocation  } from 'react-router-dom';
import CarouselPhoto from './carouselPhoto';
import { ImageReloader } from './imageReloader';
import { Modal_Photo } from './modal_photo';
import Photorow from './photorow';


export function Maingallery({setImg, img}){
    const navigate = useNavigate();
    const modalRef = useRef(null);

    const [modalShow, setModalShow] = useState(null);

    const [randomReset,setRandomReset] = useState();
    // const [img, setImg] = useState();

    useEffect(()=>{
        img && setCurrentImage(img);
    },[img]);

    const setCurrentImage = (cimg)=>{
        console.log(`setCurrentImage ${cimg}`);
        setImg(cimg);
        setModalShow('modalIn');
    }


    const handleRandomResetButton = (e) =>{
        e.preventDefault();
        setRandomReset(Math.random());

    }

    const handleModalShow = (state)=>{
        console.log(`state`)
        console.log(state)
        setModalShow(state) ;
    }

    return(
        <>
        <div id='gallery' className='page-section'>
          <p className="page-section-heading">
            Demo Image Gallery
          </p>
        <div >
            <Modal_Photo 
            handleModalShow = {handleModalShow}
            modalShow = {modalShow}
            ref={modalRef}
            img = {img}/>
        </div>
        <div className='container'>

            <div className=' row align-items-center justify-content-center'>
                <div className ='col-3  border'>Carousel</div>
            </div>
            <div className='row align-items-center justify-content-center'>
                <CarouselPhoto setCurrentImage={setCurrentImage}/>
            </div>
            
            <div className='d-flex flex-row flex-wrap m-2 justify-content-center'>
                <Photorow setCurrentImage={setCurrentImage} randomReset = {randomReset}/>
            </div>            
            <div className='d-flex flex-row flex-wrap m-2 justify-content-center'>
                <Photorow setCurrentImage={setCurrentImage} randomReset = {randomReset}/>
            </div>
            <div className='d-flex flex-row flex-wrap m-2 justify-content-center'>
                <Photorow setCurrentImage={setCurrentImage} randomReset = {randomReset}/>
            </div>
            <div className='d-flex flex-row flex-wrap m-2 justify-content-center'>
                <Photorow setCurrentImage={setCurrentImage} randomReset = {randomReset}/>
            </div>
            <div className='row align-items-center justify-content-center'>
                <div className='col-3'>
                    <button className='btn btn-primary' onClick={(e)=>handleRandomResetButton(e)} type='button'>Randomize</button>
            
                </div>
            </div>
        </div>

        </div>



        </>

    )
}