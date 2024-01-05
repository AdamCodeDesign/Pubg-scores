import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import PlayerStats from "./PlayerStats";
import LifetimeStats from "./LifeTimeStats";

export default function Browser() {
  const [playerName, setPlayerName] = useState(null);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(playerName);
  };

  return (
    <Stack spacing={10} alignItems='center'>
      <Stack spacing={1} direction='row' justifyContent='center'>
        <TextField
        sx={{width:'300px'}}
          label="Player name"
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
