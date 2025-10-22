// Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // On importe le fichier CSS

const Home: React.FC = () => (
  <>
    <h1>Bienvenue sur le Calculateur IMC</h1>
    <p>Calculez votre IMC et suivez vos résultats facilement.</p>
    <div >
      <Link to="/imc" className="btn btn-green">
        Calculer mon IMC
      </Link>
      <Link to="/history" className="btn btn-blue">
        Voir l'historique
      </Link>
    </div>
  </>
);

export default Home;
