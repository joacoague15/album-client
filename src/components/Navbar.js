import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {navBar} from './ConstCSS'

function Navbar() {
    return (<>
        <Box sx={navBar}>
            <Typography variant="h3" sx={{color:"whitesmoke", cursor:"default"}}>
                Album
            </Typography>
            <Box sx={{display:"flex", gap:"3rem", justifyContent:"center"}}>
            <Typography variant='h5'>
                <Link to="/" className='link-home'>Album</Link>
            </Typography>
            <Typography variant='h5'>
                <Link to="/packages" className='link-home'>Packages</Link>
            </Typography>
            </Box>
        </Box>
    </>
    )
}

export default Navbar