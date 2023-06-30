import { AccountCircleOutlined } from '@mui/icons-material'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DevicesIcon from '@mui/icons-material/Devices';
import { Button, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const Contact = () => 
    <div className='contact'>
        <div className='info'>
            <p>Elevate Your Enterprise Today.Contact Us Now To Learn More</p>
            <p>About How Our Apple Device Lifecycle Management Service Can Transform Your Business.</p>
            <p>Together, Let's Shape A Brighter, More Secure Future For Your Enterprise.</p>
        </div>
        <div className='details'>
            <div className='detailsLeft'>
                <img
                    className='contactImg'
                    src='./Contact.jpg'
                    alt='img'
                    height='450px'
                />
            </div>
            <div className='inputs'>
                <TextField 
                    placeholder="Name"  
                    sx={{ width: '91%',padding:'5px'}} 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleOutlined/>
                        </InputAdornment>
                        ),
                        }}/>
                <TextField 
                    placeholder="Email address"
                    sx={{ width: '45%',padding:'5px'}}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon/>
                        </InputAdornment>
                        ),
                        }} />
                <TextField
                    placeholder="Mobile Number"
                    sx={{ width: '45%',padding:'5px'}}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <CallIcon/>
                        </InputAdornment>
                        ),
                    }}/>
                <TextField 
                    placeholder="Device" 
                    sx={{ width: '91%',padding:'5px'}}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <LocationOnIcon/>
                        </InputAdornment>
                        ),
                    }}/>
                <TextField 
                    placeholder="City" 
                    sx={{ width: '91%',padding:'5px'}}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <DevicesIcon/>
                        </InputAdornment>
                        ),
                    }}/>
                <TextField 
                    sx={{ width: '91%',padding:'5px'}}
                    placeholder="Concern" 
                    fullWidth
                   />
                <Button 
                    variant="contained" 
                    color="success"
                    sx={{ width: '60%',height:'15%',marginLeft:'20%', marginTop:'1%',borderRadius:'10px'}}
                    >
                    Submit
                </Button>
            </div>
        </div>
    </div>

export default Contact