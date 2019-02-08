import React, { Component } from 'react';
import './App.css';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Title from './components/Title/Title';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Register from './components/Register/Register';

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
      box:{},
      route:'signin',
      signedIn:false,
      user:{
        id      : '',
        name    : '',
        email   : '',
        password: '',
        entries : 0,
        joinDate:'',
      }
    }
  }

  loadUser=(data)=>{
    this.setState({user:{
        id      : data.id,
        name    : data.name,
        email   : data.email,
        password: data.password,
        entries : data.entries,
        joinDate: data.joindate,
    }
    })
  }
  faceDetection=(data)=>{

     const box_details=data.outputs[0].data.regions[0].region_info.bounding_box;
     const image=document.getElementById("inputImage");
     const width=image.width;
     const height=image.height;
     const facebox={
       top   : box_details.top_row * height,
       bottom: height-(box_details.bottom_row*height),
       left  : box_details.left_col*width,
       right : width-(box_details.right_col*width),
     }
     return facebox;
  }

  displayFaceBox=(facebox)=>{
    console.log(this.state);
    this.setState({box:facebox});
  }


  onInputChange=(event)=>{
    this.setState({input:event.target.value});
    }

  onButtonClick=()=>{
    this.setState({imageUrl:this.state.input})
       app.models
       .predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
       .then(response=>{
          if(response){
            fetch('http://localhost:3000/image',{
                method:'put',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                   id:this.state.user.id
                })
            })
            .then(response => response.json())
            .then(data => {
                this.setState(Object.assign(this.state.user,{entries:data}))
            })
          }
          this.displayFaceBox(this.faceDetection(response));
          
       })
     .catch(err=>console.log(err));
  }

  onRouteChange=(option)=>{
    if(option==='home'){
      this.setState({signedIn:true});
    }
    else if(option==='signin'){
      this.setState({signedIn:false});
    }
      this.setState({route:option});    
  }
  

  render() {
    return (
      <div className="App">
        <Particles className='particle' param={particleOption}/>
        <Title/>

        <Navigation onRouteChange={this.onRouteChange} signedIn={this.state.signedIn}/>
        { 
        this.state.route === 'home'
        ?
          <div>     
            <Logo/>
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
            <FaceRecognition image={this.state.imageUrl} box={this.state.box}/> 
          </div>
        :
          (
            this.state.route === 'signin'
            ?
            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            :
            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>          
          )         
        }
      </div>
    );
  }

}

export default App;