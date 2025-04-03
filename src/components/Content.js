import React from "react";
import "./Content.css";

function Content(){
    const products = [
        { id: 1, name: "Smartphone", price: "$299", image: "/img/phone.jpg" },
        { id: 2, name: "Sneakers", price: "$99", image: "/img/sneakers.jpg" },
        { id: 3, name: "Smartwatch", price: "$199", image: "/img/watch.jpg" },
        { id: 4, name: "Headphones", price: "$79", image: "/img/headphone.jpg" },
        { id: 5, name: "Sweatshirt", price: "$50", image: "/img/sweat.jpg" },
        { id: 6, name: "Hat", price: "$12", image: "/img/hat.jpg" },
        { id: 7, name: "Table", price: "$45", image: "/img/table.jpg" },
        { id: 8, name: "Gloves", price: "$5", image: "/img/gloves.jpg" },
    ];
        
    return (
    <section className="home-content">
        <h5>Today's Picks</h5>
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
        </section>
    );
}
export default Content;
