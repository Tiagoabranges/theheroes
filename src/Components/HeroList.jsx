import React, { useState } from 'react';
import { useHeroContext } from '../context/HeroContext';
import HeroCard from './HeroCard';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

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
    <div>
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Grid container spacing={2}>
        {filteredHeroes.map((hero) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={hero.id}>
            <HeroCard
              key={hero.id}
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
        <Link to="/battle">
          <button>Batalha</button>
        </Link>
      )}
    </div>
  );
}

export default HeroList;
