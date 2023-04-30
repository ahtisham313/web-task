import React, { Fragment } from "react";
import Menu from "./Menu";
class Index extends React.Component{
    render(){

    

    return( <div>

 <Menu/>
  
      <main>
        <h2>Popular Recipes</h2>
        <section className="recipe">
          <h3>Spaghetti Bolognese</h3>
          <img src="recipe/images/Spaghetti Carbonara.jpg" alt="Spaghetti Bolognese"/>
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
          <img src="recipe/images/Chocolate Cake.jpg" alt="Chocolate Cake"/>
          <p>A delicious and moist chocolate cake that's perfect for any occasion. This recipe is easy to follow and tastes amazing!</p>
          <a href="#">View Recipe</a>
        </section>
      </main>
  
      <footer>
        <p>&copy; 2023 YummyEat</p>
      </footer>
    </div>

    )
    }
}export default Index;