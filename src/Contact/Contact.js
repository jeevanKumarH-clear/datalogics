/* eslint-disable jsx-a11y/anchor-is-valid */
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
                    type='text'
                    sx={{ width: '91%',padding:'5px'}} 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <a><i class="uil uil-user"></i></a>
                        </InputAdornment>
                        ),
                        }}/>
                <TextField 
                    placeholder="Email address"
                    type='email'
                    sx={{ width: '45%',padding:'5px'}}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <a><i class="uil uil-envelope"></i></a>
                        </InputAdornment>
                        ),
                        }} />
                <TextField
                    placeholder="Mobile Number"
                    type='number'
                    sx={{ width: '45%',padding:'5px'}}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <a><i class="uil uil-phone"></i></a>
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
                            <a><i class="uil uil-desktop-alt"></i></a>
                        </InputAdornment>
                        ),
                    }}/>
                <TextField 
                    placeholder="City"
                    type='text' 
                    sx={{ width: '91%',padding:'5px'}}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <a><i class="uil uil-map-marker"></i></a>
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