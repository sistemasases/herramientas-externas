import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'; // Importa el componente Button
import CloseIcon from '@mui/icons-material/Close'; // Icono botón de cerrar
import { Link, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  maxHeight: '90vh',
  overflow: 'auto',
  borderRadius: '20px',
  textAlign: 'center',

};

const tableHeaderStyles = {
  bgcolor: '#00c1ec',
  color: 'white',
  fontSize: '1rem',
  fontFamily: 'Roboto, sans-serif',
  borderRight: '3px dashed white',
  textAlign: 'center',


};
const tableHeaderStyles2 = {
  bgcolor: '#ee0000',
  color: 'white',
  fontSize: '1rem',
  fontFamily: 'Roboto, sans-serif',
  borderRight: '3px dashed gray',
  textAlign: 'center',

};

const tableCellStyles = {
  bgcolor: '#c3edfa',
  borderRight: '3px dashed white',
  fontFamily: 'Roboto, sans-serif',
  color:'black',
  textAlign: 'center',


};
const tableCellStyles2 = {
  bgcolor: '#ffffff',
   borderRight: '3px dashed gray',
  fontFamily: 'Roboto, sans-serif',
  color:'black',
  textAlign: 'center',

};



export default function TableInfoTematica({ properties, open, handleClose }) {
  const data_info = properties;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Button 
          variant="contained" 
          onClick={handleClose}
          sx={{ 
            position: 'fixed', 
            top: '10px', 
            right: '10px',
            backgroundColor: '#00c1ec',
            color: 'white',
            zIndex: 1300,
            '&:hover': {
              backgroundColor: '#007ba7',
            }
          }}
        >
          <CloseIcon />
        </Button>
        <Box sx={style}>
          <TableContainer sx={{ maxHeight: '80vh' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={tableHeaderStyles2}>Nombre:</TableCell>
                  <TableCell sx={tableHeaderStyles2}>Descripción General:</TableCell>
                  <TableCell sx={tableHeaderStyles}>Modalidad:</TableCell>
                  <TableCell sx={tableHeaderStyles}>Dirigido a:</TableCell>
                  <TableCell sx={tableHeaderStyles}>Palabras Claves:</TableCell>
                  <TableCell sx={tableHeaderStyles}>Duración:</TableCell>
                  <TableCell sx={{...tableHeaderStyles, borderRight:'none'}}>¿Requiere Acompañamiento?</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data_info.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{...tableHeaderStyles2, bgcolor:'white', color:'black'} }>
                      <Button
                        component="button"
                        href={item.enlace_actividad}
                        target="_blank"
                        style={{
                          color:'black',
                          backgroundColor:'#c3edfa',
                          fontFamily:'Roboto, sans-serif',
                          letterSpacing: '-0.8px',
                          fontWeight: 'bold',
                          textAlign:'center',
                          }}
                      >
                        {item.Nombre}
                        <LaunchIcon sx={{color:'#6699cc', margin:'2px'}}/>
                      </Button>
                    </TableCell>
                    <TableCell sx={tableCellStyles2}>{item.descripcion_general}</TableCell>
                    <TableCell sx={tableCellStyles}>{item.Modalidad}</TableCell>
                    <TableCell sx={tableCellStyles}>{item.dirigido_a}</TableCell>
                    <TableCell sx={tableCellStyles}>{item.palabras_claves}</TableCell>
                    <TableCell sx={tableCellStyles}>{item.Duración}</TableCell>
                    <TableCell sx={{...tableCellStyles, borderRight:'none' }}>{item.requiere_acompanamiento}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Modal>
  );
}
