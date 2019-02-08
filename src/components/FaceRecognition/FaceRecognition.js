import React from 'react';
import './FaceRecognition.css';

const FaceRecognition=({image,box})=>{
return(
    <div className='center'>
    <div className='imagediv absolute mt2'>
    <img  id="inputImage" alt='' className='imagesearch' src={image} /> 
    <div className='bounding-box' style={{top:box.top,bottom:box.bottom,left:box.left,right:box.right}}></div>
    </div>
    </div>
)
}

export default FaceRecognition;