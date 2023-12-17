import React, { useEffect, useState } from "react";

export default function Matches() {
  const [match, setMatch] = useState([]);
  const [error, setError] = useState("");
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;


  useEffect(() => {
    fetch(
      "https://api.pubg.com/shards/steam/matches/b57efe41-dc17-4f55-82c1-c1f87596e143",
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
          setMatch(data);
          console.log("Matches",data);
        }
      });
  }, []);


  return <div></div>;
}
