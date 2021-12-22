import React from 'react'
import { ContactInfo } from '../reusable-info/contact-info';
import "./Contact.css";
import gitImg from "../../images/github.png";
import linkedinImg from "../../images/linkedin.png";

const Contact = () => {
    const ContactInfo = [
        {
          id: 1,
          platform: "GitHub",
          link: "https://github.com/yaohong6782",
          icon: gitImg,
        },
      
        {
          id: 2,
          platform: "LinkedIn",
          link: "https://github.com/yaohong6782",
          icon: linkedinImg,
        },
    ];

    return (
        <div className='social-contact'>
            {ContactInfo.map((item)=>{
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
