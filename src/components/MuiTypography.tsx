import { Typography } from '@mui/material'

export const MuiTypography = () => {
    return(
        <div>
            <Typography variant = 'h1'>h1 Heading</Typography>
            <Typography variant = 'h2'>h2 Heading</Typography>
            <Typography variant = 'h3'>h3 Heading</Typography>
            <Typography variant = 'h4' component="h1" gutterBottom>h4 Heading</Typography>
            <Typography variant = 'h5'>h5 Heading</Typography>
            <Typography variant = 'h6'>h6 Heading</Typography>

            <Typography variant = 'subtitle1'>Sub title 1</Typography>
            <Typography variant = 'subtitle2'>Sub title 2</Typography>

            <Typography variant = 'body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Adipisci voluptas ducimus ullam pariatur tempora omnis consequuntur neque perferendis minima, 
            excepturi doloribus amet in, fugit magnam tenetur, quisquam tempore corrupti autem?</Typography>
            <Typography variant = 'body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem voluptas sapiente temporibus vitae pariatur, dolor laboriosam exercitationem maiores 
            quibusdam nulla voluptatibus corrupti corporis eos fugiat! Expedita officia repellendus quas ab!</Typography>
        </div>
    )
}