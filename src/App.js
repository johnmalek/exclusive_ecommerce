import './App.css';
import React from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Today from './components/Today';
import Categories from './components/Categories';
import BestSellingProducts from './components/BestSellingProduct';

function App() {
  return(
    <>
      <div className="page-container">
        <Navbar />
        <div className="content-wrapper">
          <Sidebar />
          <div className='vertical-divider'></div>
          <Carousel />
        </div>
        <Today />
        <Categories />
        <BestSellingProducts />
      </div>

    </>
  );
}

export default App;
