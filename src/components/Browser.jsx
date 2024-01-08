import { Stack, TextField, Button, Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import PlayerStats from "./PlayerStats";
import LifetimeStats from "./LifeTimeStats";

export default function Browser() {
  const [playerName, setPlayerName] = useState(false);
  const [player, setPlayer] = useState([]);
  const [error, setError] = useState("");
  const [accountId, setAccountID] = useState("");
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;

  const handleChange = (e) => {
    e.preventDefault();
    fetch(
      `https://api.pubg.com/shards/steam/players?filter[playerNames]=${playerName}`,
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
          error: "WRONG PLAYER NAME",
        };
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setError("");
          setPlayer(data.data);
          console.log("Player", data.data);
          setAccountID(data.data.map((el) => el.id));
        }
      });
  };

  return (
    <Stack spacing={22} alignItems="center">
      <Avatar
        variant="square"
        src="src/assets/PUBG_Logo_White.png"
        sx={{ width: 600, height: 164 }}
      />
      <Stack spacing={1} direction="row" justifyContent="center">
        <TextField
          variant="filled"
          sx={{
            width: "400px",
            input: {
              color: "white",
              bgcolor: "rgba(170,170,170,0.5)",
              fontSize: "1em",
              border: "1px solid white",
              borderRadius: "6px",
            },
          }}
          color="warning"
          label="PLAYER NAME"
          onKeyDown={(e) => {
            if(e.key === "Enter"){handleChange(e)}
          }}
          onChange={(e) => setPlayerName(e.target.value)}
        ></TextField>
        <Button variant="contained" onClick={handleChange}>
          Find
        </Button>
      </Stack>
      {accountId && <LifetimeStats accountId={accountId} playerName={playerName} />}
    </Stack>
  );
}
