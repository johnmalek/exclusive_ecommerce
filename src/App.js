import './App.css';
import React from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

function App() {
  return(
    <>
      <div className='page-container'>
        <Navbar />
        <div className='content-wrapper'>
          <Carousel />
          <main className='main-content'>
            <h1>Welcome to our store</h1>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
