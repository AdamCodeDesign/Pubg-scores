import React, { useEffect, useState } from "react";

export default function PlayerStats() {
  const [player, setPlayer] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://api.pubg.com/shards/steam/players?filter[playerNames]=the_meehow",
      {
        headers: {
          Authorization: 
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkNjAwMjQ2MC03ZTI5LTAxM2MtNWRlNC02ZTNmMGZhMTY4N2QiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNzAyNzIxNjc1LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii0xYWVlOTRmOC04ODUyLTRlYzEtYTNiNS04OGQyODUwNDhlMzIifQ.BzvR6GMxNwg3nP3MkolNMjXEDuLzXLBc8bloXixbdMc",
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
  }, []);


  return <div></div>;
}
