import React from "react";
import { Box } from "@mui/material";
import "../css/background.css";

const BackgroundBox = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        zIndex: -1000,
        backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M0 22.5h30v15H0zm15-15h30v15H15m-30-15h30v15h-30zm15-15h30v15H0z' stroke-width='1.5' stroke='hsla(259, 0%, 88%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "4px",
          height: "100%",
          backgroundColor: "#cc9c69", // Cambiado el color de la línea
          transform: "translateX(-50%)",
        }}
        className="linea"
      />
    </Box>
  );
};

export default BackgroundBox;
