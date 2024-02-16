import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RankedDetails from "./RankedDetails";
import Error from "./Error";

export default function RankedStats(seasonsList) {
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;
  const { accountIdParam } = useParams();
  const { platformParam } = useParams();
  const [error, setError] = useState("");
  const [rankedSeason, setRankedSeason] = useState("");
  let pcSeason = seasonsList.seasonsList
    .filter((el) => el.id.includes("pc"))
    .toSpliced(0, 6);
  let consoleSeason = seasonsList.seasonsList
    .filter((el) => el.id.includes("console"))
    .toSpliced(0, 4);
  const [rankedStats, setRankedStats] = useState(null);
  const [rankedDetails, setRankedDetails] = useState(false);
  const [rankedGameMode, setRankedGameMode] = useState([]);
  const [gameMode, setGameMode] = useState("");

  useEffect(() => {
    fetch(
      `https://api.pubg.com/shards/${platformParam}/players/${accountIdParam}/seasons/${rankedSeason}/ranked`,
      {
        headers: {
          Authorization: `Bearer ${pubgKey}`,
          Accept: "application/vnd.api+json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return {
          error: response.status,
        };
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setError("");
          setRankedStats(data.data);
          setRankedGameMode(
            Object.keys(data.data.attributes.rankedGameModeStats)
          );
          console.log("rankedStats", data.data);
        }
      });
  }, [accountIdParam, error, platformParam, pubgKey, rankedSeason]);

  const switchRankedSeason = (e) => {
    e.preventDefault();
    setRankedSeason(e.target.value);
  };

  return (
    <>
      <Grid
        container
        bgcolor="grey.900"
        justifyContent="space-around"
        p={4}
        sx={{ borderRadius: "16px", opacity: 0.9,  border:"1px solid", borderColor:"error.main" }}
        color="white"
      >
        <Grid item xs={4} md={1.6} p={1}>
          <TextField
            value={rankedSeason}
            onChange={switchRankedSeason}
            fullWidth
            tabIndex={0}
            aria-controls="2px"
            size="small"
            select
            color="warning"
            sx={{ bgcolor: "white", borderRadius: "6px", padding: "0px" }}
          >
            {platformParam === "steam" || platformParam === "kakao"
              ? pcSeason.map((el, idx) => {
                  return (
                    <MenuItem key={el.id} value={el.id}>
                      Season {idx + 7}
                    </MenuItem>
                  );
                })
              : consoleSeason.map((el, idx) => {
                  return (
                    <MenuItem key={el.id} value={el.id}>
                      Season {idx + 7}
                    </MenuItem>
                  );
                })}
          </TextField>
        </Grid>

        {rankedGameMode.length > 0
          ? rankedGameMode.map((modeName, idx) => (
              <Grid item xs={4} md={2} key={idx} p={1}>
                <Button
                  onClick={() => {
                    setRankedDetails(true);
                    setGameMode(modeName);
                  }}
                  sx={{
                    padding: 0,
                    minHeight: 40,
                    width: "100%",
                    "&:focus": { bgcolor: "error.main" },
                  }}
                  size="large"
                  variant="contained"
                >
                  {modeName}
                </Button>
              </Grid>
            ))
          : error === 429
          ? "Serwer busy, try again in a minute"
          : "You have no rank stats in this season"}
        {rankedDetails ? (
          <RankedDetails
            stats={rankedStats.attributes.rankedGameModeStats[gameMode]}
          />
        ) : (
          ""
        )}
      </Grid>
    </>
  );
}
