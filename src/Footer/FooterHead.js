import React from 'react'

const FooterHead = () => 
    <div className='footerContainer'>
        <div className='about'>
            <div className='logo'>
                <img 
                    src='./logo.png' 
                    alt='img'
                    height='50px'/>
                <span className='logoNameBlack'>Datalogics</span>
            </div>
                <p className='serviceDetail'>At Datalogics, two and a half decades of<br/>unparalleled service to customers has not<br/>quenched our thirst to win the hearts of new<br/>customers and enhance existing customer.</p>
                <p className='serviceDetail effect'>About Us | Contacct Us | Privacy Policy</p>
        </div>
        <div className='people'>
            <ul>
                <li><b>People</b></li>
                <li>General Rules & Expectations</li>
                <li>Jobs Profile</li>
                <li>Selection Process</li>
            </ul>
        </div>
        <div className='serviceList'>
            <ul>
                <li><b>Service</b></li>
                <li>Enterprise</li>
                <li>Repairs</li>
                <li>Logistics</li>
                <li>Dcare</li>
            </ul>
        </div>
        <div className='Enterprise'>
            <ul>
                <li><b>Enterprise</b></li>
                <li>About</li>
                <li>Start-Ups</li>
                <li>SME</li>
                <li>Mid-Market</li>
                <li>Large Enterprises</li>
                <li>Developers</li>
                <li>Offers</li>
            </ul>
        </div>
        <div className='education'>
            <ul>
                <li><b>Education</b></li>
                <li>About</li>
                <li>K12</li>
                <li>Hi-Education</li>
                <li>Teachers</li>
                <li>Parents</li>
                <li>Leaders</li>
                <li>IT</li>
            </ul>
        </div>
        <div className='vectorWorks'>
            <ul>
                <li><b>Vectorworks</b></li>
                <li>About</li>
                <li>Buildings</li>
                <li>Landscapes</li>
                <li>Entertainment</li>
                <li>All Products</li>
                <li>Training</li>
                <li>Enquiry</li>
            </ul>
        </div>
    </div>

export default FooterHead