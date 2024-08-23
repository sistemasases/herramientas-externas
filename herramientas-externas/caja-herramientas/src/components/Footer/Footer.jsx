import React from "react";
import { BottomNavigation, Box, Grid, Typography, Fab } from '@mui/material';
import rompehielo from '../../assets/rompehielo.png';
import logoases from '../../assets/logo_ases.png';
import data_dimensiones from "../../json/data_dimensiones.json";
import TooltipWithContent from "../Cajaherramientas/CustomTooltip";
import AddIcon from '@mui/icons-material/Launch';
import "../../fonts.css";

const rompehielo_tematicas = data_dimensiones.filter((item) => item.Dimension === "ROMPEHIELO");

function Footer() {
    return (
        <>
            <BottomNavigation
                sx={{
                    width: "100%",
                    height: "12%",
                    backgroundColor: "#E8002D",
                    position: {
                        xs: 'static',
                        sm: 'static',
                        md: 'fixed',
                    },
                    display: { xs: 'table-column', sm: 'flex' },
                    bottom: 0,
                    zIndex: 1000,
                    overflow: 'hidden',
                }}
            >
                <TooltipWithContent properties={{ name: "ROMPEHIELO", json: rompehielo_tematicas }}>
                    <Box sx={{
                        position: "relative",
                        width: "0",
                        height: "0",
                        zIndex: 2000,
                        display: { xs: 'none', md: 'none', lg: 'block' }
                    }}>
                        <img
                            src={rompehielo}
                            alt="Actividades Rompehielo"
                            style={{
                                position: "fixed",
                                bottom: "0px",
                                left: "0",
                                zIndex: 2000
                            }}
                        />
                    </Box>
                </TooltipWithContent>
                <Grid
                    container
                    sx={{
                        display: "flex",
                        position: "relative",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    spacing={0}
                >
                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ color: "#fff", textAlign: "center", }}>
                            Estrategia de Acompañamiento y Seguimiento Estudiantil ASES
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: 'linear-gradient(90deg, rgba(232,0,45,1) 20%, rgba(255,255,255,1) 50%, rgba(232,0,45,1) 80%)',
                            width: "100%",
                            height: "2px",
                        }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "#fff",
                                textAlign: "center",
                                lineHeight: { xs: 0.5, md: 2 },
                                alignContent: "flex-start",
                                '& p': {
                                    display: {
                                        xs: 'block',
                                        md: 'inline'
                                    },
                                    position: 'relative',

                                    '&::after': {
                                        content: {
                                            xs: '""',
                                            md: '" | "'
                                        },
                                        display: {
                                            xs: 'none',
                                            md: 'inline'
                                        }
                                    },
                                    '&:last-child::after': {
                                        content: '""'
                                    }
                                }
                            }}
                        >
                            <p>Bajos de Biblioteca Mario Carvajal</p>
                            <p>Ciudad Universitaria Meléndez</p>
                            <p>Universidad del Valle</p>
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{
                    right: 0,
                    display: { xs: 'block', md: 'flex' },
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    marginLeft: "5%",
                    marginRight: "5%",
                    width: { xs: "100%", md: "50px" },
                }}>
                    <img
                        src={logoases}
                        alt="Logo Ases"
                        style={{ width: "200px", height: "auto", objectFit: "cover" }}
                    />
                </Box>
                <TooltipWithContent properties={{ name: "ROMPEHIELO", json: rompehielo_tematicas }}>
                    <Fab
                        variant="extended"
                        sx={{
                            display: { xs: 'flex', md: 'flex', lg: 'none' },
                            position: 'fixed',
                            bottom: '50%',
                            right: 12,
                            height: '24px',
                            transform: 'rotate(-90deg) translateY(50%)',
                            transformOrigin: 'right bottom',
                            borderRadius: '0',
                            backgroundColor: '#E8002D',
                            '&:hover': {
                                backgroundColor: '#E8002D',
                            }
                        }}
                    >
                        <AddIcon sx={{ mr: 1, color: 'white' }} />
                        <Typography variant="subtitle1" style={{ fontFamily: 'Chelsea Market, cursive', color: 'white' }}>
                            Actividades Rompehielo
                        </Typography>
                    </Fab>
                </TooltipWithContent>
            </BottomNavigation>
            
        </>
    );
}

export default Footer;
