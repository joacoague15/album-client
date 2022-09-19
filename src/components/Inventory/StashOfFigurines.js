import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { stickers } from '../Album/Index'
import Stickers from '../Album/Stickers'

function StashOfFigurines(props) {
    return (<>
        {stickers.slice(props.start, props.finish).map(stickers => {
            return <Box key={stickers} sx={{textAlign:"right"}}>
                <Typography sx={{color:"whitesmoke", fontSize:"25px"}}>X00</Typography>
                <Stickers  />
                <Typography sx={{color:"whitesmoke", fontSize:"20px"}}>{stickers}</Typography>
            </Box>
        })}
    </>

    )
}

export default StashOfFigurines