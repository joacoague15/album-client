import { Box, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { inventoryBoard } from '../ConstCSS';
import StashOfFigurines from './StashOfFigurines';

const optionsFigurinesValue = [{
    value: 0,
    primary: "Common"
}, {
    value: 1,
    primary: "Rare"
}, {
    value: 2,
    primary: "Epic"
}, {
    value: 3,
    primary: "UltraRare"
},]

function Inventory() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [valueFigurinesStart, setValueFigurinesStart] = useState(0)
    const [valueFigurinesFinish, setValueFigurinesFinish] = useState(12)

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        if (index === 0) {
            setValueFigurinesStart(0)
            setValueFigurinesFinish(12)
        } else if (index === 1) {
            setValueFigurinesStart(13)
            setValueFigurinesFinish(17)
        } else if (index === 2) {
            setValueFigurinesStart(18)
            setValueFigurinesFinish(21)
        } else if (index === 3) {
            setValueFigurinesStart(22)
            setValueFigurinesFinish(25)
        }
    };

    return (
        <Box sx={inventoryBoard}>
            <Box sx={{ bgcolor: "#010747", width: "300px" }}>
                <List component="nav" aria-label="main mailbox folders">
                    {optionsFigurinesValue.map(options => {
                        return <ListItemButton
                            key={options.value}
                            selected={selectedIndex === options.value}
                            onClick={(event) => handleListItemClick(event, options.value)}
                        >
                            <ListItemText primary={options.primary} sx={{ color: "white" }} />
                        </ListItemButton>
                    })}
                </List>
            </Box>
            <Box sx={{  display: "flex", flexWrap: "wrap", gap: "15px" }}>
                <StashOfFigurines
                    index={selectedIndex}
                    finish={valueFigurinesFinish}
                    start={valueFigurinesStart}
                />
            </Box>
        </Box>
    )
}

export default Inventory
