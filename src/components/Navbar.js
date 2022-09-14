import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (<>
        <Box sx={{display:"flex", flexDirection:"column", width: "100%", textAlign:"center", bgcolor: "#010747", borderRadius: "0 0 15px 15px" }}>
            <Typography variant="h3">
                <Link to="/" className='link-home'>
                    Album
                </Link>
            </Typography>
            <Box sx={{display:"flex", gap:"3rem", justifyContent:"center"}}>
            <Typography variant='h5'>
<<<<<<< HEAD:src/components/Album/NavBar.js
                <Link to="/packages" className='link-home'>Packages</Link>
=======
                <Link to="/" className='link-home'>Album</Link>
>>>>>>> master:src/components/Navbar.js
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