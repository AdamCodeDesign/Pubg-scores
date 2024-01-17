import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

export default function GameModeStats({ stats }) {
  const KD = stats.kills / stats.roundsPlayed;
  return (
    <Box bgcolor="grey.900" p={2} sx={{ borderRadius: "16px" , opacity:0.8}} color="white">
      <Grid container>
        <Grid item xs={12} md={12} p={1} margin={1}>
          <Box sx={{ bgcolor: "grey.800", border: "1px solid tomato" , width:'20%', height:'60px'}}>
            wins {stats.wins}
          </Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid red" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> K/D :{KD.toFixed(2)}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> kills {stats.kills}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> {stats.roundMostKills}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> {stats.teamKills}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> {stats.dBNOs}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> {stats.headshotKills}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> {stats.assists}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> {stats.damageDealt}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> {stats.longestKill}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> {stats.top10s}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> {stats.rideDistance}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> {stats.walkDistance}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={4}
          md={2}
          p={1}
          margin={1}
        >
          <Box> {stats.swimDistance}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
