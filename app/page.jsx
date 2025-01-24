"use client";
import { useState, useEffect, useRef, use } from "react";
import quotesList from "./qoutesArray";
import "./globals.css";

export default function Home() {

  const quoteRef = useRef(null)
  const authorRef = useRef(null)
  const toggleBtn = useRef(null)
  const nextQuoteBtn = useRef(null)
  
  
  const [quoteElement, setQuote] = useState(quotesList[0]);
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem("darkMode");
      if (savedDarkMode === "true") {
        setDarkMode(true);
      }
    }
  }, []);
  
  useEffect(() => {
    const updateQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotesList.length);
      const newQuote = quotesList[randomIndex];
      
      setQuote(newQuote);
      
      if (quoteRef.current && authorRef.current) {
        quoteRef.current.innerHTML = newQuote.quote;
        authorRef.current.innerHTML = newQuote.author;
      }
    };
    
    updateQuote();
    
    if (nextQuoteBtn.current) {
      nextQuoteBtn.current.addEventListener("click", updateQuote);
    }
    
    return () => {
      if (nextQuoteBtn.current) {
        nextQuoteBtn.current.removeEventListener("click", updateQuote);
      }
    };
  }, []);
  
  useEffect(() => {
    if (toggleBtn.current) {
      toggleBtn.current.checked = darkMode;
    }

    const handleChange = () => {
      if (toggleBtn.current.checked) {
        setDarkMode(true)
        localStorage.setItem("darkMode", true)
      } else {
        setDarkMode(false)
        localStorage.setItem("darkMode", false)
      }
    }
    
    toggleBtn.current.addEventListener("change", handleChange)
    
    return () => {
      toggleBtn.current.removeEventListener("change", handleChange)
    }
  }, [darkMode])
  
  const styles = {
    bodyContainer: {
      background: darkMode ? "#000" : "linear-gradient(to left, #d2cef7, #ca9a9a)",
      transition: "all 0.3s ease",
    },

    navBar: {
      color: darkMode ? "#fff" : "#000",
    },

    "link > a": {
      color: darkMode ? "#d2cef7" : "#000",
    },

    "quote-holder": {
      background: darkMode ? "none" : "#fff",
      backgroundColor: darkMode ? "#001020" : "#d2cef7",
      boxShadow: darkMode ? "rgba(0, 0, 0, 0.5) 0px 7px 29px 0px" : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      transition: "all 0.3s ease",
    },

    "quote-holder > p": {
      color: darkMode ? "#FFEB99" : "#333",
    },

    "nextButton": {
      backgroundColor: darkMode ? "#80D8FF" : "#000",
      color: darkMode ? "#000" : "#fff",
    }

  }
  
  return (
    <main style={styles.bodyContainer} className="bodyContainer">
      <div style={styles.navBar} className="navBar">
          <div className="link">
              <a style={styles["link > a"]} href="#">home</a>
          </div>
          <div className="link">
              <a style={styles["link > a"]} href="#">about</a>
          </div>
          <div className="link">
              <a style={styles["link > a"]} href="#">contact</a>
          </div>
          <div className="link">
              <a style={styles["link > a"]} href="#">help</a>
          </div>
          <div className="toggle-btn">
              <span style={styles["link > a"]} className="light-mode">DARK MODE</span>
              <label className="toggle">
                  <input className="toggleBtn" ref={toggleBtn} type="checkbox"/>
                  <span className="slider round"></span>
              </label>
          </div>      
      </div>
      
      <div style={styles.bodyContainer} className="body-content">
          <div style={styles["quote-holder"]} className="quote-holder">
              <p className="quote" style={styles["quote-holder > p"]} ref={quoteRef}></p>
              <div className="author-and-btn">
                  <p className="author" ref={authorRef}></p>
                  <button style={styles.nextButton} className="nextButton" ref={nextQuoteBtn}>
                      Next quote
                  </button>
              </div>
          </div>
      </div>
    </main>
  );
}
