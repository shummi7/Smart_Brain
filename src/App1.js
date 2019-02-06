import React, { Component } from 'react';
import './App.css';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const particleOption={
      particles: {
        number: {
          value:90,
          density:{
            enable:true,
            value_area:1000
          }
        }
    }
}
const app = new Clarifai.App({
  apiKey: '8363d37ebc4c4e5f9dd3a0ab5595eb89'
 });


class App extends Component {
  constructor(){
    super()
    this.state={
      input:'',
      imageUrl:'',
      box:{}
    }
  }

  faceDetection=(data)=>{
    console.log('box-details',data);
     const box_details=data.outputs[0].data.regions[0].region_info.bounding_box;
     console.log('box-details',box_details);
     const image=document.getElementById("inputImage");
     const width=image.width;
     const height=image.height;
     const facebox={
       top:box_details.top_row * height,
       bottom:height-(box_details.bottom_row*height),
       left:box_details.left_col*width,
       right:width-(box_details.right_col*width),       
     }
     return facebox;
  }

  displayFaceBox=(facebox)=>{
    console.log(facebox);
    this.setState({box:facebox});
  }


  onInputChange=(event)=>{
    this.setState({input:event.target.value});
    }

  onButtonClick=()=>{
    this.setState({imageUrl:this.state.input})
       app.models
       .predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
       .then(response=>
         this.displayFaceBox(this.faceDetection(response)))
     .catch(err=>console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles className='particle' param={particleOption}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
        <FaceRecognition image={this.state.imageUrl} box={this.state.box}/> 
      </div>
    );
  }
}

export default App;




import React from 'react';
import './FaceRecognition.css';

const FaceRecognition=({image,box})=>{
return(
    <div className='center'>
    <div className='imagediv absolute mt2'>
    <img  id="inputImage" className='imagesearch' src={image} /> 
    <div className='bounding-box' style={{top:box.top,bottom:box.bottom,left:box.left,right:box.right}}></div>
    </div>
    </div>
)
}

export default FaceRecognition;



.imagesearch{
    margin-top:10px;
    width:400px;
    height:auto;

}
.center{
    display:flex;
    justify-content: center;
}
.bounding-box{
    
    position: absolute;
    box-shadow: inset 0 0 0 3px #149df2;

    display: flex;

    flex-wrap: wrap;

    justify-content: center;
    cursor: pointer;
    
}



import React, { Component } from 'react';
import './App.css';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const particleOption={
      particles: {
        number: {
          value:90,
          density:{
            enable:true,
            value_area:1000
          }
        }
    }
}
const app = new Clarifai.App({
  apiKey: '8363d37ebc4c4e5f9dd3a0ab5595eb89'
 });


class App extends Component {
  constructor(){
    super()
    this.state={
      input:'',
      imageUrl:'',
      box:[],
      boxTop:[],
    }
  }

  faceDetection=(data)=>{
    console.log(data);
    const box_length=data.outputs[0].data.regions.length;
    var boxarray=[];
    for(var i=0;i<box_length;i++){
      const box_details=data.outputs[0].data.regions[i].region_info.bounding_box;
      const image=document.getElementById("inputImage");
      const width=image.width;
      const height=image.height;
      const facebox={
      top:box_details.top_row * height,
      bottom:height-(box_details.bottom_row*height),
      left:box_details.left_col*width,
      right:width-(box_details.right_col*width),       
     }
     boxarray[i]=facebox;
    }
    return boxarray;
  }

  displayFaceBox=(boxarray,box_length)=>{

    this.setState({box:boxarray});
    
    console.log('box',this.state.box[0].top);
  }


  onInputChange=(event)=>{
    this.setState({input:event.target.value});
    }

  onButtonClick=()=>{
    this.setState({imageUrl:this.state.input})
       app.models
       .predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
       .then(response=>
         this.displayFaceBox(this.faceDetection(response)))
     .catch(err=>console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles className='particle' param={particleOption}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
        <FaceRecognition image={this.state.imageUrl} box={this.state.box}/> 
      </div>
    );
  }
}

export default App;


import React from 'react';
import './FaceRecognition.css';

const FaceRecognition=({image,box})=>{
    const boxy=Object.assign([],box);


    console.log('boxy',boxy);
    console.log('boxy1',boxy[0]);

    const bot=boxy[0];

    // const leng=Number(boxy.box.length);
    console.log('boxy2',bot);

return(
    
    <div className='center'>
    <div className='imagediv absolute mt2'>
    <img  id="inputImage" className='imagesearch' src={image} /> 
    {/* <div className='bounding-box' style={{top:boxy.box[0].top,bottom:boxy.box[0].bottom,left:boxy.box[0].left,right:boxy.box[0].right}}></div> */}
    {/* if(leng>1){
        <div className='bounding-box' style={{top:boxy.box[1].top,bottom:boxy.box[1].bottom,left:boxy.box[1].left,right:boxy.box[1].right}}></div>
    } */}


    
    </div>
    </div>
)
}

export default FaceRecognition;





