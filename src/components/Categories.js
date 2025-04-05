import React, { useState } from 'react';
import { FaMobileAlt, FaLaptop, FaHeadphones, FaCamera, FaGamepad, FaClock } from 'react-icons/fa';
import '../categories.css';
    
const categories = [
    {name: 'phones', icon: <FaMobileAlt />},   
    {name: 'Computers', icon: <FaLaptop />},
    {name: 'HeadPhones', icon: <FaHeadphones />},
    {name: 'Cameras', icon: <FaCamera />},
    {name: 'Gaming', icon: <FaGamepad />},
    {name: 'SmartWatch', icon: <FaClock />}
];

const Categories = () => {
    const [selected, setSelected] = useState('Cameras');

    return (
        <div className="categories-section">
            <h5 className="section-subtitle">Categories</h5>
            <h2 className="section-title">Browse By Category</h2>

            <div className="category-container">
            {categories.map((cat) => (
                <div
                    key={cat.name}
                    className={`category-card ${selected === cat.name ? 'selected' : ''}`}
                    onClick={() => setSelected(cat.name)}
            >
            <div className="icon">{cat.icon}</div>
            <p>{cat.name}</p>
        </div>
        ))}
      </div>
    </div>
    );
}

export default Categories;