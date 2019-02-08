import React from 'react';
import './Rank.css'

const Rank=({name,entries})=>{
return(
    <div className='ma5'>
        <p className='white fw6 f3'>{`${name}, Your current rank is ...`}</p><br/>
        <p className='rankno white fw8 f1 mt0 grow'><span>{entries}</span></p>
    </div>
)
}

export default Rank;