import { Paper, Typography, Box } from '@mui/material'
import React from 'react'

import { paperStyleOutside, paperStyleInside} from '../ConstCSS'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function Sickers(props) {
  return (
    <Box >
      <Paper elevation={5} sx={paperStyleOutside}>
        <Paper sx={paperStyleInside}>
          <QuestionMarkIcon fontSize='large' sx={{ 
            display: "block", 
            position: "realtive",
            }} />
        </Paper>
      </Paper>
      <Typography sx={{ color: "white" }}>{props.number}</Typography>
    </Box>
  )
}

export default Sickers;