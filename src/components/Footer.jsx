import { Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className="footer">
      <Stack bgcolor='grey.900' direction='row' justifyContent='space-between' sx={{width:'100vw'}}>
        {" "}
      <Typography fontSize='0.7em'> Pubg score -  not affiliated with Krafton,Inc. , PLAYERUNKNOWN'S BATTLEGROUNDS or PUBG
        Corp</Typography>
        <Typography fontSize='0.7em'>made with love by gamer</Typography>
        <Typography fontSize='0.7em'>email: leshchudev@gmail.com</Typography>
      </Stack>
    </footer>
  );
}
