import React, { useEffect, useState } from "react";

import { Stack, TextField, Typography, Button, Box, Grid } from "@mui/material";
import GameModeStats from "./GameModeStats";

export default function LifetimeStats({ accountId, platform }) {
  const [playerLifetime, setPlayerLifetime] = useState(null);
  const [error, setError] = useState("");
  const [gameMode, setGameMode] = useState("fpp");
  const buttonsGameMode = [
    "solo",
    "duo",
    "squad",
    "solo-fpp",
    "duo-fpp",
    "squad-fpp",
  ];
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;

  useEffect(() => {
    accountId &&
      fetch(
        `https://api.pubg.com/shards/${platform}/players/${accountId}/seasons/lifetime`,
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
            setPlayerLifetime(data.data);
            console.log("LifetimeStats", data);
          }
        });
  }, [accountId, error, pubgKey, platform]);

  return (
    <Stack width="100%">
      <Typography color="white" fontSize="2em" p={1}>
        Lifetime Stats
      </Typography>

      <Grid container >
        {buttonsGameMode.map((modeName, idx) => (
          <Grid item xs={4} md={2} key={idx} p={1}>
            <Button sx={{padding:0, width:"100%"}}
            
            size = "medium"
              variant="contained"
              onClick={() => setGameMode(`${modeName}`)}
            >
              {modeName}
            </Button>
          </Grid>
        ))}
      </Grid>
      {playerLifetime ? (
        <GameModeStats
          stats={playerLifetime.attributes.gameModeStats[gameMode]}
        />
      ) : (
        "nie udało sie"
      )}
    </Stack>
  );
}
