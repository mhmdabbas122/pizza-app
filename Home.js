// ...existing code...
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Pedro's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu" aria-label="Order now">
          <button type="button">ORDER NOW</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
// ...existing code...