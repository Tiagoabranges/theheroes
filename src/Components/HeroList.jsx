import React, { useState } from 'react';
import { useHeroContext } from '../context/HeroContext';
import HeroCard from './HeroCard';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import './Herolist.css'; // Importe seu arquivo CSS para os estilos do HeroList

function HeroList() {
  const { heroes, selectedHeroes, setSelectedHeroes } = useHeroContext();
  const [filter, setFilter] = useState('');

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleSelectHero = (hero, isSelected) => {
    if (isSelected) {
      if (selectedHeroes.length < 2) {
        setSelectedHeroes([...selectedHeroes, hero]);
      }
    } else {
      setSelectedHeroes(
        selectedHeroes.filter((selectedHero) => selectedHero.id !== hero.id)
      );
    }
  };

  const canBattle = selectedHeroes.length === 2;

  return (
    <div className="hero-list-container">
      <TextField
        id="standard-basic"
        label="Filtrar heroi"
        variant="outlined"
        className="filter-input"
        InputProps={{
          style: { color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Grid container spacing={2} className="hero-card-container">
        {filteredHeroes.map((hero) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={hero.id}>
            <HeroCard
              hero={hero}
              isSelected={selectedHeroes.some(
                (selectedHero) => selectedHero.id === hero.id
              )}
              onSelect={(isSelected) => handleSelectHero(hero, isSelected)}
            />
          </Grid>
        ))}
      </Grid>
      {canBattle && (
        <Link to="/battle" className="battle-link">
          <button className="battle-button">Batalha</button>
        </Link>
      )}
    </div>
  );
}

export default HeroList;
