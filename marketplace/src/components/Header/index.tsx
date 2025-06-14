import { Box, Divider, Typography, Grid } from "@mui/material";
import React from "react";

type HeaderProps = {
    title: string;
    description: string;
    element?: React.ReactNode | null;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ title, description, element }) => {
    return (
        <div>
            <Box sx={{ width: "100%", height: "350px" }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ height: "100%" }}
            >
                <Grid>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ height: "100%" }}
                    >
                        <Grid>
                            <Typography variant="h1">{title}</Typography>
                        </Grid>
                        <Grid sx={{ mt: 2 }}>
                            <Typography>{description}</Typography>
                        </Grid>
                        {element !== undefined && <Grid sx={{ mt: 4, width:"100%" }}>{element}</Grid>}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Divider />
        </div>
    );
};
