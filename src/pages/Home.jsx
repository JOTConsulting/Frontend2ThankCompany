import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <img src="/images/home.jpg" alt="Hero Transport" />
        <div className="overlay-text">
          <h1>THANK KOMPANY</h1>
          <p>Réalisons intelligemment vos rêves !</p>
          <a href="#about" className="cta-button">En savoir plus</a>

        </div>
      </section>

<section className="qualities">
  <div className="quality-item">
    <div className="icon-circle">
      <img src="/images/listening_icon.png" alt="Listening" />
    </div>
    <span>Listening</span>
  </div>
  <div className="quality-item">
    <div className="icon-circle">
      <img src="/images/reactivity_icon.png" alt="Reactivity" />
    </div>
    <span>Reactivity</span>
  </div>
  <div className="quality-item">
    <div className="icon-circle">
      <img src="/images/satisfaction_icon.png" alt="Customer Satisfaction" />
    </div>
    <span>Customer Satisfaction</span>
  </div>
</section>



      <section className="about" id="about">
  <div className="about-text">
    <h2>Qui sommes <span>le nous</span></h2>
    <p>
      THANK KOMPANY est une entreprise internationale basée en Allemagne desservant des clients et partenaires en Afrique.
      THANK KOMPANY propose un ensemble de services dans différents secteurs d’activités notamment : la logistique, le marketing & communication, les services informatiques et l’immobilier.
    </p>
    <p>
      Pour desservir ses clients THANK KOMPANY s’appuie sur un solide réseau de partenaires en Amérique, en Europe et en Afrique.
      Forte de plusieurs années d’expériences, l’ensemble des prestations de THANK KOMPANY visent à améliorer et à développer la performance des entreprises.
    </p>
    <p>
      Nous priorisons la réactivité afin de répondre de façon rapide et précise à vos besoins. Avec pour objectif la Satisfaction client, nous mettons tout en place pour transformer vos besoins en solutions et nous mettons l’écoute au centre de nos prestations afin de bien cerner vos besoins.
    </p>
  </div>
  <div className="about-img">
    <img src="/images/hp_qui_sommes_nous.png" alt="About illustration" />
  </div>
</section>


<section className="offer-section" id="offer">
  <h3>
    <span className="highlighted">Notre offre</span>: Rendre votre travail sans effort
  </h3>
  <div className="service-cards">
    <div className="card">
      <h4>Services Informatique</h4>
      <ul>
        <li>Maintenance des systèmes informatiques</li>
        <li>Gestion des données</li>
        <li>Développement de logiciel</li>
        <li>Développement Web</li>
        <li>Conseils en SAP PM/CS</li>
      </ul>
     <div className="icon">
      <img src="/images/ico-it.png" alt="IT Icon" />
     </div>
    </div>
    <div className="card">
      <h4>Services électroniques</h4>
      <ul>
        <li>Conseil en matériaux de construction :</li>
        <li>Gros Oeuvre</li>
        <li>Second Oeuvre</li>
        <li>Travaux de VRD</li>
        <li>Vente des matériaux de construction</li>
        <li>Bureau d’études</li>
      </ul>
     <div className="icon">
      <img src="/images/ico-elec.png" alt="Electronics Icon" />
     </div>
    </div>
    <div className="card">
      <h4>Services de Logistique</h4>
      <ul>
        <li>Achat International</li>
        <li>Transport et Gestion des colis</li>
        <li>Recherche des fournisseurs</li>
        <li>Paiement des factures</li>
        <li>Location des voitures</li>
      </ul>
     <div className="icon">
      <img src="/images/ico-log.png" alt="Logistics Icon" />
     </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
