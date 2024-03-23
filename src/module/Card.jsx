import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import toast, { Toaster } from 'react-hot-toast';
import Rating from '@mui/material/Rating';

export default function MediaCard({ tittle, img, rate, id, rateing, onChange }) { // Destructure props here


    const HandleAdd = () => {
        toast.success('Item Added')
        const value = {
            id: id,
            tittle: tittle,
            img: img,
            rate: rate
        }
        onChange(value)
        console.log('Updated cart count:', currentCount);
    };

    return (
        <Card sx={{
            width: 500,
            minHeight: 400,
            margin: "20px",
            border: "1px solid #e4e4e4"
        }}>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <CardMedia
                sx={{ height: 200, margin: "20px" }}
                image={img}
                title="green iguana"
            />
            <CardContent sx={{ textAlign: "center", }}>
                <Typography gutterBottom variant="h5" component="div">
                    {tittle}
                </Typography>
                <Rating name="read-only" value={rateing} readOnly />
                <Typography gutterBottom variant="h6" component="div">
                    {`₹ ${rate}`}
                </Typography>
            </CardContent>
            <CardActions sx={{ color: "black", display: "flex", justifyContent: "center" }} >
                <Button variant="outlined" sx={{ color: "black", display: "flex", justifyContent: "center" }} onClick={HandleAdd}>Add to Cart</Button>
            </CardActions>
        </Card>
    );
}
