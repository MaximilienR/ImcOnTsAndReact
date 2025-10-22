// NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Error.css" ;

const NotFound: React.FC = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Oups ! Page non trouvée</h2>
      <p className="notfound-text">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="notfound-button">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
