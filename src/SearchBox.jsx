import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"; 
import { useState } from 'react';


export default function SearchBox() {

let [city, setcity] = useState("");


let handleChange = (evt) =>{
    setcity(evt.target.value);
};

let handleSubmit = (evt) =>{
    evt.preventDefault();
    console.log(city);
    setcity("");
}

    return (
        <div className="SearchBox">
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                    required id="City"
                     label="Enter City Name" 
                     variant="outlined" 
                     value={city}
                     onChange={handleChange}
                     />

                </Box>
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                    Search Button
                </Button>
            </form>
        </div>

    );
}