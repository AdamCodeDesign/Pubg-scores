import React, { useEffect, useState } from "react";
import { Stack, Avatar, TextField, Typography } from "@mui/material";

export default function LifetimeStats({ accountId, playerName }) {
  const [playerLifetime, setPlayerLifetime] = useState([]);
  const [error, setError] = useState("");
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;

  useEffect(() => {
    accountId &&
      fetch(
        `https://api.pubg.com/shards/steam/players/${accountId}/seasons/lifetime`,
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
            setPlayerLifetime(data);
            console.log("LifetimeStats", data);
          }
        });
  }, [accountId, error, pubgKey]);

  return (
    <Stack spacing={4}>
      <Stack direction="row" alignItems='center' spacing={1}>
        <Avatar sx={{width:96, height:96}}/><Typography variant='h3' color="white">{playerName}</Typography>
      </Stack>
    </Stack>
  );
}
