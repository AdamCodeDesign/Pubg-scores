import React, { useEffect, useState } from "react";

import {
  Stack,
  TextField,
  Typography,
  Button,
  Box,
  Grid,
  Avatar,
  MenuItem,
} from "@mui/material";
import GameModeStats from "./GameModeStats";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import RankedStats from "./RankedStats";

export default function LifetimeStats() {
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;
  const [playerLifetime, setPlayerLifetime] = useState(null);
  const [error, setError] = useState("");
  const [gameMode, setGameMode] = useState("solo");
  const { accountIdParam } = useParams();
  const { platformParam } = useParams();
  const location = useLocation();
  const [avatarName, setAvatarName] = useState("");
  const [seasonsList, setSeasonsList] = useState([]);
  const [consoleSeason, setConsoleSeason] = useState([]);
  const [pcSeason, setPcSeason] = useState([]);
  const [season, setSeason] = useState("lifetime");
  const [rankedStats, setRankedStats] = useState(null);
  // const [ranked, setRanked] = useState(false);
  const buttonsGameMode = [
    "solo",
    "duo",
    "squad",
    "solo-fpp",
    "duo-fpp",
    "squad-fpp",
  ];

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
    accountIdParam && platformParam;
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
  }, [accountIdParam, error, pubgKey, platformParam, location.state, season]);

  const handleClick = () => {
    fetch(
      `https://api.pubg.com/shards/${platformParam}/players/${accountIdParam}/seasons/${season}/ranked`,
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
          setRankedStats(data.data);
          console.log("rankedStatsOnclick", data.data);
          // setRanked(true);
        }
      });
  };

  const switchSeason = (e) => {
    e.preventDefault();
    setSeason(e.target.value);
  };

  console.log("rankedStats", rankedStats);

  return (
    <Stack width="100%">
      <Grid item md={3} xs={12} p={1}>
        <TextField
          value={season}
          onChange={switchSeason}
          select
          label={season}
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
          {" "}
          <MenuItem value="lifetime">Lifetime</MenuItem>
          {(platformParam === "steam") | "kakao"
            ? pcSeason.map((el, idx) => {
                return (
                  <MenuItem key={idx} value={el.id}>
                    Season {idx + 1}
                  </MenuItem>
                );
              })
            : consoleSeason.map((el, idx) => {
                return (
                  <MenuItem key={idx} value={el.id}>
                    Season {idx + 3}
                  </MenuItem>
                );
              })}
        </TextField>
      </Grid>

      <Grid container>
        {buttonsGameMode.map((modeName, idx) => (
          <Grid item xs={4} md={2} key={idx} p={1}>
            <Button
              color="warning"
              sx={{
                padding: 0,
                width: "100%",
                "&:focus": { bgcolor: "error.main" },
              }}
              size="medium"
              variant="contained"
              onClick={() => setGameMode(`${modeName}`)}
            >
              {modeName}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        {buttonsGameMode.map((modeName, idx) => (
          <Grid item xs={4} md={2} key={idx} p={1}>
            <Button
              sx={{
                padding: 0,
                width: "100%",
                "&:focus": { bgcolor: "error.main" },
              }}
              size="medium"
              variant="contained"
              onClick={() => {
                setGameMode(`${modeName}`);
                handleClick();
              }}
            >
              {modeName} Rank
            </Button>
          </Grid>
        ))}
      </Grid>
      {playerLifetime ? (
        <GameModeStats
          stats={playerLifetime.attributes.gameModeStats[gameMode]}
        />
      ) : (
        "nie udało sie"
      )}
      {rankedStats ? (
        <RankedStats
          stats={rankedStats.attributes.rankedGameModeStats[gameMode]}
        />
      ) : (
        "nie udało sie"
      )}
    </Stack>
  );
}
