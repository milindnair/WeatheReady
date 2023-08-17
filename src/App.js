import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import './App.css';
import Sun from './sun.js';
import Building from './building.js';
import Search from './Search.js';
import { flexbox } from '@mui/system';
import Box from '@mui/material/Box';
import { weatherApiUrl } from './api.js';
import { weatherApiKey } from './api.js';
import { useState } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';


export default function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );
    const forecastFetch = fetch(
      `${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <Grid>
      <Grid container
        justifyContent="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "100vh" }}>

        <Search id="SearchComponent" style={{ width: '70vw' }} onSearchChange={handleOnSearchChange} />
        {/* <Sun sx={{}}/> */}
        {currentWeather && <Card
          justifyContent="center" alignItems="center"
          style={{
            height: "70vh",
          }}
          sx={{
            maxWidth: 545,
            minWidth: 500,
            my: "5vh",
            borderRadius: "10px",

          }}>

          {/* <CardContent sx={{ height: 380 }} >
            <Grid style={{ display: flexbox, flexDirection: 'column' }}>
              <Typography variant='h4' >Mumbai</Typography>
              <CardMedia
                component="img"
                height="100"
                image={require("/home/milind/Desktop/weatherify/WeatheReady/src/assets/01d.png")}
                alt="weather icon"
              />
              <Typography variant='h3'>Sunny</Typography>
            </Grid>
            <Grid>
              <Typography variant='h1'>19°C</Typography>
              <Typography variant='h5'>Feels like 19°C</Typography>
              <Typography variant='h5'>Humidity 19%</Typography>
              <Typography variant='h5'>Wind 19km/h</Typography>
              <Typography variant='h5'>Pressure 19hPa</Typography>
            </Grid>

          </CardContent> */}

          <CurrentWeather data={currentWeather} />


          <CardContent >
            {/* /* <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 158,
                    marginTop: "2.5rem",

                  },
                }}
              >
                
  
                
                {/* <Paper elevation={5}>
                  <Typography variant="h5" align="center">Tue</Typography>
                  <img src={require("/home/milind/Desktop/weatherify/WeatheReady/src/assets/01d.png")} style={{ height: 80, marginInlineStart: 20 }}></img>
                  <Typography variant="h5" align="center">19°C</Typography>
                </Paper>
                
                <Paper elevation={5}>
                  <Typography variant="h5" align="center">Tue</Typography>
                  <img src={require("/home/milind/Desktop/weatherify/WeatheReady/src/assets/01d.png")} style={{ height: 80, marginInlineStart: 20 }}></img>
                  <Typography variant="h5" align="center">19°C</Typography>
                </Paper>
                <Paper elevation={5}>
                  <Typography variant="h5" align="center">Wed</Typography>
                  <img src={require("/home/milind/Desktop/weatherify/WeatheReady/src/assets/01d.png")} style={{ height: 80, marginInlineStart: 20 }}></img>
                  <Typography variant="h5" align="center">19°C</Typography>
                </Paper> */}
            {/* </Box> */}
            {/* </Grid> */}
            {forecast && <Forecast data={forecast}  />}

          </CardContent>
          <CardActions>
          </CardActions>
        </Card>}

      </Grid>
      <Building />
    </Grid>
  );
}