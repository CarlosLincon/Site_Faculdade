import Box from '@mui/material/Box';
import img from "./Images/banner-site-epo.png"
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "600px",
    width: "90vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
 
};

const styleIMG = {
    width:"100%",
    height: "100%"
}

export default function JanelaModal() {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                   <img style={styleIMG} src={img} alt="Inscrições para o Vestibular" />
                </Box>
            </Modal>
        </div>
    )

}