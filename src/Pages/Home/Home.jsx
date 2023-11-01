import React, { useState } from 'react';
import HeroList from '../../Components/HeroList';
import './Home.css';

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className="home">
      <h1>Lista de Heróis</h1>
      <HeroList />
      {showScrollButton && (
        <button className="scroll-button" onClick={handleScrollToBottom}>
        botao de batalha
        </button>
      )}
    </div>
  );
}

export default Home;
