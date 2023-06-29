import { Button } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const NavRight = () => 
    <div className='navRight'>
        <Button 
            sx={
                { 
                    color:"red", 
                    backgroundColor:"white", 
                    borderRadius:"50%", 
                    width:"40px", 
                    height:"40px", 
                    minWidth:"unset",
                }
            } 
            startIcon={<MenuIcon sx={{marginLeft:"0.7rem"}}/>}>
        </Button>
    </div>

export default NavRight