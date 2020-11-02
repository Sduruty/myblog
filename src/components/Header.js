import React from "react";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  return (
    <>
      <header>
        <h1>My Blog</h1>
        <h2>An awesome baseline</h2>
      </header>
      <NavigationMenu 
      link1={<a href="https://www.github.com/Sduruty/" >GitHub</a>}
      link2= {<a href="https://www.linkedin.com/in/sandie-duruty/" >LinkedIn</a>}
      link3="Facebook" 
      link4={<a href="https://www.cheznoo.net/" >Cheznoo</a>} />
    </>
  );
};

export default Header;