import React from 'react'

const ServiceCenters = () => 
    <div className='serviceContainer'>
        <div className='serviceHeading'>
            <p className='heading'>Our <span className='underline'><b>Service Centers</b></span></p>
        </div>
        <div className='services'>
            <div className='service'>
                    <div className='city'>
                        <img 
                            width="60" 
                            height="60" 
                            src="./chennai.png"
                            alt="crown"/>
                        <span>Chennai</span>
                    </div>
                <div className='serviceCenterDetail'>
                    <p>No 54, K.B. Dasan Road,<br/>2ND Floor Next to S.I.E.T Womens College,<br/>Above Bank of Baroda, Teynampet,<br/>Chennai - 600 018.<br/><b>Phone: +91 9789999428, +91 44 24321683<br/>Email: info@datalogicsindia.com<br/></b></p>
                    <p className='getDirection'>
                        Get Direction 
                        <span>
                            <img 
                                className='directionImg'
                                width="20" 
                                height="20" 
                                src="https://img.icons8.com/ios/50/000000/road-left-turn-sign.png" 
                                alt="road-left-turn-sign"/>
                        </span>
                    </p>
                </div>
            </div>
            <div className='service'>
                <div className='city'>
                    <img 
                        width="60"
                        height="60" 
                        src='./hyderabad.png'
                        alt="security-checked--v1"/>
                        <span>Bangalore</span>
                </div>
                <div className='serviceCenterDetail'>
                    <p>#421/G 1st main, Indira Nagar 1st stage<br/>Krishna Temple Road Bangalore-560038<br/><b>Tel: 91 8041234576, 08048653922, 08048653822 Mobile: 9789999435<br/>Email: hamsa@datalogicsindia.com,<br/>info@datalogicsindia.com<br/></b></p>
                    <p className='getDirection'>
                        Get Direction 
                        <span>
                            <img 
                                className='directionImg'
                                width="20" 
                                height="20" 
                                src="https://img.icons8.com/ios/50/000000/road-left-turn-sign.png" 
                                alt="road-left-turn-sign"/>
                        </span>
                    </p>
                </div>
            </div>
            <div className='service'>
                <div className='city'>
                <img 
                    width="60" 
                    height="60" 
                    src='./delhi.png'
                    alt="lightning-bolt--v1"/>
                    <span>Mumbai</span>
                </div>
                <div className='serviceCenterDetail'>
                    <p>Block -A, No.105,Oxford Chamber <br/>Tunga Village,Saki Vihar Road <br/>Opposite Telephone Exchange<br/>Andheri East, Tunga Village<br/>Chandivali, Powai, Mumbai-400072<br/><b>Tel: 022-28571148</b><br/></p>
                    <p className='getDirection'>
                        Get Direction 
                        <span>
                            <img 
                                className='directionImg'
                                width="20" 
                                height="20" 
                                src="https://img.icons8.com/ios/50/000000/road-left-turn-sign.png" 
                                alt="road-left-turn-sign"/>
                        </span>
                    </p>
                </div>
            </div>
            <div className='service'>
                <div className='city'>
                <img 
                    width="60" 
                    height="60" 
                    src='./pune.png'
                    alt="external-grow-up-business-and-finance-tanah-basah-glyph-tanah-basah"/>
                    <span>Pune</span>
                </div>
                <div className='serviceCenterDetail'>
                    <p>19, SunMoon Bungalow<br/>Lane no 2, Matruchaya<br/>Cooperative Society Nagar Road<br/>Yerwada<br/>Pune 411006<br/><b>Ph: 9597343044</b><br/>Get Direction</p>
                    <p className='getDirection'>
                        Get Direction 
                        <span>
                            <img 
                                className='directionImg'
                                width="20" 
                                height="20" 
                                src="https://img.icons8.com/ios/50/000000/road-left-turn-sign.png" 
                                alt="road-left-turn-sign"/>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>

export default ServiceCenters