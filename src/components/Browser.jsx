import {
  Stack,
  TextField,
  Button,
  Avatar,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState, } from "react";
import LifetimeStats from "./LifeTimeStats";

export default function Browser() {
  const [playerName, setPlayerName] = useState("");
  const [avatarName, setAvatarName] = useState("")
  const [error, setError] = useState("");
  const [accountId, setAccountID] = useState("");
  const [platform, setPlatform] = useState("");
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;

  const handleChange = (e) => {
    e.preventDefault();
    fetch(
      `https://api.pubg.com/shards/${platform}/players?filter[playerNames]=${playerName}`,
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
          error: "WRONG PLAYER NAME OR PLATFORM",
        };
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setAvatarName(false)
          setAccountID(false)
          console.log(error);
        } else {
          setError("");
          console.log("Player", data.data);
          setAccountID(data.data.map((el) => el.id));
          setAvatarName(data.data.map((el) => el.attributes.name));
        }
      });
  };

  const switchPlatform = (e) => {
    e.preventDefault();

    setPlatform(e.target.value);
  };
console.log("playername",playerName);
console.log("platform", platform)
console.log("accountID",accountId)
  return (
    <Stack spacing={22} alignItems="center">
      <Avatar
        variant="square"
        src="src/assets/PUBG_Logo_White.png"
        sx={{ width: 600, height: 164 }}
      />
      <Stack spacing={1} direction="row" justifyContent="center">
        <TextField
          value={platform}
          onChange={switchPlatform}
          select
          label="PLATFORM"
          color="warning"
          variant="filled"
          sx={{
            width: "130px",
            input: {
              color: "white",
              bgcolor: "white",
              fontSize: "1em",
              border: "1px solid white",
              borderRadius: "6px",
            },
          }}
        >
          <MenuItem value="xbox">xbox</MenuItem>
          <MenuItem value="stadia">stadia</MenuItem>
          <MenuItem value="kakao">kakao</MenuItem>
          <MenuItem value="psn">psn</MenuItem>
          <MenuItem value="steam">steam</MenuItem>
        </TextField>
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
            if (e.key === "Enter") {
              handleChange(e);
            }
          }}
          onChange={(e) => setPlayerName(e.target.value)}
        ></TextField>
        <Button variant="contained" onClick={handleChange}>
          Find
        </Button>
      </Stack>
      {avatarName &&
      <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 96, height: 96}} />
          <Typography variant="h3" color="white" >
            {avatarName}
          </Typography>
        </Stack>}

      {(accountId && platform) ? (
        <LifetimeStats accountId={accountId} platform={platform}/>
      ) : (
        <Typography variant="h2" color="red">
          {error}
        </Typography>
      )}
    </Stack>
  );
}
