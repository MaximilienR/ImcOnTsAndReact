// Home.tsx
import React from "react";
import "./Home.css"; // On importe le fichier CSS

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Bienvenue sur le Calculateur IMC</h1>

      <section className="imc-section">
        <h2>L’importance de l’IMC</h2>
        <p>
          L’<strong>Indice de Masse Corporelle (IMC)</strong> est un outil simple et efficace pour évaluer la
          corpulence d’une personne et identifier d’éventuels risques pour la santé. Il se calcule en divisant le
          poids (en kilogrammes) par le carré de la taille (en mètres) :
        </p>
        <pre className="imc-formula">
          IMC = poids (kg) / (taille (m))²
        </pre>
      </section>

      <section className="imc-section">
        <h2>Pourquoi l’IMC est important</h2>
        <ul>
          <li>
            <strong>Évaluer le poids santé :</strong> L’IMC permet de savoir si une personne se situe dans une
            fourchette de poids considérée comme « normale » par rapport à sa taille.
          </li>
          <li>
            <strong>Prévenir les maladies liées au poids :</strong> Un IMC trop élevé ou trop bas peut indiquer des
            risques pour la santé :
            <ul>
              <li>IMC élevé → risque accru de maladies cardiovasculaires, diabète de type 2, hypertension.</li>
              <li>IMC trop faible → carences nutritionnelles, faiblesse musculaire, fragilité osseuse.</li>
            </ul>
          </li>
          <li>
            <strong>Outil de suivi simple :</strong> L’IMC est facile à calculer et à suivre au fil du temps.
          </li>
          <li>
            <strong>Sensibilisation à un mode de vie équilibré :</strong> Connaître son IMC aide à adopter une
            alimentation saine et une activité physique régulière.
          </li>
        </ul>
      </section>

      <section className="imc-section">
        <h2>Interprétation générale de l’IMC (pour adultes)</h2>
        <table className="imc-table">
          <thead>
            <tr>
              <th>Catégorie</th>
              <th>IMC (kg/m²)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Insuffisance pondérale</td>
              <td>&lt; 18,5</td>
            </tr>
            <tr>
              <td>Poids normal</td>
              <td>18,5 – 24,9</td>
            </tr>
            <tr>
              <td>Surpoids</td>
              <td>25 – 29,9</td>
            </tr>
            <tr>
              <td>Obésité</td>
              <td>≥ 30</td>
            </tr>
          </tbody>
        </table>
        <p className="warning">
          ⚠️ Attention : L’IMC n’est qu’un indicateur général. Il ne distingue pas la masse musculaire de la masse
          grasse et ne remplace pas un avis médical.
        </p>
      </section>

      <section className="imc-section">
        <h2>Conclusion</h2>
        <p>
          L’IMC est un outil précieux pour surveiller sa santé et prévenir certaines maladies. En combinaison avec
          d’autres mesures, comme le tour de taille ou l’analyse corporelle, il permet de mieux comprendre son
          corps et d’adopter un mode de vie plus sain.
        </p>
      </section>
    </div>
  );
};

export default Home;
