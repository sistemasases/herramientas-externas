import React, { useState } from 'react';
import { Tooltip, Typography, Box, Link, Stack, Modal, Popover, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';
import TableInfoTematica from '../TableInfoTematica/TableInfoTematica';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }}
    placement="top"
    PopperProps={{ style: { zIndex: 1000 } }}
    slotProps={{
      popper: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -14],
            },
          },
        ],
      },
    }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: 'red',
    padding: '16px',
    borderRadius: '8px',
    maxHeight: '300px',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
    width: 'auto',
  },
});

const CustomPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPopover-paper': {
    backgroundColor: 'red',
    padding: '16px',
    borderRadius: '8px',
    maxHeight: '300px',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
    width: 'auto',
    color: 'white',
  },
}));

function create_text_hover(json = [], name = '', handleClose) {
  let text_hover = [];
  let data;

  if (name !== "ROMPEHIELO") {
    data = json.filter((item) => item.Tematica === name);
  } else {
    data = json;
  }

  data.forEach((item) => {
    text_hover.push(
      <Link
        color="inherit"
        href={item.enlace_actividad}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClose}
        key={item.Codigo}
      >
        {item.Codigo}-{item.Nombre}
      </Link>
    );
  });

  return text_hover;
}

export default function TooltipWithContent(props) {
  const { properties, children } = props;
  const props_data = properties;

  const [openTooltip, setOpenTooltip] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleTooltipOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenTooltip(true);
  };
  const handleTooltipClose = () => {
    setAnchorEl(null);
    setOpenTooltip(false);
  };

  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const isMobile = useMediaQuery('(max-width:600px)');

  const filteredProperties = props_data.name === 'ROMPEHIELO' 
    ? props_data.json 
    : props_data.json.filter(item => item.Tematica === props_data.name);

  const popoverContent = (
    <Box className='container-items-hover'>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          color: 'black',
          backgroundColor: '#ffb846',
          borderRadius: '10px',
          padding: '10px',
          marginBottom: '10px',
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer'
        }}
        onClick={handleModalOpen}
      >
        <Typography variant='subtitle1'>{props_data.name}</Typography>
        <LaunchIcon />
      </Stack>
      <Box className='content-tematicas'>
        {create_text_hover(props_data.json, props_data.name, handleTooltipClose).map((item, index) => (
          <Typography sx={{ p: 0.5 }} key={index} variant="body2">{item}</Typography>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box>
      {isMobile ? (
        <Box onClick={handleTooltipOpen}>
          {children}
        </Box>
      ) : (
        <CustomTooltip title={popoverContent}>
          {children}
        </CustomTooltip>
      )}
      <CustomPopover
        open={openTooltip}
        anchorEl={anchorEl}
        onClose={handleTooltipClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        disableScrollLock
      >
        {popoverContent}
      </CustomPopover>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <TableInfoTematica
            properties={filteredProperties}
            open={openModal}
            handleClose={handleModalClose}
          />
        </Box>
      </Modal>
    </Box>
  );
}
