import React from "react";
import "../styles/Home.css";
import Header from "../components/header";
import Footer from "../components/footer";
import imgHome from "../assets/ImgHome.jpg";
import AppCard from "../components/AppCard";


export default function Home() {
 
  return (
    <div>
      <Header />
      <div className="coverHome">
        <p>Chez vous, partout et ailleurs</p>
        <img className="imgAccueil" src={imgHome} alt="paysage" />
      </div>
      <AppCard />
      <Footer />
    </div>
  );
}