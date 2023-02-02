import { Stack, TextField, InputAdornment, alertTitleClasses } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react"

export const MuiTextField = () => {
    const [value, setValue] = useState("")
  return (
    <Stack spacing = {4}>
        <Stack direction="row" spacing={2}>
            <TextField label="name" variant="outlined"/>
            <TextField label="name" variant="filled"/>
            <TextField label="name" variant="standard"/>
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField label="Small secondary" size="small" color="secondary" />
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField 
                label="Form Input" 
                required value={value} 
                onChange={(e) => setValue(e.target.value)} 
                error={!value}
                helperText={!value ? "Required": "Do not share your password with anyone"}
            />
            <TextField 
                label="Password" 
                type="password" 
                helperText="Do not share your password with anyone" 
                disabled
                InputProps={{
                    endAdornment: <InputAdornment position="end"><VisibilityIcon/></InputAdornment>
                }}
            />
            <TextField label="Read Only" InputProps={{ readOnly: true}}/>
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField 
                label="Amount" 
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
            />
            <TextField 
                label="Weight" 
                InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}
            />
        </Stack>
    </Stack>
  )
}

