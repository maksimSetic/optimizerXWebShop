import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = ({ isPopupOpen, setIsPopupOpen, popupMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`popup ${isPopupOpen ? "visible" : ""}`}>
      <span className="popup-message">{popupMessage}</span>
      {/*<span className="popup-message">{errorMessage}</span>*/}
    </div>
  );
};

export default Popup;
