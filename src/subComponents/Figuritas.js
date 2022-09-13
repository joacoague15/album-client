import { Paper } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';


function Figuritas() {
  return (
    
    <Paper elevation={5} sx={{
        cursor:"pointer",
        display:"block", 
        width:"120px", 
        height:"185px", 
        bgcolor:"#D9D9D9", 
        "&:hover":{
            transform:"rotate(1deg)"
    }}}>
        <Paper sx={{display:"block", top: 12, position:"relative", margin:"auto", width:"100px", height:"160px ", bgcolor:"#8E8D8D"}}>
            <AddIcon fontSize='large' sx={{display:"inline-block",position:"absolute"}}/>
        </Paper>
    </Paper>
  )
}

export default Figuritas