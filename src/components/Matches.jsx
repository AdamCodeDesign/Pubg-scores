import  { useEffect, useState } from "react";


export default function Matches() {
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://api.pubg.com/shards/steam/matches/b5935836-e99d-430e-9727-090bbbcc4d94`, {
      headers: {
        'Authorization': `Bearer ${pubgKey}`,
        'Accept': "application/vnd.api+json",
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
          console.log("Matches", data);
        }
      });
  }, [error, pubgKey]);
  return <div>Samples</div>;
}
