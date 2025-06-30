import React from 'react'
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";


 const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


const GoToTop = () => {
  return (
     visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#ffc107",
          border: "none",
          padding: "10px 15px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 999,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    )

  )
}

export default GoToTop