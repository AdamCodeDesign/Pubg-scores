import TextField from "@mui/material/TextField";
// import { ColorTheme } from "../Themes/ColorTheme";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Browser() {
  return (
    <>
      <Typography component="div" variant="body1">
        {/* <Box sx={{ color: "info.main" }}>info.main</Box> */}
        <Box
          sx={{
            color: "primary",
            width: 600,
            maxWidth: "100%",
          }}
        >
          <TextField fullWidth id="fullWidth" placeholder = "PUBG player name" InputProps={{sx:{color:"gray"}}}/>
        </Box>
      </Typography>
    </>
  );
}
