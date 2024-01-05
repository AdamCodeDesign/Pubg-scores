import React, { useEffect, useState } from "react";

export default function Season() {
  const [playerLifetime, setPlayerLifetime] = useState([]);
  const [error, setError] = useState("");
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;

  useEffect(() => {
    fetch(
      `https://api.pubg.com/shards/steam/players/account.61a88fdd49e641408d15e6210e6db699/seasons/division.bro.official.pc-2018-27`,
    // `https://api.pubg.com/shards/steam/seasons`,
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
          setPlayerLifetime(data);
          console.log("Season",data);
        }
      });
  }, []);


  return <div></div>;
}
