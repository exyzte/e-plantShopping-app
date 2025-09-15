import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <>
      <div className="app-container">
        <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
        <div className="landing-content">
          <h1>Welcome to E-Plant Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where your dream garden comes to live.</p>
          <button className="get-started-button" conClick={handleGetStartedClick}>
            Click to start!
          </button>
        </div>
          <div className="aboutUs_container">
            <AboutUs/>n
          </div>
        </div>
      </div>
      <div className={`product-list-container "{showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick}/>
      </div>
      </div>
    </>
  );
}

export default App;
