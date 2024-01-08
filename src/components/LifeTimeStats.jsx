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
    <>
      <Stack spacing={4}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 96, height: 96 }} />
          <Typography variant="h3" color="white">
            {playerName}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="warning">
            All
          </Button>
          <Button variant="contained" color="warning">
            Solo FPP
          </Button>
          <Button variant="contained" color="warning">
            DUO FPP
          </Button>
          <Button variant="contained" color="warning">
            Squad FPP
          </Button>
          <Button variant="contained" color="warning">
            Solo Tpp
          </Button>
          <Button variant="contained" color="warning">
            Dup Tpp
          </Button>
          <Button variant="contained" color="warning">
            Squad Tpp
          </Button>
        </Stack>
      </Stack>
      <NavLink to="/all">All</NavLink>
    </>
  );
}
