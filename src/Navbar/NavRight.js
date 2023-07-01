import { Button } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const styles = {
    menuBtn: {
      backgroundColor: 'white',
      color:'red',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      minWidth: 'unset',
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: 'black',
      },
    },
  };

const NavRight = () => 
    <div className='navRight'>
        <Button 
            sx={styles.menuBtn} 
            startIcon={<MenuIcon sx={{marginLeft:"0.7rem"}}/>}>
        </Button>
    </div>

export default NavRight