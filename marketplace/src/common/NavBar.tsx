import { AppBar, Badge, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import React from "react"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../redux/hooks";

export const NavBar: React.FC<{}> = () =>{
    const navigate = useNavigate()
    const items = useAppSelector((state) => state.cartReducer)
    const [, setOpen] = React.useState<boolean>(false)

    const handleStateViewDrawer = () => {
        setOpen((state) => !state);
    };

    return (
        <Box sx= {{flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid>
                                <Typography>JoseRandoDEV</Typography>
                            </Grid>
                            <Grid>
                                <Stack direction= "row" spacing= {2}>
                                    <IconButton
                                    color="primary"
                                    onClick={() => handleStateViewDrawer()}
                                    >
                                        <Badge color="error" badgeContent={items.length}>
                                            <ShoppingCartOutlinedIcon />
                                        </Badge>
                                    </IconButton>
                                    <Button variant="contained" onClick={()=>navigate("login")}>Login</Button>
                                    <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};