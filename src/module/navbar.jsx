import * as React from "react";
import { useState, useEffect } from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BasicModal from "./popupModule"
export default function Navbar({ cartCount, cartvalue, settempCartvalue }) {
  const [open, setOpen] = useState(false);
  const [tempvalue, settempvalue] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(tempvalue, "999999999999999")
    settempCartvalue(tempvalue)
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ fontWeight: "black", backgroundColor: "#f8f9fa", color: "black" }}
      >
        <Toolbar>
          <Grid container spacing={1} sx={{ display: "flex" }}>
            <Grid item xs={2}>
              <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
                Start Bootstarp
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Button>Home</Button>
              <Button>About</Button>
              <Button>shop</Button>
            </Grid>
            <Grid item xs={2}>
              <Badge badgeContent={cartCount} color="primary">
                <Button variant="outlined" sx={{ color: "black" }} onClick={handleOpen} startIcon={<ShoppingCartIcon />}>
                  Cart
                </Button>
              </Badge>
            </Grid>
          </Grid>
        </Toolbar>
        <BasicModal open={open} handleClose={handleClose} cartvalue={cartvalue} settempdata={settempvalue} />
      </AppBar>
    </Box>
  );
}
