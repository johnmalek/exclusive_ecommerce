import React from "react";
import "../today.css";

function Today(){
    const products = [
        { id: 1, name: "Smartphone", price: "$299", image: "/img/phone.jpg" },
        { id: 2, name: "Sneakers", price: "$99", image: "/img/sneakers.jpg" },
        { id: 3, name: "Smartwatch", price: "$199", image: "/img/watch.jpg" },
        { id: 4, name: "Headphones", price: "$79", image: "/img/headphone.jpg" },
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
            <div className="parent-container">
                <button className="all-products">View All</button>
            </div>
            <hr className="hr" />
        </section>
    );
}
export default Today;
