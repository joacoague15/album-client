import { Box, Typography } from '@mui/material'
import React from 'react'
import Stickers from './Stickers'
import Pagination from '@mui/material/Pagination';

const stickers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

function Album() {
    return (<>
        <Box sx={{ position: "absolute", top: 120, bottom: "auto", left: 30, right: 30, bgcolor: "#010747", height:"auto", borderRadius:"15px", alignContent:"center"}}>
            <Box sx={{textAlign:"center", padding:"50px 0", width:"80%", position:"relative", left:"10%"}}>
                <Typography variant='h3' sx={{color:"white"}}>Title of album</Typography>
                <Typography sx={{color:"white"}}>Description. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi distinctio eius quos corrupti! Minus dicta quam placeat ipsa, ab delectus nisi expedita culpa cum modi atque, unde facere amet natus.</Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", padding:"30px 100px" }}>
                {stickers.map((index) => {
                    return <Stickers key={index} number={index}/>
                })}
            </Box>
            <Box sx={{ width:"22%", position:"relative", left:"39.4%", margin:"0 0 20px 0"}}>
                <Pagination count={5} size="large"/>
            </Box>
        </Box>
    </>
    )
}

export default Album