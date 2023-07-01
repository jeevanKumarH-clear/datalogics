import React from 'react'

const Partners = () => 
    <div className='partners'>
        <div className='heading'>
            Our <span className='underline'><b>Partners</b></span>
        </div>
        <div className='imageContainer'>
            <img
                className='partnersLogo'
                src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-uPx7qpESYi79Km3MRBfIh4_1A2lS37w0g-ALwFuuxeWu__x3' 
                alt='img'
            />
            <img 
                className='partnersLogo'
                src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpZ2vyA35D4bmequ5Ez_hstVZUu_Hf-Ou24akDiSCjHmgNkPR-' 
                alt='img'
            />
            <div style={{display:'flex',alignItems:'center'}}>
            <img 
                className='partnersLogo'
                src='./logo.png' 
                alt='img'
            /><span className='dCare'><b>Care</b></span>
            </div>
        </div>
    </div>


export default Partners