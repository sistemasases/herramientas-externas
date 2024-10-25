import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import React, { useEffect } from "react";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import BackgroundBox from "./components/Body/Background";

function App() {
  useEffect(() => {
    document.title = "Caja de Herramientas";
  }, []);

  return (
    <Router basename="/">
      <Grid
        container
        sx={{
          position: "relative",
          minHeight: "100vh",
        }}
        columns={1}
      >
        <BackgroundBox />
        <Box sx={{ flex: 1, paddingBottom: "56px" }}>
          <Body />
        </Box>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        ></Box>
        <Footer />
      </Grid>
    </Router>
  );
}

export default App;
