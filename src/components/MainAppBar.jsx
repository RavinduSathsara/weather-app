import React from "react";

//import Mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import IconButton from "@mui/material/IconButton";

const MainAppBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <WbSunnyIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default MainAppBar;
