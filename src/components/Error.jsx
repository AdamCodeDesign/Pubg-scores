import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Error() {
  const { status } = useParams();
  console.log("status",status);

  return (
    <Typography variant="h2" color="red">
      {status === "429" && "Serwer down"}
      {status === "404" && "Player nie istnieje"}
    </Typography>
  );
}
