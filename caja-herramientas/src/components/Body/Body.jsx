import React from "react";
import { Grid, Box, Fab } from "@mui/material";
import estanteria_1 from "../../assets/estanteria_1.png";
import estanteria_2 from "../../assets/estanteria_2.png";
import estanteria_3 from "../../assets/estanteria_3.png";
import estanteria_4 from "../../assets/estanteria_4.png";
import objeto1 from "../../assets/objeto_01.png";
import objeto2 from "../../assets/objeto_02.png";
import objeto3 from "../../assets/objeto_03.png";
import objeto4 from "../../assets/objeto_04.png";
import objeto5 from "../../assets/objeto_05.png";
import objeto6 from "../../assets/objeto_06.png";
import CajaAcademico from "../Cajaherramientas/CajaDimension";
import TableInfoTematica from "../TableInfoTematica/TableInfoTematica";
import AddIcon from '@mui/icons-material/Launch';

const arrayEstanteria = [
  { dimension: "D1 Academica", img: estanteria_2 },
  { dimension: "D4 Individual", img: estanteria_3 },
  { dimension: "D3 Familiar", img: estanteria_3 },
  { dimension: "D2 Economica", img: estanteria_4 },
  { dimension: "D5 Vida Universitaria", img: estanteria_4 },
];

const dimensionToObjectMap = {
  "D1 Academica": [objeto1, objeto2],
  "D4 Individual": [objeto3],
  "D3 Familiar": [objeto4],
  "D2 Economica": [objeto6],
  "D5 Vida Universitaria": [objeto5],
};

function Body(props) {
  const [data] = React.useState({ data_table: [] });

  return (
    <Box
      sx={{
        display: 'relative',
        justifyContent: 'center',
        alignItems: 'bottom',
        padding: '0 5% 0 5%',
        overflow: 'hidden',
      }}
    >
      <Grid
        className="grid_Estanteria"
        item
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)',
          width: "100%",
          position: "relative",
          display: "block",
          padding: "6px",
          background: "#C96F3D",
          borderRadius: "8px",
          border: "10px solid #C96F3D",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={0}
            sx={{
              clipPath: 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)',
              width: "100%",
              margin: 0,
              padding: 0
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                width: "100%",
                alignContent: "center",
                background: 'linear-gradient(45deg, #FFB845, #FFD482, #FFC45E)',
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "70%",
                    md: "50%"
                  },
                  margin: "0 auto",
                }}
              >
                <img
                  alt="Estanteria"
                  src={estanteria_1}
                  style={{ width: "100%", display: "block" }}
                />
              </Box>
            </Box>

            {arrayEstanteria.map((item, index) => (
              <Grid
                key={index}
                item
                md={item.dimension === "D1 Academica" ? 12 : 6}
                xs={12}
                sx={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  backgroundColor: "#e5e5f7",
                  opacity: 0.8,
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #444cf7, #444cf7 1px, #e5e5f7 1px, #e5e5f7)",
                  borderBottom: "10px solid #C96F3D",
                  ...(item.dimension !== "D1 Academica" && { borderLeft: "10px solid #C96F3D" }),
                  backgroundSize: "20px 20px",
                }}
              >
                {dimensionToObjectMap[item.dimension]?.map((src, idx) => (
                  <Box
                    key={idx}
                    component="img"
                    src={src}
                    sx={{
                      alignSelf: "bottom",
                      position: "absolute",
                      zIndex: "-1",
                      [idx % 2 === 0 ? 'left' : 'right']: "40px",
                      display: { xs: 'none', md: 'block' },
                    }}
                  />
                ))}
                <CajaAcademico dimensionName={item.dimension} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <TableInfoTematica properties={data.data_table} />

    </Box>
  );
}

export default Body;
