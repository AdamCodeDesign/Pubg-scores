import { Box, Grid, Typography } from "@mui/material";
import Chicken from "../assets/chicken-oven.svg";
import Bronze from "../assets/rank_img/Bronze.png";
import Diamond from "../assets/rank_img/Diamond.png";
import Elite from "../assets/rank_img/Elite.png";
import Gold from "../assets/rank_img/Gold.png";
import Grandmaster from "../assets/rank_img/Grandmaster.png";
import Master from "../assets/rank_img/Master.png";
import Platinum from "../assets/rank_img/Platinum.png";
import Silver from "../assets/rank_img/Silver.png";
import Unranked from "../assets/rank_img/Unranked.png";

export default function RankedDetails({ stats }) {

  const rankImg = (rank) => {
    if (rank === "bronze"){return Bronze}
    if (rank === "silver"){return Silver}
    if (rank === "gold"){return Gold}
    if (rank === "platinum"){return Platinum}
    if (rank === "master"){return Master}
    if (rank === "grandmaster"){return Grandmaster}
    if (rank === "diamond"){return Diamond}
    if (rank === "elite"){return Elite}
    if (rank === "unranked"){return Unranked}};
  return (
    <>
      {stats ? (
        <Box bgcolor="grey.900" sx={{ borderRadius: "16px" }} color="white">
          <Grid
            container
            justifyContent="space-evenly"
            textAlign="center"
            rowSpacing={2}
            my={2}
          >
            <Grid item xs={10} md={10} p={1} margin={2}>
              <Typography sx={{ fontSize: "2em" }}>RANK STATS</Typography>
            </Grid>
            <Grid item xs={5} md={5} p={1} margin={2}>
              <Box>
                <Typography
                  sx={{ color: "warning.main", paddingTop: 2, fontSize: "2em" }}
                >
                  WINNER WINNER CHICKEN DINNER
                </Typography>
                <img src={Chicken} height={100} />
                <Typography fontSize="4em" color="#76ff03">
                  {stats.wins}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5} md={5} p={1} margin={2}>
              <Box>
                {" "}
                <img
                  src={rankImg((stats.currentTier.tier).toLowerCase())}
                  height={240}
                />
                <Typography fontSize="1.5em">Tier</Typography>{" "}
                <Typography fontSize="1.5em" color="warning.main">
                  {(stats.currentTier.tier).toLowerCase()}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5} md={3} p={1} margin={1}>
              <Box>
                <Typography fontSize="1.5em">K/D</Typography>
                <Typography fontSize="1.5em" color="warning.main">
                  {(stats.kills / stats.deaths).toFixed(2)}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5} md={3} p={1} margin={1}>
              <Box>
                <Typography fontSize="1.5em">Avg damageDealt</Typography>
                <Typography fontSize="1.5em" color="warning.main">
                  {(stats.damageDealt / stats.roundsPlayed).toFixed(0)}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={5} md={3} p={1} margin={1}>
              <Box>
                <Typography fontSize="1.5em"> All kills</Typography>{" "}
                <Typography fontSize="1.5em" color="warning.main">
                  {stats.kills}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5} md={3} p={1} margin={1}>
              <Box>
                {" "}
                <Typography fontSize="1.5em">AVG rank</Typography>
                <Typography fontSize="1.5em" color="warning.main">
                  #{Math.round(stats.avgRank)}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5} md={3} p={1} margin={1}>
              <Box>
                {" "}
                <Typography fontSize="1.5em">Win Ratio</Typography>
                <Typography fontSize="1.5em" color="warning.main">
                  {(stats.winRatio * 100).toFixed(0)}%
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5} md={3} p={1} margin={1}>
              <Box>
                {" "}
                <Typography fontSize="1.5em">Knockouted Players</Typography>
                <Typography fontSize="1.5em" color="warning.main">
                  {stats.dBNOs}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5} md={3} p={1} margin={1}>
              <Box>
                {" "}
                <Typography fontSize="1.5em">
                  Kill/Death assist ratio
                </Typography>
                <Typography fontSize="1.5em" color="warning.main">
                  {stats.kda.toFixed(2)}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5} md={3} p={1} margin={1}>
              <Box>
                {" "}
                <Typography fontSize="1.5em">assists</Typography>
                <Typography fontSize="1.5em" color="warning.main">
                  {stats.assists}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={5} md={3} p={1} margin={1}>
              <Box>
                {" "}
                <Typography fontSize="1.5em">top10s</Typography>
                <Typography fontSize="1.5em" color="warning.main">
                  {(stats.top10Ratio * 100).toFixed(0)}%
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={5} md={3} p={1} margin={1}>
              <Box>
                {" "}
                <Typography fontSize="1.5em">Rounds Played</Typography>{" "}
                <Typography fontSize="1.5em" color="warning.main">
                  {stats.roundsPlayed}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        " You have no stats in this season"
      )}
    </>
  );
}
