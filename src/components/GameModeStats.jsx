import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

export default function GameModeStats({ stats }) {
  const KD = stats.kills / stats.roundsPlayed;
  return (
    <Box
      bgcolor="grey.900"
      sx={{ borderRadius: "16px", opacity: 0.8 }}
      color="white"
    >
      <Grid
        container
        justifyContent="space-evenly"
        textAlign="center"
        rowSpacing={4}
        my={2}
      >
        <Grid item xs={10} md={10} p={1} margin={2}>
          <Box
          // sx={{
          //   bgcolor: "grey.800",
          //   border: "1px solid tomato",
          //   width: "60%",
          //   maxWidth: "300px",
          //   height: "100%",
          //   margin: "0 auto",
          // }}
          >
            <Typography
              sx={{ color:'warning.main', paddingTop: 2, fontSize: "2em" }}
            >
              WINNER WINNER CHICKEN DINNER
            </Typography>
            <img src="src/assets/chicken-oven.svg" height={100} />
            <Typography fontSize="4em" color="#76ff03">
              {stats.wins}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
          justifyContent='center'
        >
          <Box>
            <img src="src/assets/Death.png" height={40} />
            <Typography fontSize="1.5em">Avg kills/game</Typography>
            <Typography fontSize="1.5em" color='warning.main'>{KD.toFixed(2)}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <Box width="80%" margin="0 auto">
              <img src="src/assets/cross.svg" height={30} />
              <img src="src/assets/cross.svg" height={40} />
              <img src="src/assets/cross.svg" height={30} />
            </Box>
            <Typography fontSize="1.5em"> All kills</Typography>{" "}
            <Typography fontSize="1.5em" color='warning.main'>{stats.kills}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <Box margin="0 auto">
              <img src="src/assets/Death.png" height={30} />
              <img src="src/assets/Death.png" height={40} />
              <img src="src/assets/Death.png" height={30} />
            </Box>
            <Typography fontSize="1.5em">roundMostKills</Typography>
            <Typography fontSize="1.5em" color='warning.main'>{stats.roundMostKills}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <img src="src/assets/users-slash.svg" height={40} />
            <Typography fontSize="1.5em">teamKills</Typography>
            <Typography fontSize="1.5em" color='warning.main'>{stats.teamKills}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <img src="src/assets/DBNO.png" height={40} />
            <Typography fontSize="1.5em">Knockouted Players</Typography>
            <Typography fontSize="1.5em" color='warning.main'>{stats.dBNOs}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <img src="src/assets/head.svg" height={40} />
            <Typography fontSize="1.5em">headshot</Typography>
            <Typography fontSize="1.5em" color='warning.main'>{stats.headshotKills}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <img src="src/assets/handshake-simple-solid.svg" height={40} />
            <Typography fontSize="1.5em">assists</Typography>
            <Typography fontSize="1.5em" color='warning.main'>{stats.assists}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            <img src="src/assets/explosion-solid.svg" height={40} />{" "}
            <Typography fontSize="1.5em">Avg damageDealt</Typography>
            <Typography fontSize="1.5em" color='warning.main'>
              {(stats.damageDealt / stats.roundsPlayed).toFixed(0)}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <img
              src="src/assets/bow-and-arrow.svg"
              height={40}
              style={{ transform: "rotate(90deg)" }}
            />
            <Typography fontSize="1.5em">longestKill</Typography>
            <Typography fontSize="1.5em" color='warning.main'>{stats.longestKill.toFixed()} m</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <img src="src/assets/ranking-star-solid.svg" height={40} />
            <Typography fontSize="1.5em">top10s</Typography>
            <Typography fontSize="1.5em" color='warning.main'>{stats.top10s}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <img src="src/assets/car-side-solid.svg" height={40} />
            <Typography fontSize="1.5em">rideDistance</Typography>
            <Typography fontSize="1.5em" color='warning.main'>{(stats.rideDistance / 1000).toFixed()} km</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <img src="src/assets/run.svg" height={40} />
            <Typography fontSize="1.5em">walkDistance</Typography>
            <Typography fontSize="1.5em" color='warning.main'>{(stats.walkDistance / 1000).toFixed()} km</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <img src="src/assets/heart-pulse-fill.svg" height={40} />
            <Typography fontSize="1.5em">Reanimations</Typography>
            <Typography fontSize="1.5em" color='warning.main'>{stats.revives}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            {" "}
            <img src="src/assets/gamepad.svg" height={40} />
            <Typography fontSize="1.5em">Rounds Played</Typography>{" "}
            <Typography fontSize="1.5em" color='warning.main'>{stats.roundsPlayed}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          // sx={{ bgcolor: "grey.800", border: "1px solid tomato" }}
          xs={5}
          md={3}
          p={1}
          margin={1}
        >
          <Box>
            <img src="src/assets/Vehicle_Explosion.png" height={40} />
            <Typography fontSize="1.5em">Vehicle Destroys</Typography>
            <Typography fontSize="1.5em" color='warning.main'> {stats.vehicleDestroys}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
