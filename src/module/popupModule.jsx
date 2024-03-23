import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import toast, { Toaster } from 'react-hot-toast';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

export default function BasicModal({ open, handleClose, cartvalue, settempdata }) {
    const [tempvalue, settempvalue] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = () => {
        const total = cartvalue.reduce((acc, item) => {
            // Remove commas from rate and convert it to a number
            const rate = Number(item.rate.replace(',', ''));
            return acc + rate;
        }, 0);

        // Set the total price in state
        setTotalPrice(total);
    };
    useEffect(() => {
        settempvalue(cartvalue)
        calculateTotalPrice()

    }, [cartvalue])

    const handleDelete = (item) => {
        toast.error("Item Removed")
        const removed_value = tempvalue.filter((ie) => ie.id !== item.id)
        settempvalue(removed_value)
        const current_total = totalPrice - item.rate
        setTotalPrice(current_total)
    };
    useEffect(() => {
        if (tempvalue.length == 0) {
            setTotalPrice(0)

        }
        settempdata(tempvalue)

    }, [tempvalue])
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <Typography id="modal-modal-title" sx={{ textAlign: 'center' }} variant="h3" component="h2">
                        Cart
                    </Typography>
                    <Divider />

                    {tempvalue.length > 0 ? <>
                        {tempvalue.length > 0 && (
                            tempvalue.map((ie, index) => (

                                <Box key={index} sx={{
                                    flexGrow: 1,
                                    margin: '10px',
                                    border: '1px solid',
                                    borderColor: '#ccc', // Specify the border color here
                                    padding: '10px'
                                }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sx={{ display: "flex" }}>
                                            <Grid item xs={11}>
                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    {ie.tittle}
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    {ie.rate}
                                                </Typography>

                                            </Grid>
                                            <Grid>
                                                <Stack direction="row" onClick={() => handleDelete(ie)} spacing={1} sx={{ paddingTop: "6px" }}>
                                                    <IconButton aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Stack>
                                            </Grid>

                                        </Grid>



                                    </Grid>


                                </Box>

                            )))}
                    </> : <>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', margin: "10px", padding: "10px", textAlign: 'center' }}>
                            <Typography id="modal-modal-description" variant="h5">No Items in Cart</Typography>

                            <Button variant="contained" onClick={handleClose}>close</Button>
                        </Grid>

                    </>}
                    <Divider />

                    <Typography id="modal-modal-title" sx={{ textAlign: 'end' }} variant="h3" component="h2">
                        {`Total ₹ ${totalPrice}`}
                    </Typography>


                </Box>
            </Modal>
        </div>
    );
}

