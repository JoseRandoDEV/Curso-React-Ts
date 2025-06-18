import React from "react"
import { Box, Button, CircularProgress, Container, Grid, Pagination } from "@mui/material"
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC = () => {

    const [page, setPage] = React.useState(1)
    const [count, setCount] = React.useState(0)
    const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null)
    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        setLoading(true)
        characters
            .getAll({ page })
            .then((r) => {
                setCount(r.data.info.pages)
                setAllCharacters(r.data.results);
                setTimeout(() => setLoading(false), 1800);
            })
            .catch((e) => {
                console.error(e)
            })
    }, [page])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    return (
        <Container>
            <HeaderComponent
                title="Hola Mundo"
                description="Bienvenido a JoseRandoDEV"
                element={<Button fullWidth variant="contained">Hola Mundo</Button>}
            />
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <div>
                        {allCharacters!.length !== 0 ? (
                            <Grid container spacing={2} direction="row" marginBlockStart={2}>
                                {allCharacters?.map((character) => (
                                    <Grid key={character.id} width={276}>
                                        <CardComponent
                                            image={character.image}
                                            name={character.name}
                                            species={character.species}
                                            status={character.status}
                                            id={character.id}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        ) : (
                            "No data"
                        )}
                    </div>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <Pagination
                            variant="outlined"
                            color="primary"
                            count={count}
                            page={page}
                            onChange={handleChange}
                            sx={{ mb: 3 }}
                            size="large" />
                    </Box>

                </>
            )}
        </Container>
    );
};