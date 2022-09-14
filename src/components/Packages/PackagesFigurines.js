import React, {useState} from 'react'
import { Paper } from '@mui/material'

function PackagesFigurines() {
    const [animationPackages, setAnimationPackages] = useState("")
  return (
    <Paper sx={{
        margin: "auto", width: "200px", height: "260px", "&:hover": {
          transform: "rotate(1deg)"
        }
      }}className={animationPackages} onClick={()=>{setAnimationPackages("test")}}/>
  )
}

export default PackagesFigurines