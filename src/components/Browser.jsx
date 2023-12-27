import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import PlayerStats from "./PlayerStats";

export default function Browser() {
  const [playerName, setPlayerName] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(playerName);
  };

  return (
    <div>
      <Stack spacing={10}>
        <Stack margin={10} direction="row">
          <TextField
            label="Player name"
            onChange={(e) => setPlayerName(e.target.value)}
          ></TextField>
          <Button variant="contained" onClick={handleChange}>
            Find
          </Button>
        </Stack>
        <PlayerStats playerName={name} />
      </Stack>
    </div>
  );
}
