import React, { useState } from "react";
import "./Calcul.css";

const Calcul: React.FC = () => {
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculerIMC = () => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100;
    if (p > 0 && t > 0) setResult(p / (t * t));
  };

  // Fonction pour déterminer la couleur selon l'IMC
  const getIMCColor = (imc: number) => {
    if (imc < 18.5) return "orange"; // Insuffisance pondérale
    if (imc >= 18.5 && imc < 25) return "green"; // Poids normal
    if (imc >= 25 && imc < 30) return "orange"; // Surpoids
    return "red"; // Obésité
  };

  return (
    <div className="imc-container">
      <h2>Calcul IMC</h2>
      <input
        type="number"
        placeholder="Poids (kg)"
        value={poids}
        onChange={(e) => setPoids(e.target.value)}
        className="imc-input"
      />
      <input
        type="number"
        placeholder="Taille (cm)"
        value={taille}
        onChange={(e) => setTaille(e.target.value)}
        className="imc-input"
      />
      <button onClick={calculerIMC} className="imc-button">
        Calculer
      </button>
      {result !== null && (
        <p
          className="imc-result"
          style={{ color: getIMCColor(result) }}
        >
          Votre IMC est : {result.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default Calcul;
