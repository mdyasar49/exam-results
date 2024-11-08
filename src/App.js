import React from "react";
import DateTime from "./Components/ExamDate&Name";
import { Grid, Typography } from "@mui/material";
import Report from "./Components/Report-ui";
import Details from "./Components/Details";
import OverallResult from "./Components/OverAll-Result";
import DistrictWiserResults from "./Components/District-Wise-Results";

function App() {
  
  return (
    <Grid container spacing={2} sx={{ml:5,mb:5}}>
       <Grid item xs={4}>
        <DateTime />
       </Grid>
       <Grid item xs={4}>
        <Details/>
       </Grid>
       <Grid item xs={8}>
        <Report />
       </Grid>
       <Grid item xs={5}>
       <Typography style={{ fontSize: 30, color: 'blue' }}>Overall Result</Typography>
        <OverallResult/>
       </Grid>
       <Grid item xs={9}>
       <Typography style={{ fontSize: 30, color: 'blue' }}>District Wise Results</Typography>
        <DistrictWiserResults/>
       </Grid>
    </Grid>
  );
}

export default App;
