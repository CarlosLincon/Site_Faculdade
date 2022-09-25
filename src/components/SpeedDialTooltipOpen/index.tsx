
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Link as RouterLink, redirect } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import Link from '@mui/material/Link';

const actions = [
  { icon: <BsFillTelephoneFill />, name: 'Contato', color: "#000", url: "https://www.instagram.com/" },
  { icon: <FaWhatsapp />, name: 'WhatsApp', color: "#469536", url: "https://api.whatsapp.com/send?phone=557531823182" },
  { icon: <AiOutlineInstagram />, name: 'Instagram', color: "#C13584", url: "https://www.instagram.com/" },
  { icon: <AiOutlineYoutube />, name: 'Youtube', color: "#900020", url: "https://www.youtube.com/c/FaculdadeSant%C3%ADssimo" },
];

export default function OpenIconSpeedDial() {

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, operation: string) {
    e.preventDefault();
    window.location.href = operation;

  };
  let colorAtual;
  return (

    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: 'fixed', bottom: 24, right: 24 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}

    >
      {actions.map((action) => (

        colorAtual = action.color,

        <SpeedDialAction sx={{ fontSize: "1.2rem", color: colorAtual }}

          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={(e) => {
            handleClick(e, action.url)
          }}

        />

      ))}

    </SpeedDial>

  );
}
