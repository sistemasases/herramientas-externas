import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import TooltipWithContent from "./CustomTooltip";
import imgjs from "../ModuloImagenes/module_img";
import data_dimensiones from "../../json/data_dimensiones.json";
import "../../fonts.css";

export default function CajaAcademico({ dimensionName }) {

  
  const temasUnicos = [];
  data_dimensiones.forEach((item) => {
    if (item.Dimension === dimensionName && !temasUnicos.some((tema) => tema.Tematica === item.Tematica)) {
      temasUnicos.push(item);
    }
  });


  return (
    <Box sx={{ width: "fit-content", textAlign: "center", justifyContent: "center", margin: "0 auto", position:"relative", top: "0" }}>
      <Box display="flex" alignContent="center" position="abs" justifyContent="center" sx={{ marginBottom: 2, top: 0 }}>
        <Paper elevation={3} sx={{ padding: "5px", width: "fit-content", backgroundColor: "#BF1D1D" }}>
          <Typography variant="h6" style={{ fontFamily: 'Chelsea Market, cursive', color: 'white' }}>
            {dimensionName.substring(dimensionName.lastIndexOf(' ') + 1)}
          </Typography>
        </Paper>
      </Box>
      <Grid container columnSpacing={2} justifyContent="center" alignItems="flex-start"
      sx={{ width: "70%", margin: "0 auto" }}>
        {temasUnicos.map((item, index) => (
          <Grid item key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <TooltipWithContent properties={{ name: item.Tematica, json: data_dimensiones }}>
                <Box
                  component="img"
                  alt={item.Tematica}
                  src={imgjs[item.Codigo.split("-")[0]]}
                />
              </TooltipWithContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
