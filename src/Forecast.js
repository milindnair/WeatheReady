import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Typography } from "@mui/material";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <Grid className="forecast" sx={{ display: 'flex' }}>
      {data.list.splice(0, 3).map((item, idx) => (
        <div className="forecast_Box">
          <Grid container spacing={20}>
            {
              <Grid item xs={12}>

                <Paper className="daily-item" elevation={12} sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: '200px', width: '165px', ml: '10px',marginTop:'-30px' }} style={{ Gradient: "red" }}>
                  {/* <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" /> */}
                  <Typography className="day" variant='h4' sx={{ align: 'center' }}>{forecastDays[idx]} </Typography>
                  <Typography className="description" variant='h5'>{item.weather[0].description}</Typography>
                  <Typography className="min-max" variant='h5'>{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</Typography>
                </Paper>
              </Grid>
            }
          </Grid>
          {/*                     
                  <div className="daily-item">
                    <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">{item.weather[0].description}</label>
                    <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                  </div>
                  */}
        </div>))}
    </Grid>

  );
};

export default Forecast;