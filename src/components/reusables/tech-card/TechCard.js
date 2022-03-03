import React from 'react'
import Spacer from '../separator/Spacer'
import './TechCard.css'
const TechCard = ({props}) => {
    return (
       
        <div className='tech-card'>
            <div className='tech-icon'>{props.icon}</div>
            <label className='tech-name'>{props.name}</label>
        </div>
    )
}

export default TechCard
