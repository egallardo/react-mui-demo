import { Box, FormControlLabel, Checkbox } from "@mui/material"
import { useState } from "react"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    console.log({acceptTnC})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }
  return (
    <Box>
        <Box>
            <FormControlLabel 
                label="I accept terms and conditions" 
                control={<Checkbox checked={acceptTnC} onChange={handleChange}/>}
            />
        </Box>
        <Box>
            <Checkbox
                icon={<BookmarkBorderIcon/>}
                checkedIcon={<BookmarkIcon/>}
                checked={acceptTnC}
                onChange={handleChange}
            ></Checkbox>
        </Box>
    </Box>
  )
}
