import './App.css';
import React from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return(
    <>
      {/* <div className="page-container">
        <Navbar />

        <div className="content-wrapper">
          <Sidebar />

          <div className="main-section">
            <Carousel />
            <main className="main-content">
              <h1>Welcome to our store</h1>
            </main>
          </div>
        </div>
      </div> */}

      <div className="page-container">
        <Navbar />
        <div className="content-wrapper">
          <Sidebar />
          <div className='vertical-divider'></div>
          <Carousel />
        </div>
      </div>


    </>
  );
}

export default App;
