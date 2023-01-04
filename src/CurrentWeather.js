import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { flexbox } from "@mui/system";
// import { useState } from "react";
// import { useEffect } from "react";
// import { weatherApiKey } from "./api";
// import { weatherApiUrl } from "./api";


const CurrentWeather = ({ data }) => {
    console.log(data);
    return (
        <Card>
            <CardContent sx={{ height: 380 }} >
            <Grid style={{ display: flexbox, flexDirection: 'column' }}>
              <Typography variant='h4' >{data.city}</Typography>
              <CardMedia
                component="img"
                height="100"
                image={require("/home/milind/Desktop/weatherify/WeatheReady/src/assets/01d.png")}
                alt="weather icon"
              />
              <Typography variant='h3'>{data.weather[0].description}</Typography>
            </Grid>
            <Grid>
              <Typography variant='h1'>{Math.round(data.main.temp)}°C</Typography>
              <Typography variant='h5'>{Math.round(data.main.feels_like)}°C</Typography>
              <Typography variant='h5'>{data.main.humidity}%</Typography>
              <Typography variant='h5'>{data.wind.speed} m/s</Typography>
              <Typography variant='h5'>{data.main.pressure} hPa</Typography>
            </Grid>

          </CardContent>
        </Card>
    )
}

export default CurrentWeather;