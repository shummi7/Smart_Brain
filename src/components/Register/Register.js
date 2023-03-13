import React from 'react';

class Register extends React.Component{

    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            password:""
        }
    }

    onNameChange=(event)=>{
        this.setState({name:event.target.value});
    }
    onEmailChange=(event)=>{
        this.setState({email:event.target.value});
    }
    onPasswordChange=(event)=>{
        this.setState({password:event.target.value});
    }
    hi=()=>{
        console.log('register');
    }
    onSubmitRegister=()=>{

        fetch('https://inquisitive-waistcoat-bee.cyclic.app/register',{
            method:'post',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                name:this.state.name,
                email:this.state.email,
                password:this.state.password
            })
            })
        .then( response =>response.json())
        .then( data=> {
            if(data.id){
                this.props.loadUser(data);
                this.props.onRouteChange('home');
            }
        })
        

    }


    render(){
    return(
        <div>
            <article className="br3 bw2 ba b--black mv4 br4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <form className="measure white">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
            <label className="db fw6 lh-copy f6">Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" onChange={this.onNameChange}/>
            </div>
            <div className="mt3">
            <label className="db fw6 lh-copy f6">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
            </div>
            <div className="mv3">
            <label className="db fw6 lh-copy f6">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
            </div>
            </fieldset>
            <div className="">
            <input className="b w4  pl5 pv2 ba1 b--black blue br-pill bg-white grow pointer f6 dib"  value="Register" onClick={this.onSubmitRegister} onChange={this.hi}/>
            </div>
            </form>
            </main>  
            </article> 
        </div>
    )
    }
}


export default Register;