import React from 'react'
import NavLeft from './NavLeft'
import NavCenter from './NavCenter'
import NavRight from './NavRight'

const Navbar = () => 
    <div className='navBar'>
        <NavLeft/>
        <NavCenter/>
        <NavRight/>
    </div>

export default Navbar