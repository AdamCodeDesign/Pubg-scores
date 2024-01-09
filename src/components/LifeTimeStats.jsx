import React, { useEffect, useState } from "react";

import {
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";

export default function LifetimeStats({ accountId, platform }) {
  const [playerLifetime, setPlayerLifetime] = useState(null);
  const [error, setError] = useState("");
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

  function modeGame(){
    return <div style={{color:"white", fontSize:30}}>działam</div>
  }

  return (
    <>
      <Stack spacing={4}>
        <Typography color="white" fontSize="2em">
          Lifetime Stats
        </Typography>
        {modeGame()}
        {/* <div style={{color:"white", fontSize:30}}>to jest mode game--- {playerLifetime.map(el =>el.attributes.map(el => el.gameModeStats.map(el => el.duo.assists)))}</div> */}
        {playerLifetime &&
        <div style={{color:"white", fontSize:30}}>to jest mode game--- {playerLifetime.attributes.gameModeStats['duo'].kills}</div>}
      </Stack>
    </>
  );
}
