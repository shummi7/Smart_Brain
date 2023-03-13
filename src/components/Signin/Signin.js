import React from "react";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      signedInEmail: "guest@gmail.com",
      signedInPassword: "guest",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signedInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signedInPassword: event.target.value });
  };
  hi = () => {
    console.log("Sign-in");
  };

  onSubmitSignin = () => {
    fetch("https://inquisitive-waistcoat-bee.cyclic.app/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signedInEmail,
        password: this.state.signedInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          this.props.loadUser(data);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <div className="ma5">
        <article className="br3 bw2 ba  b--black mv4 br4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <form className="measure white">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                <p className="white">
                  Email: guest@gmail.com 
                </p>
                <hr />
                <p className="white">Password: guest</p>

                <div className="mt3">
                  <label className="db fw6 lh-copy f6 ">Email</label>
                  <input
                    className="pa2 input-reset ba white bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    value="guest@gmail.com"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6">Password</label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                    value="guest"
                    autoComplete="true"
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b w3 ph3 pv2 center black ba1 b--black blue br-pill bg-white grow pointer f6 dib"
                  value="Sign in"
                  onClick={this.onSubmitSignin}
                  onChange={this.hi}
                />
              </div>
              <div className="lh-copy mt3">
                {/* <p
                  className="f6 link dim white db pointer"
                  onClick={() => this.props.onRouteChange("register")}
                >
                  Register
                </p> */}
              </div>
            </form>
          </main>
        </article>
        {/* <p className='white'>Email: guest@gmail.com  <hr></hr><span>Password: guest</span></p> */}
      </div>
    );
  }
}

// const Signin=({onRouteChange})=>{
// return(
//     <div className='ma5'>
//         <article className="br3 bw2 ba  b--black mv4 br4 w-100 w-50-m w-25-l mw6 shadow-5 center">
//         <main className="pa4 black-80">
//         <form className="measure white">
//         <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//         <legend className="f2 fw6 ph0 mh0">Sign In</legend>
//         <div className="mt3">
//         <label className="db fw6 lh-copy f6">Email</label>
//         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
//         </div>
//         <div className="mv3">
//         <label className="db fw6 lh-copy f6">Password</label>
//         <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
//         </div>
//         </fieldset>
//         <div className="">
//         <input className="b ph3 pv2 input-reset ba1 b--black blue br-pill bg-white grow pointer f6 dib" type="submit" value="Sign in" onClick={()=>onRouteChange('home')}/>
//         </div>
//         <div className="lh-copy mt3">
//         <p className="f6 link dim white db pointer" onClick={()=>onRouteChange('register')}>Register</p>
//         </div>
//         </form>
//         </main>
//         </article>
//     </div>
// )
// }
// }

export default Signin;
