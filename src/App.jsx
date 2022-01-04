import React from "react";
import MainAppBar from "./components/MainAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./screens/Home";
const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <MainAppBar />
      <Home />
    </div>
  );
};

export default App;
