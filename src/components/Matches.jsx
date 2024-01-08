import { TableCell, TableRow } from "@mui/material";
import  { useEffect, useState } from "react";

export default function Matches() {
  const [match, setMatch] = useState([]);
  const [error, setError] = useState("");
  const pubgKey = import.meta.env.VITE_APP_PUBG_KEY;

  useEffect(() => {
    fetch(
      "https://api.pubg.com/shards/steam/matches/6ea6f8f6-b25d-4531-9566-7ee8c1367f45",
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
          setMatch(data.included);
          console.log("Matches", data.included);
        }
      });
  }, [error, pubgKey]);

  const participant = match?.filter((el) => el.type === "participant");

  return (
    <>
      {participant.map((el, idx) => (
        <TableRow key={idx}>
          <TableCell>{idx + 1} </TableCell>
          <TableCell>{el.attributes.stats.name}</TableCell>{" "}
          <TableCell>{el.attributes.stats.kills}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
