// src/HeroContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const HeroContext = createContext();

export function useHeroContext() {
  return useContext(HeroContext);
}

export function HeroProvider({ children }) {
  const [heroes, setHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  useEffect(() => {

    async function fetchHeroes() {
      try {
        const response = await fetch(
          'http://homologacao3.azapfy.com.br/api/ps/metahumans'
        );
        const data = await response.json();
        setHeroes(data);
      } catch (error) {
      }
    }

    fetchHeroes();
  }, []);

  return (
    <HeroContext.Provider value={{ heroes, selectedHeroes, setSelectedHeroes }}>
      {children}
    </HeroContext.Provider>
  );
}
