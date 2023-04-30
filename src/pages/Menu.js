import React, { Fragment } from "react";

function Menu(){
return(
    <div>
        <header className="back">
           {/* <img src="recipe/images/header.jpg"className="img"/> */}
        <h1><img src="recipe/images/logo.png" alt=""/></h1>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="Recipes">Recipes</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
)
}export default Menu;

