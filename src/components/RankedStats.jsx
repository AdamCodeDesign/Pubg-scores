import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RankedStats(seasonsList) {
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;
  const { accountIdParam } = useParams();
  const { platformParam } = useParams();
  const [error, setError] = useState("");
  const [rankedSeason, setRankedSeason] = useState("");
  let pcSeason = seasonsList.seasonsList.filter((el) => el.id.includes("pc"));
  let consoleSeason = seasonsList.seasonsList.filter((el) =>
    el.id.includes("console")
  );
  const [rankedStats, setRankedStats] = useState(null);
  const [rankedGameMode, setRankedGameMode] = useState([""]);

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
          error: "Cosik poszło nie tak",
        };
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setError("");
          setRankedStats(data.data);
          setRankedGameMode(Object.keys(data.data.attributes.rankedGameModeStats));
          console.log("rankedStatsOnclick", data.data);
        }
      });
  }, [accountIdParam, error, platformParam, pubgKey, rankedSeason]);

  const switchRankedSeason = (e) => {
    e.preventDefault();
    setRankedSeason(e.target.value);
  };
  return (
    <>
      <div style={{ fontSize: "3em", color: "white" }}>Działą</div>
      {/* <Box color="white">{stats.kda}</Box> */}

      <Grid container>
        <Grid>
          <TextField
            value={rankedSeason}
            onChange={switchRankedSeason}
            select
            label="SEASON"
            color="warning"
            variant="filled"
            sx={{
              width: "100%",
              color: "rgba(170,170,170,0.5)",
              bgcolor: "rgba(170,170,170,0.5)",
              fontSize: "1em",
              border: "1px solid white",
              borderRadius: "6px",
            }}
          >
            {" "}
            {platformParam === "steam" || platformParam === "kakao"
              ? pcSeason.map((el, idx) => {
                  return (
                    <MenuItem key={el.id} value={el.id}>
                      {idx + 1}
                    </MenuItem>
                  );
                })
              : consoleSeason.map((el, idx) => {
                  return (
                    <MenuItem key={el.id} value={el.id}>
                      {idx + 3}
                    </MenuItem>
                  );
                })}
          </TextField>
        </Grid>
        {rankedGameMode &&
          rankedGameMode.map((modeName, idx) => (
            <Grid item xs={4} md={2} key={idx} p={1}>
              <Button
                sx={{
                  padding: 0,
                  width: "100%",
                  "&:focus": { bgcolor: "error.main" },
                }}
                size="medium"
                variant="contained"
                // onClick={() => setRankedGameMode(`${modeName}`)}
              >
                {modeName} Rank
              </Button>
            </Grid>
          ))}
          
      </Grid>
    </>
  );
}
