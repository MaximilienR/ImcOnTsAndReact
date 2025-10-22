import React, { useState } from "react";

const IMC: React.FC = () => {
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculerIMC = () => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100;
    if (p > 0 && t > 0) setResult(p / (t * t));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Calcul IMC</h2>
      <input type="number" placeholder="Poids (kg)" value={poids} onChange={e => setPoids(e.target.value)} className="border p-2 mb-2 w-full"/>
      <input type="number" placeholder="Taille (cm)" value={taille} onChange={e => setTaille(e.target.value)} className="border p-2 mb-2 w-full"/>
      <button onClick={calculerIMC} className="px-4 py-2 bg-green-500 text-white rounded">Calculer</button>
      {result !== null && <p className="mt-4 font-bold">Votre IMC est : {result.toFixed(2)}</p>}
    </div>
  );
};

export default IMC;
