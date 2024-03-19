import React, { useEffect, useState } from "react";

export default function Steam() {
  const [error, setError] = useState("");
  const steamKey = import.meta.env.VITE_APP_STEAM_KEY;

  useEffect(() => {
    fetch(
      `/steam/ISteamUser/GetPlayerSummaries/v0002/?steamids=76561197960435530`,
      {
        headers: {
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
          console.log("Steam", data);
        }
      });
  }, [error]);
  return <div>Steam</div>;
}
