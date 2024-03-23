import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <AppBar position="static" style={{ backgroundColor: "black",minHeight:"127px" }}>
      <Toolbar>
        <Typography variant="body1" color="inherit" sx={{ textAlign: "center", width: "100%" ,margin:"50px"}}>
          Copyright © Your Website 2024
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
