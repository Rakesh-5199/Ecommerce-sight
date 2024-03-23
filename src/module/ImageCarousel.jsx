import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const items = [
    {
        src: 'https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/dc51b9d580d590f8.jpg?q=50',
        alt: 'Image 1'
    },
    {
        src: 'https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/1448059a7af51ac2.jpg?q=50',
        alt: 'Image 2'
    },
    {
        src: 'https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/307385f53e92ba29.jpg?q=50',
        alt: 'Image 3'
    }
];

const ImageCarousel = () => {
    return (
        <Carousel>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </Carousel>
    );
};

const Item = ({ item }) => {
    return (
        <Paper>
            <img src={item.src} alt={item.alt} style={{ width: '100%' }} />
        </Paper>
    );
};

export default ImageCarousel;
