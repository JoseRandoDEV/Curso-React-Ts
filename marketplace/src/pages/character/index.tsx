import React from "react"
import { useParams } from "react-router-dom"
import { characters } from "../../api/characters"
import { ICharacter } from "./interfaces/character.interface"
import { Box, Chip, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material";

const CharacterPage: React.FC = () => {
    const { id } = useParams()
    const [loading, setLoading] = React.useState<boolean>(true)
    const [character, setCharacter] = React.useState<ICharacter | null>(null)

    React.useEffect(() => {
        characters
            .getById({ id })
            .then((r) => {
                setCharacter(r.data)
                setLoading(false)
            })
            .catch((err) => console.error(err));

    }, [id]); //puse id, en el curso no estaba, qwuedaba vacio el array
    return (
        <Box sx={{ width: "100%" }}>
            <Container maxWidth="xl">
                {
                    loading ? (
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                            <CircularProgress />
                        </Box>
                    ) :
                        <Grid sx={{mt:2}} container columnSpacing={2}>
                            <Grid>
                                <Typography variant='h1'>{character!.name}</Typography>
                                <Divider />
                                <Typography variant='h6'>{character!.origin.name}</Typography>
                                <Box sx={{mt:2}}>
                                <Chip color="primary" variant="outlined" label={character?.status} />
                                </Box>
                            </Grid>
                            <Grid  marginInlineStart={20} marginInlineEnd={1} marginBottom={10}>
                                <img alt="" src={character!.image} style={{width:"100%", borderRadius: "0.5em"}}
                                 />
                            </Grid>
                        </Grid>
                }
            </Container>
        </Box>
    );
};

export default CharacterPage