import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm=({onInputChange,onButtonClick})=>{
return(
    <div>
        <p className='fw5 white'> This app will detect faces in your pictures. Give it a try</p>
        {/* <div classname='search pa4 br3 shadow-5'>
            <input className='f4 pa2 w-70' type='text'/>
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
        </div> */}
        <div className='center'>
        <div className='form center pa4 br4 shadow-5'>
          <input className='hovr f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow f3 fw6 link ph3 pv2 dib white bg-purple ima' onClick={onButtonClick} >Detect</button>
        </div>
      </div>
    </div>
)
}

export default ImageLinkForm;