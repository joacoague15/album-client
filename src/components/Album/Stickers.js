import { Paper, Typography, Box } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

import { paperStyleOutside, paperStyleInside} from '../ConstCSS'

function Sickers(props) {
  return (
    <Box>
      <Paper elevation={5} sx={paperStyleOutside}>
        <Paper sx={paperStyleInside}>
          <AddIcon fontSize='large' sx={{ 
            display: "inline-block", 
            position: "absolute" 
            }} />
        </Paper>
      </Paper>
      <Typography sx={{ color: "white" }}>{props.number}</Typography>
    </Box>
  )
}

export default Sickers