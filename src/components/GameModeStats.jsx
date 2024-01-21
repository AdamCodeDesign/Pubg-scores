import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

export default function GameModeStats({ stats }) {
  const KD = stats.kills / stats.roundsPlayed;
  return (
    <Box
      bgcolor="grey.900"
      p={2}
      sx={{ borderRadius: "16px", opacity: 0.8 }}
      color="white"
    >
      <Grid container justifyContent="space-evenly" textAlign="center">
        <Grid item xs={10} md={10} p={1} margin={2}>
          <Box
            sx={{
              bgcolor: "grey.800",
              border: "1px solid tomato",
              width: "60%",
              maxWidth:'300px',
              height:'100%',
              margin: "0 auto"
            }}
          >
            <Typography sx={{color:'#F59B00', paddingTop:2}}>WINNER WINNER CHICKEN DINNER</Typography><img src="src/assets/chicken-oven.svg" height={100}/><Typography fontSize='4em' color='#76ff03'>{stats.wins}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid red" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> <img src="src/assets/KillDeath.svg" height={40}/><Typography>Avg kills/game</Typography><Typography>{KD.toFixed(2)}</Typography></Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> <img src="src/assets/Death.png" height={40}/><Typography>kills</Typography> <Typography>{stats.kills}</Typography></Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> roundMostKills{stats.roundMostKills}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> teamKills{stats.teamKills}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> <img src="src/assets/DBNO.png" height={40}/><Typography>Knockouts</Typography><Typography>{stats.dBNOs}</Typography></Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> <img src="src/assets/Headshot.png" height={40}/><Typography>headshot</Typography><Typography>{stats.headshotKills}</Typography></Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> <img src="src/assets/handshake-simple-solid.svg" height={40}/>assists{stats.assists}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box><img src="src/assets/explosion-solid.svg" height={40}/> Avg damageDealt{(stats.damageDealt/stats.roundsPlayed).toFixed(0)}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> longestKill{stats.longestKill}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> top10s{stats.top10s}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> rideDistance{stats.rideDistance}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> walkDistance{(stats.walkDistance / 1000).toFixed(2)} km</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> <img src="src/assets/baby-angel.svg" height={40}/>Reanimations {stats.revives}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box> Rounds Played {stats.roundsPlayed}</Box>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={2}
          p={1}
          margin={1}
        >
          <Box>
            Vehicle Destroys
            {stats.vehicleDestroys}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
