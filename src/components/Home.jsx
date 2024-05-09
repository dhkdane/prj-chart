import { useEffect } from "react";
import "./cube.css";

const Home = () => {
  useEffect(() => {
    const cube = document.querySelector(".cube");

    const handleMouseMove = (event) => {
      const rotationValue = 270;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
      const rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
    <div className="cube-container">
      <div className="cube">
        <div className="cube-face front">Web Design</div>
        <div className="cube-face back">App Development</div>
        <div className="cube-face left">SEO</div>
        <div className="cube-face right">WordPress</div>
        <div className="cube-face top">Blogger</div>
        <div className="cube-face bottom">WooCommerce</div>
      </div>
    </div>
  );
};

export default Home;
// import React, { useEffect, useRef } from "react";
// import "./cube.css";

// const Home = () => {
//   const cubeRef = useRef(null);

//   useEffect(() => {
//     const cube = cubeRef.current;

//     const handleCubeDoubleClick = () => {
//       cube.classList.toggle("rotating");
//     };

//     const handleDocumentClick = (event) => {
//       if (!cube.contains(event.target)) {
//         cube.classList.remove("rotating");
//       }
//     };

//     cube.addEventListener("dblclick", handleCubeDoubleClick);
//     document.addEventListener("click", handleDocumentClick);

//     // Clean up the event listeners when the component unmounts
//     return () => {
//       cube.removeEventListener("dblclick", handleCubeDoubleClick);
//       document.removeEventListener("click", handleDocumentClick);
//     };
//   }, []);

//   return (
//     <div className="cube-container">
//       <div ref={cubeRef} className="cube">
//         <div className="cube-face front">Web Design</div>
//         <div className="cube-face back">App Development</div>
//         <div className="cube-face left">SEO</div>
//         <div className="cube-face right">WordPress</div>
//         <div className="cube-face top">Blogger</div>
//         <div className="cube-face bottom">WooCommerce</div>
//       </div>
//     </div>
//   );
// };

// export default Home;
