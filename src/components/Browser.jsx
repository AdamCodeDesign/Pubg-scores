import { Stack, TextField, Button, Avatar } from "@mui/material";
import { useState } from "react";
import PlayerStats from "./PlayerStats";
import LifetimeStats from "./LifeTimeStats";

export default function Browser() {
  const [playerName, setPlayerName] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(playerName);
  };

  return (
    <Stack spacing={22} alignItems="center">
      <Avatar variant='square' src="src/assets/PUBG_Logo_White.png" sx={{width:600, height:164}}/>
      <Stack spacing={1} direction="row" justifyContent="center">
        <TextField
          variant="filled"
          sx={{
            width: "400px",
            input: {
              color: "white",
              bgcolor: "rgba(170,170,170,0.5)",
              fontSize: "1em",
              border: '1px solid white',
              borderRadius:'6px'
            },
          }}
          color='warning'
          label="Enter player name"
          onChange={(e) => setPlayerName(e.target.value)}
        ></TextField>
        <Button variant="contained" onClick={handleChange}>
          Find
        </Button>
      </Stack>

      <Stack>
        {name && (
          <Stack>
            <PlayerStats playerName={name} />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
