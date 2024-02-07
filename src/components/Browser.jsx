import {
  Stack,
  TextField,
  Button,
  MenuItem,
  Grid,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

export default function Browser() {
  const [playerName, setPlayerName] = useState("");
  const [accountId, setAccountID] = useState("");
  const [platform, setPlatform] = useState("");
  const { accountIdParam } = useParams();
  console.log("idParam", accountIdParam);
  const [error, setError] = useState("");


  const navigate = useNavigate();
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;
  const steamKey = import.meta.env.VITE_APP_STEAM_KEY;

  // useEffect(() => {
  //   fetch(`http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?appid=578080`, {
  //     // headers: {
  //     //   'Authorization': `Bearer ${steamKey}`,
  //     //   // 'Accept': "application/vnd.api+json",
  //     // },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       return {
  //         error: "Cosik poszło nie tak",
  //       };
  //     })
  //     .then((data) => {
  //       if (data.error) {
  //         setError(data.error);
  //         console.log(error);
  //       } else {
  //         setError("");
  //         console.log("Player Online", data);
  //       }
  //     });
  // }, [error, steamKey]);

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
          setAccountID(false);
          navigate(`/error/${data.error}`);
        } else {
          console.log("Player", data.data);
          setAccountID(data.data.map((el) => el.id));
          navigate(`/stats/${platform}/${data.data.map((el) => el.id)}`, {state: data.data})
        }
      });
    console.log("accountID", accountId);
    console.log("playername", playerName);
  };
 

  const switchPlatform = (e) => {
    e.preventDefault();
    setPlatform(e.target.value);
  };
  console.log("playername", playerName);
  console.log("platform", platform);
  console.log("accountID", accountId);
  return (
    <Container maxWidth="md" sx={{textAlign:'center'}}>
      <Stack spacing={10} alignItems="center" sx={{ width: "100%" , marginTop:'100px'}}>
       <NavLink to='/' style={{margin:'0 auto'}}><img
          style={{ width: "100%" }}
          src="src/assets/PUBG_Logo_White.png"
        /></NavLink>

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
                color: "rgba(170,170,170,0.5)",
                bgcolor: "rgba(170,170,170,0.5)",
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "6px",
              }}
            >
              <MenuItem value="xbox">xbox</MenuItem>
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
      </Stack>
    </Container>
  );
}
