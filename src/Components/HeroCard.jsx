import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

function HeroCard({ hero, isSelected, onSelect }) {

  const handleCheckboxChange = () => {
    onSelect(!isSelected);
  };

  return (
    <Card sx={{ maxWidth: 225, margin: 2 }}>
      <CardMedia
        component="img"
        height="350"
        image={hero.images.sm}
        alt={hero.name}
      />
      <CardContent>
        <Typography variant="h6">{hero.name}</Typography>
        <Typography>Força: {hero.powerstats.strength}</Typography>
        <label>
          <Checkbox checked={isSelected} onChange={handleCheckboxChange} />
          Selecionar
        </label>
      </CardContent>
    </Card>
  );
}

export default HeroCard;
