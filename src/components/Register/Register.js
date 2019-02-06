import React from 'react';

const Register=({onRouteChange})=>{
return(
    <div>
        <article class="br3 bw2 ba b--black mv4 br4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main class="pa4 black-80">
        <form class="measure white">
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <legend class="f2 fw6 ph0 mh0">Register</legend>
        <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Name</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
        </div>
        <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
        </div>
        <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
        </div>
        </fieldset>
        <div class="">
        <input class="b ph3 pv2 input-reset ba1 b--black blue br-pill bg-white grow pointer f6 dib" type="submit" value="Register" onClick={()=>onRouteChange('home')}/>
        </div>
        </form>
        </main>  
        </article> 
    </div>
)
}

export default Register;