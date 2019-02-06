import React from 'react';

const Signin=({onRouteChange})=>{
return(
    <div className='ma5'>
        <article className="br3 bw2 ba  b--black mv4 br4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
        <form className="measure white">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
        <div className="mt3">
        <label className="db fw6 lh-copy f6">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
        </div>
        <div className="mv3">
        <label className="db fw6 lh-copy f6">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
        </div>
        </fieldset>
        <div className="">
        <input className="b ph3 pv2 input-reset ba1 b--black blue br-pill bg-white grow pointer f6 dib" type="submit" value="Sign in" onClick={()=>onRouteChange('home')}/>
        </div>
        <div className="lh-copy mt3">
        <p className="f6 link dim white db pointer" onClick={()=>onRouteChange('register')}>Register</p>
        </div>
        </form>
        </main>  
        </article>  
    </div>
)
}

export default Signin;