import { Box, Grid, Typography } from "@mui/material";
import chicken from '../assets/chicken-oven.svg';
import kills from '../assets/Death.png';
import allKills from '../assets/cross.svg';
import teamKills from '../assets/users-slash.svg';
import knockout from '../assets/DBNO.png';
import headshot from '../assets/head.svg';
import assists from '../assets/handshake-simple-solid.svg';
import avgDamage from '../assets/explosion-solid.svg';
import longestKill from '../assets/Death.png';
import top10 from '../assets/ranking-star-solid.svg';
import rideDistance from '../assets/car-side-solid.svg';
import walkDistance from '../assets/run.svg';
import reanimation from '../assets/heart-pulse-fill.svg';
import rounds from '../assets/gamepad.svg';
import vehicle from '../assets/Vehicle_Explosion.png';

export default function NoRankedStats({ stats }) {
  const KD = stats.kills / stats.roundsPlayed;
  return (
    <Box
      bgcolor="grey.900"
      sx={{ borderRadius: "16px", opacity:0.8}}
      color="white"
    >
      <Grid
        container
        justifyContent="space-evenly"
        textAlign="center"
        rowSpacing={2}
        my={2}
      >
        <Grid item xs={10} md={10} p={1} margin={2}>
          <Box>
            <Typography
              sx={{ color: "warning.main", paddingTop: 2, fontSize: "2em" }}
            >
              WINNER WINNER CHICKEN DINNER
            </Typography>
            <img src={chicken} height={100} />
            <Typography fontSize="4em" color="#76ff03">
              {stats.wins}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1} justifyContent="center" >
          <Box>
            <img src={kills} height={40} />
            <Typography fontSize="1.5em">Avg kills/game</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {KD.toFixed(2)}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <Box width="80%" margin="0 auto">
              <img src={allKills} height={30} />
              <img src={allKills} height={40} />
              <img src={allKills} height={30} />
            </Box>
            <Typography fontSize="1.5em"> All kills</Typography>{" "}
            <Typography fontSize="1.5em" color="warning.main">
              {stats.kills}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <Box margin="0 auto">
              <img src={kills} height={30} />
              <img src={kills} height={40} />
              <img src={kills} height={30} />
            </Box>
            <Typography fontSize="1.5em">roundMostKills</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {stats.roundMostKills}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <img src={teamKills} height={40} />
            <Typography fontSize="1.5em">teamKills</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {stats.teamKills}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <img src={knockout} height={40} />
            <Typography fontSize="1.5em">Knockouted Players</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {stats.dBNOs}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <img src={headshot} height={40} />
            <Typography fontSize="1.5em">headshot kills</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {stats.headshotKills}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <img src={assists} height={40} />
            <Typography fontSize="1.5em">assists</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {stats.assists}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            <img src={avgDamage} height={40} />{" "}
            <Typography fontSize="1.5em">Avg damageDealt</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {(stats.damageDealt / stats.roundsPlayed).toFixed(0)}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <img
              src={longestKill}
              height={40}
              style={{ transform: "rotate(90deg)" }}
            />
            <Typography fontSize="1.5em">longestKill</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {stats.longestKill.toFixed()} m
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <img src={top10} height={40} />
            <Typography fontSize="1.5em">top10s</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {stats.top10s}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <img src={rideDistance} height={40} />
            <Typography fontSize="1.5em">rideDistance</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {(stats.rideDistance / 1000).toFixed()} km
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <img src={walkDistance} height={40} />
            <Typography fontSize="1.5em">walkDistance</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {(stats.walkDistance / 1000).toFixed()} km
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <img src={reanimation} height={40} />
            <Typography fontSize="1.5em">Reanimations</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {stats.revives}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            {" "}
            <img src={rounds} height={40} />
            <Typography fontSize="1.5em">Rounds Played</Typography>{" "}
            <Typography fontSize="1.5em" color="warning.main">
              {stats.roundsPlayed}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} md={3} p={1} margin={1}>
          <Box>
            <img src={vehicle} height={40} />
            <Typography fontSize="1.5em">Vehicle Destroys</Typography>
            <Typography fontSize="1.5em" color="warning.main">
              {" "}
              {stats.vehicleDestroys}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
