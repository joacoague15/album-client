import { Box } from '@mui/material'
import React from 'react'
import Figuritas from '../subComponents/Figuritas'
import { Link } from 'react-router-dom';

const figuritas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

function Album() {
    return (<>
        <Box sx={{ position: "absolute", top: 120, bottom: "auto", width:"auto", bgcolor: "#010747", height:"auto"}}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", padding:"30px 100px" }}>
                {figuritas.map((index) => {
                    return <><Link to="/packages"><Figuritas key={index} /></Link></>
                })}
            </Box>
        </Box>
    </>
    )
}

export default Album