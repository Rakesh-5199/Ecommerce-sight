import * as React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MediaCard from "./Card";
import Data from './data.json';
import ImageCarousel from "./ImageCarousel";


export default function Main({ onChangefun }) {
    return (
        <Box sx={{ flexGrow: 1, margin: '10px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box>
                        <ImageCarousel />
                    </Box>
                </Grid>
                {/* {  main Grid} */}
                <Grid item xs={12} sx={{ padding: "10px", margin: "5px" }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {
                            Data.map((ie, index) => (
                                (index + 1 >= 0 && index + 1 <= 4) ? (
                                    <MediaCard
                                        key={ie.id}
                                        id={ie.id}
                                        tittle={ie.productName}
                                        img={ie.src}
                                        rate={ie.rate}
                                        rateing={ie.rateing}
                                        onChange={onChangefun}
                                    />
                                ) : null
                            ))
                        }
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px", margin: "5px" }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {
                            Data.map((ie, index) => (
                                (index + 1 >= 5 && index + 1 <= 8) ? (
                                    <MediaCard
                                        key={ie.id}
                                        tittle={ie.productName}
                                        img={ie.src}
                                        rate={ie.rate}
                                        id={ie.id}
                                        rateing={ie.rateing}
                                        onChange={onChangefun}
                                    />
                                ) : null
                            ))
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
