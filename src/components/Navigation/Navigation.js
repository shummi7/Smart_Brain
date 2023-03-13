import React from 'react';
import './Navigation.css';

const Navigation=({onRouteChange,signedIn})=>{
if(signedIn){    
return(
    <div>
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='sig f4 fw6 link white pa3 pointer' onClick={()=>onRouteChange('signinPage')}>Sign-Out</p>
    </nav>    
    </div>
)
}
else{
    return(
        <div>
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className='sig f4 fw6 link white pa3 pointer' onClick={()=>onRouteChange('signinPage')}>Sign-In</p>
            {/* <p className='sig f4 fw6 link white pa3 pointer' onClick={()=>onRouteChange('Register')}>Register</p> */}
        </nav>    
        </div>
    )
}
}

export default Navigation;