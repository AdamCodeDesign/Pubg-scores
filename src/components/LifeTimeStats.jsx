import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Stack,
  Avatar,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import Stats from "./Stats";

export default function LifetimeStats({ accountId, platform}) {
  const [playerLifetime, setPlayerLifetime] = useState([]);
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
            setPlayerLifetime(data);
            console.log("LifetimeStats", data);
          }
        });
  }, [accountId, error, pubgKey, platform]);

  return (
    <>
      <Stack spacing={4}>
        <Typography color="white" fontSize="2em">Lifetime Stats</Typography>
        <Stack direction="row" spacing={2}>
          
        </Stack>
      </Stack>
    </>
  );
}
