import React, { useEffect, useState } from "react";

export default function PlayerStats({playerName}) {
  const [player, setPlayer] = useState([]);
  const [error, setError] = useState("");
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;

  useEffect(() => {
    fetch(
      `https://api.pubg.com/shards/steam/players?filter[playerNames]=${playerName}`,
      {
        headers: {
          Authorization: 
            `Bearer ${pubgKey}`,
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
          console.log(error)
        } else {
          setError("");
          setPlayer(data);
          console.log("Player",data);
        }
      });
  }, [playerName]);


  return <div></div>;
}
