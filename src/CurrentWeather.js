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


const CurrentWeather = () => {
    return (
        <Card>
            <CardContent sx={{ height: 380 }} >
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

          </CardContent>
        </Card>
    )
}

export default CurrentWeather;