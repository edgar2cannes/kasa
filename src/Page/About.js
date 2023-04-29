import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import imageAbout from "../assets/imageAbout.jpg";
import imageAboutMobile from "../assets/imageAboutMobile.jpg";
import "../styles/About.css";
import Collapse from "../components/collapse";

export default function About() {
  function AboutItems() {
    const Items = [
      {
        id: 1,
        title: "Fiabilité",
        texte:
          "Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes au logement et toutes les informations sont régulièrement vérifiées par nos équipes.",
      },
      {
        id: 2,
        title: "Respect",
        texte:
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entranîera une exclusion de notre plateforme",
      },
      {
        id: 3,
        title: "Service",
        texte:
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.N'hésitez pas à nous contacter si vous avez la moindre question",
      },
      {
        id: 4,
        title: "Sécurité",
        texte: `La sécurité est la priorité est la priorité de Kasa aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. 
        En laissant une note aussi bien à l'hôte qu'aux locataires, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`,
      },
    ];
    return Items;
  }
  const Items = AboutItems();
  const [mode, setMode] = useState("desktop");
  useEffect(() => {
    if (window.innerWidth >= 699) {
      setMode("desktop");
    } else {
      setMode("mobile");
    }
    window.addEventListener("resize", onResize);

    function onResize() {
      if (window.innerWidth >= 699 && mode === "mobile") {
        setMode("desktop");
      } if (window.innerWidth < 699 && mode==='desktop'){
        setMode("mobile");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  return (
    <div>
      <Header />
      <div className="cover">
        <img
          className={mode}
          src={mode === "mobile" ? imageAboutMobile : imageAbout}
          alt="montagnes"
        />
      </div>
      {Items.map((item) => {
        return <Collapse title={item.title} texte={item.texte} key={item.id} />;
      })}
      <Footer />
    </div>
  );
}