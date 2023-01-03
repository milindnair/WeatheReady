import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import './App.css';
import Sun from './sun.js';
import Building from './building.js';
import Search from './Search.js';



export default function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };


  return (
  <Grid>
    <Sun />
     <Grid   container 
    justify="center"
    alignItems="center"
    direction="column"
    style={{ minHeight: "100vh" }}>
    {/* <TextField 
    id="outlined-search"
    label="Search field" 
    type="search" 
    onChange={(e) => {handleOnSearchChange()}}
    style={{
      minWidth:"30vw",
      marginTop:"10vh",
    }}
    /> */}
    <Search onSearchChange={handleOnSearchChange}/>
    <Card style={{
        height:"70vh",
      }}
    sx={{ 
      maxWidth: 545,
      minWidth:500,
      my: "5vh",
      
       }}>

    <CardContent  sx={{ height: 380}}>
          <Typography >Mumbai</Typography>
          <Typography >Sunny</Typography>
    </CardContent>

    <CardContent>
    <FormControl fullWidth>
    <InputLabel id="inputType-label">Select Day</InputLabel>
      <Select
                      labelId="inputType-label"
                      id="inputType"
                      // value={Day}
                      // label="From"
                      // onChange={(e) => {
                      //   setInputType(e.target.value);
                      // }}
                    >
                      <MenuItem value="Monday">Monday</MenuItem>
                      <MenuItem value="Tuesday">Tuesday</MenuItem>
                      <MenuItem value="Wednesday">Wednesday</MenuItem>
                      <MenuItem value="Thursday">Thursday</MenuItem>
                      <MenuItem value="Friday">Friday</MenuItem>
                      <MenuItem value="Saturday">Saturday</MenuItem>
                      <MenuItem value="Sunday">Sunday</MenuItem>
      </Select>
    </FormControl>
    <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 120,
                  padding : 2,
                  marginTop:2,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              />
            </Grid>
          ))}
        </Grid>
        </Grid>

    </CardContent>
    <CardActions>
    </CardActions>
  </Card>
  
  </Grid>
  <Building />
  </Grid>
  );
}
