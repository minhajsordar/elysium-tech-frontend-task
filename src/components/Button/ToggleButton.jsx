"use client";
import React, { useEffect } from "react";
import styles from "./ToggleButton.module.css";

const ToggleButton = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    const newtheme = theme === "light" ? "dark" : "light"
    setTheme(newtheme)
    // document.documentElement.classList.remove(theme);
    // document.documentElement.classList.add(newtheme);
    // localStorage.setItem('theme', newtheme);
  }
  useEffect(() => {
    const newtheme = theme 
    const previousTheme = theme === "light" ? "dark" : "light"
    document.documentElement.classList.remove(previousTheme);
    document.documentElement.classList.add(newtheme);
    localStorage.setItem('theme', theme);
  }, [theme])
  return (
    <div className={styles.container}>
      <label className={styles.toggle}>
        <input
          className={styles.input}
          type="checkbox"
          checked={theme === "light"}
          onChange={toggleTheme}
        />

        <div className={`${styles.icon} ${styles.iconMoon}`}>
          <svg
            height="20px"
            width="20px"
            viewBox="0 0 504.147 504.147"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g>
              <path
                fill="#8C8883"
                d="M397.017 370.594c-145.51 0-263.459-117.941-263.459-263.459 0-38.156 8.184-74.382 22.788-107.126C64.232 41.07.012 133.364.012 240.703c0 145.495 117.965 263.444 263.452 263.444 107.339 0 199.625-64.228 240.672-156.325C471.406 362.409 435.172 370.594 397.017 370.594z"
              />
              <path
                fill="#7C7B7A"
                d="M305.471 435.877c77.296 0 146.684-33.422 194.851-86.473-31.736 13.556-66.615 21.181-103.306 21.181-145.51 0-263.459-117.941-263.459-263.459 0-38.156 8.184-74.382 22.788-107.126-36.328 16.211-68.206 40.464-93.633 70.38-13.233 31.397-20.693 65.827-20.693 102.053C42.019 317.921 159.976 435.877 305.471 435.877z"
              />
              <g fill="#99948F">
                <circle cx="45.115" cy="336.754" r="5.908" />
                <circle cx="77.284" cy="374.17" r="7.877" />
                <circle cx="41.83" cy="256.016" r="6.561" />
                <circle cx="100.246" cy="264.523" r="16.408" />
                <circle cx="195.438" cy="418.808" r="3.938" />
                <circle cx="237.446" cy="385.985" r="6.561" />
                <circle cx="364.784" cy="460.816" r="6.561" />
                <circle cx="351.008" cy="414.184" r="15.1" />
              </g>
              <g fill="#D6C77C">
                <ellipse cx="308" cy="114.546" rx="6.561" ry="62.031" />
                <ellipse
                  transform="rotate(-45 308.021 114.551)"
                  cx="308.021"
                  cy="114.551"
                  rx="62.03"
                  ry="6.554"
                />
                <ellipse cx="308" cy="114.546" rx="62.023" ry="6.561" />
                <ellipse
                  transform="rotate(45 307.979 114.58)"
                  cx="307.979"
                  cy="114.58"
                  rx="62.03"
                  ry="6.561"
                />
              </g>
              <g fill="#99948F">
                <ellipse cx="311.938" cy="279.962" rx="2.19" ry="20.677" />
                <ellipse
                  transform="rotate(-45 311.933 279.969)"
                  cx="311.933"
                  cy="279.969"
                  rx="20.677"
                  ry="2.182"
                />
                <ellipse cx="311.938" cy="279.962" rx="20.669" ry="2.19" />
                <ellipse
                  transform="rotate(45 311.949 279.968)"
                  cx="311.949"
                  cy="279.968"
                  rx="20.677"
                  ry="2.19"
                />
              </g>
            </g>
          </svg>
        </div>

        <div className={`${styles.icon} ${styles.iconSun}`}>
          <svg
            height="20px"
            width="20px"
            viewBox="0 0 156.391 156.391"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g>
              <path
                fill="#FDD633"
                d="M140.796 92.339l14.956-12.837.39-.336-.39-.334-14.604-12.536c-2.146-2.287-2.559-4.183-1.79-7.121l6.53-18.594.172-.487-.505-.094-18.959-3.563c-2.94-.728-4.426-2.378-5.058-5.213l-3.651-19.418-.093-.506-.483.169-18.19 6.39c-2.94.607-4.755.607-7.365-2.062L78.531.39 78.195 0l-.334.39-13.227 15.408c-1.702 1.843-3.353 2.669-6.025 1.608l-19.15-6.727-.484-.17-.095.505-3.75 19.95c-.332 2.271-.746 3.591-4.153 4.135l-19.419 3.65-.506.095.172.484 6.379 18.161c1.6 4.128.692 4.705-1.993 7.045L.638 77.385l-.389.335.389.334 14.594 12.529c1.908 1.81 2.815 3.543 1.792 7.155L10.5 116.307l-.17.484.504.095 18.906 3.554c3.406.666 4.479 2.48 5.124 5.288l3.637 19.354.096.506.485-.173 18.108-6.36c3.102-.788 5.082-.376 7.131 2.016l12.816 14.929.336.391.335-.391 12.503-14.565c1.827-1.849 3.808-2.921 7.205-1.811l18.54 6.515.489.17.091-.506 3.553-18.895c.661-3.163 1.898-4.235 5.29-5.133l19.354-3.636.505-.098-.169-.484-6.371-18.132c1.55-3.725 1.88-5.54 4.58-7.657zM78.196 131.94c-29.54 0-53.487-23.947-53.487-53.486 0-29.541 23.947-53.488 53.487-53.488.825 0 1.645.025 2.46.062 28.396 1.287 51.027 24.711 51.027 53.426 0 29.454-23.948 53.4-53.487 53.4z"
              />
              <path
                fill="#F2AB0C"
                d="M80.657 25.028v106.85c-.816.038-1.635.063-2.46.063 29.54 0 53.488-23.947 53.488-53.486 0-29.45-22.631-52.875-51.028-53.437z"
              />
              <path
                fill="#F4940B"
                d="M80.657 25.028h0c-.816-.037-1.635-.062-2.46-.062-29.54 0-53.487 23.947-53.487 53.488 0 29.54 23.947 53.486 53.487 53.486.825 0 1.645-.025 2.46-.063V25.028z"
              />
            </g>
          </svg>
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
