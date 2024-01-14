import React, { useEffect, useState } from "react";

import { Stack, TextField, Typography, Button, Box, Grid } from "@mui/material";
import GameModeStats from "./GameModeStats";
import { useParams, useNavigate } from "react-router-dom";

export default function LifetimeStats() {
  const [playerLifetime, setPlayerLifetime] = useState(null);
  const [error, setError] = useState("");
  const [gameMode, setGameMode] = useState("solo");
  const stats = playerLifetime.attributes.gameModeStats[gameMode] //to chce przekazac do GameMOdeStats
  const { accountIdParam } = useParams();
  const { platformParam } = useParams();
  const navigate = useNavigate();
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
    accountIdParam && platformParam;
    fetch(
      `https://api.pubg.com/shards/${platformParam}/players/${accountIdParam}/seasons/lifetime`,
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
  }, [accountIdParam, error, pubgKey, platformParam]);

  return (
    <Stack width="100%">
      <Typography color="white" fontSize="2em" p={1}>
        Lifetime Stats
      </Typography>

      <Grid container>
        {buttonsGameMode.map((modeName, idx) => (
          <Grid item xs={4} md={2} key={idx} p={1}>
            <Button
              sx={{ padding: 0, width: "100%" }}
              size="medium"
              variant="contained"
              onClick={() => {
                setGameMode(`${modeName}`);
                navigate(`${modeName}`);
              }}
            >
              {modeName}
            </Button>
          </Grid>
        ))}
      </Grid>
      {/* {playerLifetime ? (
        <GameModeStats
          stats={playerLifetime.attributes.gameModeStats[gameMode]}
        />
      ) : (
        "nie udało sie"
      )} */}
    </Stack>
  );
}
