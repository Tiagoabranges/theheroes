import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import './Herocard.css';

function HeroCard({ hero, isSelected, onSelect }) {
  const handleCheckboxChange = () => {
    onSelect(!isSelected);
  };

  return (
    <Card className={`hero-card ${isSelected ? 'selected-hero-card' : ''}`}>
      <CardMedia
        component="img"
        height="350"
        image={hero.images.sm}
        alt={hero.name}
      />
      <CardContent>
        <h6>{hero.name}</h6>
        <p>Força: {hero.powerstats.strength}</p>
        <label>
          <Checkbox checked={isSelected} onChange={handleCheckboxChange} />
          Selecionar
        </label>
      </CardContent>
    </Card>
  );
}

export default HeroCard;
