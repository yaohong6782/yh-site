import React from 'react'
import { ContactInfo } from '../contact-info/contact-info';
import "./Contact.css";

const Contact = () => {
    const info = ContactInfo;
    return (
        <div className='social-contact'>
            {info.map((item)=>{
                return (
                    <a href={item.link} key={item.id}>
                        <div className='social-icon-div' >
                            <img src={item.icon} alt="icons" className='social-icon' />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default Contact;
