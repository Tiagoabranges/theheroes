import React from 'react';
import { useHeroContext } from '../../context/HeroContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import './Battle.css';

function Battle() {
  const { selectedHeroes } = useHeroContext();

  const calculateTotalStats = (hero) => {
    return (
      parseInt(hero.powerstats.intelligence) +
      parseInt(hero.powerstats.strength) +
      parseInt(hero.powerstats.speed) +
      parseInt(hero.powerstats.durability) +
      parseInt(hero.powerstats.power) +
      parseInt(hero.powerstats.combat)
    );
  };

  const hero1TotalStats = calculateTotalStats(selectedHeroes[0]);
  const hero2TotalStats = calculateTotalStats(selectedHeroes[1]);

  const handleBattle = () => {
    let result = 'A batalha terminou em empate!';
    if (hero1TotalStats > hero2TotalStats) {
      result = `${selectedHeroes[0].name} venceu a batalha!`;
    } else if (hero1TotalStats < hero2TotalStats) {
      result = `${selectedHeroes[1].name} venceu a batalha!`;
    }

    alert(result);
  };

  return (
    <div className='batle'>
      <h2>Batalha</h2>
      <div>
        <h3>Heróis Selecionados para Batalha:</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          {selectedHeroes.map((hero, index) => (
            <Card key={hero.id} sx={{ maxWidth: 225 }}>
              <CardMedia
                component="img"
                height="350"
                image={hero.images.sm}
                alt={hero.name}
              />
              <CardContent>
                <Typography variant="h6">{hero.name}</Typography>
                <Typography>
                  Inteligência: {hero.powerstats.intelligence}
                </Typography>
                <Typography>Força: {hero.powerstats.strength}</Typography>
                <Typography>Velocidade: {hero.powerstats.speed}</Typography>
                <Typography>
                  Durabilidade: {hero.powerstats.durability}
                </Typography>
                <Typography>Poder: {hero.powerstats.power}</Typography>
                <Typography>Combate: {hero.powerstats.combat}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Button variant="contained" color="primary" onClick={handleBattle}>
        Iniciar Batalha
      </Button>
        <Link to="/"> {/* Adicione um Link para a página inicial */}
          <button className="home-button">Voltar para a Home</button>
        </Link>
    </div>
  );
}

export default Battle;
