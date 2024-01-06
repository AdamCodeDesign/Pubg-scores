import { Stack, TextField, Button, Avatar , Form} from "@mui/material";
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
    <Stack spacing={10} alignItems="center">
      <Avatar src="src/assets/logo.svg" sx={{ width: 600, height: 300 }} />
      <Stack spacing={1} direction="row" justifyContent="center">
        
        <TextField
        
          variant="outlined"
          focused
          sx={{ width: "400px", bgcolor: "warning" }}
          color="warning"
          label="Player name"
          onChange={(e) => setPlayerName(e.target.value)}
          // InputProps={{color:"white"}}
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
