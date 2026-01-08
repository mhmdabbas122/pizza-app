// ...existing code...
import React from 'react';
import MultiplePizzas from "../assets/makingpizza.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
        role="img"
        aria-label="Multiple pizzas being made"
      />
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Pizza is a timeless favorite that brings people together with its irresistible aroma and flavor.
          With its soft, chewy crust and perfectly melted cheese, every bite feels comforting.
          Fresh toppings like tomatoes, basil, and olives add color and zest to each slice.
          Whether baked in a wood-fired oven or delivered hot to your door, it never disappoints.
          From classic Margherita to bold pepperoni, there’s a style for every craving.
          No matter the occasion, pizza always finds a way to make the moment better.
        </p>
      </div>
    </div>
  );
}

export default About;
// ...existing code...
// filepath: /Users/mohamadabbas/Documents/project react/src/mhamad-react/src/pages/About.js