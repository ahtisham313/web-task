import React, { Fragment } from "react";
import Menu from "./Menu";
class Recipe extends React.Component{
    render(){

    return( <Fragment>


<Menu/>
<body>
    <main>
      <h2>Recipes</h2>
      <section class="recipe">
        <h3>fajita</h3>
        <img src="recipe/images/fajita.jpg" alt="fajita"/>
        <p>A sizzling Tex-Mex favorite made with grilled meat and peppers.</p>
        <a href="#">View Recipe</a>
      </section>

      <section class="recipe">
        <h3>homemade Pizza</h3>
        <img src="recipe/images/Homemade Pizza.jpg" alt="Homemade Pizza"/>
        <p>A classic dish made with a homemade pizza crust and topped with tomato sauce and cheese,.</p>
        <a href="#">View Recipe</a>
      </section>

      <section class="recipe">
        <h3>spaghetti Carbonara</h3>
        <img src="recipe/images/Spaghetti Carbonara.jpg" alt="spaghetti Carbonara"/>
        <p>A classic Italian dish made with spaghetti and a rich tomato-based sauce with ground beef and herbs.</p>
        <a href="#">View Recipe</a>
      </section>
      
      <section class="recipe">
        <h3>Chicken Curry</h3>
        <img src="recipe/images/Chicken Curry.jpg" alt="Chicken Curry"/>
        <p>A popular Indian dish made with chicken, spices, and coconut milk. Best served with rice or naan bread.</p>
        <a href="#">View Recipe</a>
      </section>
      
      <section class="recipe">
        <h3>Chocolate Cake</h3>
        <img src="recipe/images/Chocolate Cake.jpg" alt="Chocolate cake"/>
        <p>A delicious and moist chocolate cake that's perfect for any occasion. This recipe is easy to follow and tastes amazing!</p>
        <a href="#">View Recipe</a>
      </section>
    </main>
    </body>

    </Fragment>
    

    )
    }
}export default Recipe;