import React from "react";
import "./App.css";

// Imports components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

// Imports images
import iam from "./img/iam.jpg";
import me from "./img/didi.jpg";
import sea from "./img/sea.jpg";
import panorama from "./img/panorama-toit.jpg";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="container">
        <Header/>
        <main>
          <section className="col-1">
            <Content
              title="L'île aux Marins"
              titleDesc="Notre capital Patrimonial"
              imgSrc={iam}
              imgAlt="Ile aux Marins"
              text="L'ile aux Marins vue de mon balcon. Autrefois habitée (jusqu'en 1965 si ma mémoire d'ancien guide touristique est bonne 😅), cette île fait désormais office de Musée, représentante des vestiges de la vie lors de l'époque de la Grande Peche. Cette photo ne montre que la portion du milieu de l'île."
            />
            <Content
              title="La Mer"
              titleDesc="...qu'on voit danser..."
              imgSrc={sea}
              imgAlt="Sea"
              text="Comment ne pas mettre une photo de la mer, puisqu'on en est entourés. Ce cliché a été pris à l'été 2020 sur les îles Miquelon-Langlade (Dune du Ouest, plus exactement)."
            />
            <Content
              title="Vue de chez moi"
              titleDesc="...de mon toit, pour être précis..."
              imgSrc={panorama}
              imgAlt="Panorama vu de mon toit"
              text="Panorama pris le 4 Octobre 2020 lors des travaux de réfection de la toiture de ma maison, que nous avons entrepris, mon conjoint et moi-même 💪."
            />
          </section>
          <section className="col-2">
            <Content
              title="Me, Myself and I"
              titleDesc="Title description 2"
              imgSrc={me}
              imgAlt="Me"
              text="De temps en temps il faut se montrer, paraît-il... Me voici donc portant fièrement la maquette du cargo 'Cap-Blanc' disparu en mer en décembre 2009, sur lequel mon Père ainsi que 3 autres marins ont perdus la vie. Cette photo a été prise lors de la Cérémonie de la Fête des Marins, une des plus belles fêtes de notre archipel."
            />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
