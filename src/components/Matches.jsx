import  { useEffect, useState } from "react";


export default function Matches({recent10games, platform}) {
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;
  const [error, setError] = useState("");

  useEffect(() => {
    recent10games?.map((el,idx )=> {
    fetch(`https://api.pubg.com/shards/${platform}/matches/${el.id}`, {
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
          // console.log(`Match${idx}`, data);
        }
      });
  }, [error, pubgKey, recent10games, platform]);})
  return <div>Samples</div>;
}
