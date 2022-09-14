import {Box} from '@mui/material'
import React from 'react'
import Sticker from './Sticker';
import {useNavigate} from "react-router-dom";


function Album() {
    const navigate = useNavigate();


    const redirectToPackages = () => {
        navigate('/packages');
    }

    return (
        <Box sx={{ position: "absolute", top: 120, bottom: "auto", width:"auto", bgcolor: "#010747", height:"auto"}}>
                <Sticker onClick={redirectToPackages} />
                <Sticker onClick={redirectToPackages} />
                <Sticker onClick={redirectToPackages} />
        </Box>
    )
}

export default Album