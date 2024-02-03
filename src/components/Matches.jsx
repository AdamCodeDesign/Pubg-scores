import React, { useEffect, useState } from "react";
// import { gzip } from 'pako';


export default function Matches() {
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://telemetry-cdn.pubg.com/pc-krjp/2018/01/01/0/0/38641b16-b7a4-11ee-9a11-e6b049fbe2eb-telemetry.json`, {
      headers: {
        'Authorization': `Bearer ${pubgKey}`,
        'Accept': "application/vnd.api+json",
        'Accept-Encoding': 'gzip'
      },
      // body: gzip(JSON.stringify(payload))
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
