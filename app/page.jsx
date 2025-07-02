"use client";
import { useState, useEffect, useRef } from "react";
import quotesList from "./qoutesArray";
import "./globals.css";

export default function Home() {

  const quoteRef = useRef(null)
  const authorRef = useRef(null)
  const toggleBtn = useRef(null)
  const nextQuoteBtn = useRef(null)

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
      background: darkMode ? "#5b2333" : "#fcf7f8",
      transition: "all 0.3s ease",
      // text: darkMode ? "#fcf7f8" : "#a36121",
    },

    navBar: {
      color: darkMode ? "#fcf7f8" : "#5b2333",
    },

    "quote-holder": {
      background: darkMode ? "#5b2333" : "#fcf7f8",
      // backgroundColor: darkMode ? "#001020" : "#fcf7f8",
      boxShadow: darkMode ? "rgba(0, 0, 0, 0.5) 0px 7px 29px 0px" : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      transition: "all 0.3s ease",
    },

    "quote-holder > p": {
      color: darkMode ? "#f7f4f3" : "#5b2333",
    },

    "nextButton": {
      backgroundColor: darkMode ? "#fcf7f8" : "#5b2333",
      color: darkMode ? "#5b2333" : "#fcf7f8",
    }

  }
  
  return (
    <main style={styles.bodyContainer} className="bodyContainer">
      <div style={styles.navBar} className="navBar">
          {/*<div className="link">*/}
          {/*    <a style={styles["link > a"]} href="#">home</a>*/}
          {/*</div>*/}
          {/*<div className="link">*/}
          {/*    <a style={styles["link > a"]} href="#">about</a>*/}
          {/*</div>*/}
          {/*<div className="link">*/}
          {/*    <a style={styles["link > a"]} href="#">contact</a>*/}
          {/*</div>*/}
          {/*<div className="link">*/}
          {/*    <a style={styles["link > a"]} href="#">help</a>*/}
          {/*</div>*/}
          <div className="toggle-btn">
              <span style={styles["link > a"]} className="light-mode">DARK MODE</span>
              <label className="toggle">
                  <input className="toggleBtn" ref={toggleBtn} type="checkbox"/>
                  <span className="slider round"></span>
              </label>
          </div>      
      </div>
      
      <div className="body-content">
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
