import React, { useState, useEffect } from 'react';
import './popup.css';



function Popup() {
  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Welcome to My Portfolio</h2>
           
            <button onClick={closePopup} className="popup-close-btn">
              X
            </button>
          </div>
        </div>
      )}

      
    </div>
  );
}

export default Popup;
