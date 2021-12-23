import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { AreaChartGraph } from "./AreaChartGraph";
import {Doughtnut} from "./Doughnut";
import "./dashboard.css";
import {Progress} from "./Progress";
import { ColorBox } from "./ColorBox";
import { Detailbox } from "./Detailbox";
import { Illustration } from './Illustration';
import { Development } from './Development';
import { Navbar } from './Navbar';
import styled from "styled-components";

export  function GridDashboard() {
    
    const Items=styled.div`
    background:white;
    border-radius:5px;
    overflow: hidden;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
  return (
      <div className="dashboard-content">
     
<h2 className="dashboard-name">Dashboard</h2>
      <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
    
      <Grid item xs={12} md={12}>
      <Detailbox/>
      </Grid>
      <Grid item xs={12} md={8}>
        <Items>
        <div item className="grid-title">Earnings Overview</div>
        <AreaChartGraph/>
        </Items>
      </Grid>
      <Grid  item xs={12} md={4}>
        <Items>
        <div className="grid-title">Revenue Sources</div>
        <Doughtnut/>
        </Items>
      </Grid>
      <Grid item xs={12} md={6}>
        <Items>
        <div item className="grid-title">Projects</div>
         <Progress/>
         </Items>
      </Grid>
      <Grid item xs={12} md={6}>
        <Items> 
        <div className="grid-title">Illustrations</div>
        <Illustration/>
        </Items>
      </Grid>
      <Grid item xs={12} md={6}>
         <ColorBox/>
      </Grid>
      <Grid item xs={12} md={6}>
        <Items>
        <div className="grid-title">Development Approach</div>
        <Development/>
         </Items>
      </Grid>
    </Grid>
  </Box>
      </div>
    
  );
}