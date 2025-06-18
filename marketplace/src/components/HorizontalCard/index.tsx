import {
    Grid,
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Divider,
    IconButton, 
    Typography
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useAppDispatch } from '../../redux/hooks';
import { removeToCart } from '../../redux/slices/cart.slice';

interface CardHorizontalComponentProps {
    id: string | number,
    image: string,
    name: string,
    info: string
}

export const HorizonalCardComponent: React.FC<CardHorizontalComponentProps> = ({
    id,
    image,
    name,
    info,
}) => {
    const dispatch = useAppDispatch();

    const handleRemoveToCart = () => {
            dispatch(
                removeToCart({id})
            );
    };
    return (
        <Card sx={{display: 'flex', my: 2}}>
            <CardMedia  
                    component="img"
                    sx={{width: 151}}
                    image={image}
                    alt="Rick and Morty"
                    />
                    <Grid container sx={{ mx: 1 }}>
                        <Grid>
                            <CardContent>
                                <Typography variant="h4">{name}</Typography>
                                <Divider />
                                <Typography variant="h6">{info}</Typography>
                            </CardContent>
                        </Grid>
                        <Grid>
                            <CardActions>
                                <IconButton onClick={handleRemoveToCart}>
                                 <CloseRoundedIcon />
                                </IconButton>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>          
    );
};