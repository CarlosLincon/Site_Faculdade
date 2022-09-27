import cardapio from '../../../../data/itens.json';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import { CardActionArea, Button, ButtonGroup } from '@mui/material';

import Typography from '@mui/material/Typography';
import { Link, Route, Router } from 'react-router-dom';

const stylesLink = {
  listStyle: "none",
  textDecoration:"none"
}


type Props = typeof cardapio[0];

export default function Item(props: Props) {
  const { title, description, price, photo, year, router } = props;



  return (
    <>

      <Card sx={{ maxWidth: 345, minWidth: 345, borderRadius: "10px", padding: "10px",listStyle:"none" }}>
        <Link to={`/cursos/${router}`} style={stylesLink}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={photo}
              alt={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "nowrap", overflow: 'hidden', textOverflow: "ellipsis" }}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

            <ButtonGroup variant="outlined" color="secondary" aria-label="medium secondary button group">
              <Button size="medium" color="primary">
                R${price},00
              </Button>
              <Button size="medium" color="primary">
                Anos: {year}
              </Button>
            </ButtonGroup>
          </CardActions>
        </Link>
      </Card>
    </>
  );
}