import {
  Stack,
  TextField,
  Button,
  Avatar,
  MenuItem,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Browser() {
  const [playerName, setPlayerName] = useState("");
  const [avatarName, setAvatarName] = useState("");
  const [accountId, setAccountID] = useState("");
  const [platform, setPlatform] = useState("");
  const navigate = useNavigate();
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;

  const handleChange = () => {
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
          error: response.status,
        };
      })
      .then((data) => {
        if (data.error) {
          setAvatarName(false);
          setAccountID(false);
          navigate(`/error/${data.error}`);
        } else {
          console.log("Player", data.data);
          setAccountID(data.data.map((el) => el.id));
          setAvatarName(data.data.map((el) => el.attributes.name));
          navigate(`/stats/${platform}/${data.data.map((el) => el.id)}`);
          localStorage.setItem("platformValue", platform);
        }
      });
    console.log("accountID", accountId);
  };
  useEffect(() => {
    setPlatform(localStorage.getItem("platformValue"));
  }, []);

  const switchPlatform = (e) => {
    e.preventDefault();
    setPlatform(e.target.value);
  };
  console.log("playername", playerName);
  console.log("platform", platform);
  console.log("accountID", accountId);
  console.log("history", history);
  return (
    <Container maxWidth="md">
      <Stack spacing={10} alignItems="center" sx={{ width: "100%" }}>
        <img
          style={{ width: "80%", height: "80%" }}
          src="src/assets/PUBG_Logo_White.png"
        />

        <Grid
          container
          justifyContent="center"
          rowGap={1}
          sx={{ width: "70%" }}
        >
          <Grid item md={3} xs={12} p={1}>
            <TextField
              value={platform}
              onChange={switchPlatform}
              select
              label="PLATFORM"
              color="warning"
              variant="filled"
              sx={{
                width: "100%",
                color: "white",
                bgcolor: "rgba(170,170,170,0.5)",
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "6px",
              }}
            >
              <MenuItem value="xbox">xbox</MenuItem>
              <MenuItem value="stadia">stadia</MenuItem>
              <MenuItem value="kakao">kakao</MenuItem>
              <MenuItem value="psn">psn</MenuItem>
              <MenuItem value="steam">steam</MenuItem>
            </TextField>
          </Grid>
          <Grid item md={7} xs={12} p={1}>
            <TextField
              variant="filled"
              sx={{
                width: "100%",
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
          </Grid>
          <Grid item md={2} xs={12} p={1}>
            <Button
              variant="contained"
              sx={{ width: "100%", height: "100%" }}
              onClick={handleChange}
            >
              Find
            </Button>
          </Grid>
        </Grid>
        {avatarName && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar sx={{ width: 96, height: 96 }} />
            <Typography variant="h3" color="white">
              {avatarName}
            </Typography>
          </Stack>
        )}
      </Stack>
      <Outlet />
    </Container>
  );
}
