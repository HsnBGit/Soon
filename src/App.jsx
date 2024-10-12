import React,{ useEffect } from 'react';
import LoadingPage from './LoadingPage';
import gsap from 'gsap';
import Type from './Type';
import './index.css';

export default function App() {

  useEffect(() => {

    const cursorDot = document.getElementById("data-cursor-dot");
    const cursorOutline = document.getElementById("data-cursor-outline");

    if (cursorDot && cursorOutline) {
      console.log("cursorDot initialized");

      window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      });
    }

    
    let t1 = gsap.timeline();

    t1.to(".box", {
      scale: 0,
      y: 60,
      rotate: 400,
      duration: 1,
      delay: 0.9,
      repeat: 1,
      yoyo: true,
      stagger: {
        amount: 4.5,
        from: "center",
        grid: [3, 3],
      },
    });
    
    t1.to(".container", {
      rotate: "-405deg",
      scale: 0,
      duration: 1,
    });

    t1.to(".wrapper", {
      opacity: 0,
      display: "none",
    });

  }, []); 

  return (
    <>
      <div className="cursor-dot boxx" id="data-cursor-dot"></div>
      <div className="cursor-outline" id="data-cursor-outline"></div>
      <LoadingPage />
      <div className="h-screen ggg flex items-center justify-center">
        <h1 className="textanimated bg-gradient-to-r from-blue-500 to-pink-500
          bg-clip-text text-transparent opacity-100
          text-5xl font-semibold transition-all duration-300
          hover:opacity-100 sm:text-2xl ">
          <Type />
        </h1>
      </div>
    </>
  );
}
