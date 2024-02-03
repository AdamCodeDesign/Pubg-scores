import { useEffect, useState } from "react";

import {
  Stack,
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControl,
  Avatar,
  Typography,
} from "@mui/material";
import { Route, useLocation, useParams } from "react-router-dom";
import NoRankedStats from "./NoRankedStats";
import RankedStats from "./RankedStats";

export default function LifetimeStats() {
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;
  const [playerLifetime, setPlayerLifetime] = useState(null);
  const [error, setError] = useState("");
  const [gameMode, setGameMode] = useState("solo");
  const { accountIdParam } = useParams();
  const { platformParam } = useParams();
  const [seasonsList, setSeasonsList] = useState([]);
  const [consoleSeason, setConsoleSeason] = useState([]);
  const [pcSeason, setPcSeason] = useState([]);
  const [season, setSeason] = useState("lifetime");
  const [ranked, setRanked] = useState(false);
  const noRankedGameMode = [
    "solo",
    "duo",
    "squad",
    "solo-fpp",
    "duo-fpp",
    "squad-fpp",
  ];
  const location = useLocation()
  const avatarName = location.state.map(el => el.attributes.name)

  useEffect(() => {
    fetch(`https://api.pubg.com/shards/steam/seasons`, {
      headers: {
        Authorization: `Bearer ${pubgKey}`,
        Accept: "application/vnd.api+json",
      },
    })
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
          setSeasonsList(data.data);
          setConsoleSeason(data.data.filter((el) => el.id.includes("console")));
          setPcSeason(data.data.filter((el) => el.id.includes("pc")));
          console.log("Season", data.data);
        }
      });
    accountIdParam && platformParam && location;
    fetch(
      `https://api.pubg.com/shards/${platformParam}/players/${accountIdParam}/seasons/${season}`,
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
          setPlayerLifetime(data.data);
          console.log("LifetimeStats", data);
        }
      });
      console.log('location', location)
  }, [accountIdParam, error, pubgKey, platformParam, season, location]);

  const switchSeason = (e) => {
    e.preventDefault();
    setSeason(e.target.value);
  };

  return (
    <>
    {avatarName && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar sx={{ width: 96, height: 96 }} />
            <Typography variant="h3" color="white">
              {avatarName}
            </Typography>
          </Stack>
        )}
    <Stack width="100%" marginBottom={20}>
      <Grid container p={0} justifyContent="space-around" marginBottom={10}>
        <Grid item xs={4} md={1.5} p={1}>
          <TextField
            fullWidth
            tabIndex={0}
            aria-controls="2px"
            size="small"
            value={season}
            onChange={switchSeason}
            select
            color="warning"
            sx={{ bgcolor: "white", borderRadius: "6px", padding: "0px" }}
          >
            <MenuItem value="lifetime">Lifetime</MenuItem>{" "}
            {(platformParam === "steam") | "kakao"
              ? pcSeason.map((el, idx) => {
                  return (
                    <MenuItem key={el.id} value={el.id}>
                      season {idx + 1}
                    </MenuItem>
                  );
                })
              : consoleSeason.map((el, idx) => {
                  return (
                    <MenuItem key={el.id} value={el.id}>
                      season {idx + 3}
                    </MenuItem>
                  );
                })}
          </TextField>
        </Grid>

        {noRankedGameMode.map((modeName, idx) => (
          <Grid item xs={4} md={1.5} key={idx} p={1}>
            <Button
              color="warning"
              sx={{
                padding: 0,
                minHeight: 40,
                width: "100%",
                "&:focus": { bgcolor: "error.main" },
              }}
              size="large"
              variant="contained"
              onClick={() => {
                setGameMode(`${modeName}`);
                setRanked(false);
              }}
            >
              {modeName}
            </Button>
          </Grid>
        ))}
        <Grid item xs={4} md={1.5} p={1}>
          <Button
            color="error"
            variant="contained"
            size="medium"
            sx={{
              padding: 0,
              minHeight: 40,
              width: "100%",
              "&:focus": { bgcolor: "error.main" },
            }}
            onClick={() => {
              setRanked(true);
            }}
          >
            rank stats
          </Button>
        </Grid>
      </Grid>

      {playerLifetime && !ranked ? (
        <NoRankedStats
          stats={playerLifetime.attributes.gameModeStats[gameMode]}
        />
      ) : ''}

      {ranked && <RankedStats seasonsList={seasonsList} />}
    </Stack>
    </>
  );
}
