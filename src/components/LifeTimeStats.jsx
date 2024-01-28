import { useEffect, useState } from "react";

import { Stack, TextField, Button, Grid, MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";
import RankedStats from "./RankedStats";
import NoRankedStats from "./NoRankedStats";

export default function LifetimeStats() {
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;
  const [playerLifetime, setPlayerLifetime] = useState(null);
  const [error, setError] = useState("");
  const [gameMode, setGameMode] = useState("solo");
  const { accountIdParam } = useParams();
  const { platformParam } = useParams();
  const [avatarName, setAvatarName] = useState("");
  const [seasonsList, setSeasonsList] = useState([]);
  const [consoleSeason, setConsoleSeason] = useState([]);
  const [pcSeason, setPcSeason] = useState([]);
  const [season, setSeason] = useState("lifetime");
  const [rankedSeason, setRankedSeason] = useState(
    ""
  );
  const [rankedStats, setRankedStats] = useState(null);
  const [ranked, setRanked] = useState(false);
  const noRankedGameMode = [
    "solo",
    "duo",
    "squad",
    "solo-fpp",
    "duo-fpp",
    "squad-fpp",
  ];
  const [rankedGameMode, setRankedGameMode] = useState(['']);

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

    fetch(
      `https://api.pubg.com/shards/${platformParam}/players/${accountIdParam}/seasons/${rankedSeason}/ranked`,
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
          setRankedGameMode(data.data.attributes.rankedGameModeStats.keys());
          console.log("rankedStatsOnclick", data.data);
          setRanked(true);
        }
      });
  }, [accountIdParam, error, pubgKey, platformParam, season, rankedSeason]);

  const switchSeason = (e) => {
    e.preventDefault();
    setSeason(e.target.value);
  };
  const switchRankedSeason = (e) => {
    e.preventDefault();
    setRankedSeason(e.target.value);
  };

  console.log("rankedStats", rankedStats);
  console.log("rankedGameMOde", rankedGameMode);

  return (
    <Stack width="100%">
      <Grid container p={1}>
        <Grid>
          <TextField
            value={season}
            onChange={switchSeason}
            select
            label="SEASON"
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
            <MenuItem value="lifetime">Lifetime</MenuItem>{" "}
            {(platformParam === "steam") | "kakao"
              ? pcSeason.map((el, idx) => {
                  return (
                    <MenuItem key={el.id} value={el.id}>
                      {idx + 1}
                    </MenuItem>
                  );
                })
              : consoleSeason.map((el, idx) => {
                  return (
                    <MenuItem key={el.id} value={el.id}>
                      {idx + 3}
                    </MenuItem>
                  );
                })}
          </TextField>
        </Grid>

        {noRankedGameMode.map((modeName, idx) => (
          <Grid item xs={2} md={1.5} key={idx} p={1}>
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
        <Grid>
          <TextField
            value={rankedSeason}
            onChange={switchRankedSeason}
            select
            label="SEASON"
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
            {(platformParam === "steam") || platformParam === "kakao"
              ? pcSeason.map((el, idx) => {
                  return (
                    <MenuItem key={el.id} value={el.id}>
                      {idx + 1}
                    </MenuItem>
                  );
                })
              : consoleSeason.map((el, idx) => {
                  return (
                    <MenuItem key={el.id} value={el.id}>
                      {idx + 3}
                    </MenuItem>
                  );
                })}
          </TextField>
        </Grid>
        {rankedGameMode &&
          rankedGameMode.map((modeName, idx) => (
            <Grid item xs={4} md={2} key={idx} p={1}>
              <Button
                sx={{
                  padding: 0,
                  width: "100%",
                  "&:focus": { bgcolor: "error.main" },
                }}
                size="medium"
                variant="contained"
                onClick={() => setGameMode(`${modeName}`)}
              >
                {modeName} Rank
              </Button>
            </Grid>
          ))}
      </Grid>
      {!ranked ? (
        playerLifetime ? (
          <NoRankedStats
            stats={playerLifetime.attributes.gameModeStats[gameMode]}
          />
        ) : (
          "nie udało sie"
        )
      ) : rankedStats ? (
        <RankedStats
          stats={rankedStats.attributes.rankedGameModeStats["squad-fpp"]}
        />
      ) : (
        "NO data"
      )}
    </Stack>
  );
}
