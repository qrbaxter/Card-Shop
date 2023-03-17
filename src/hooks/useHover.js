import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    if (!ref.current) return;
  
    const currentRef = ref.current;
  
    currentRef.addEventListener("mouseenter", enter);
    currentRef.addEventListener("mouseleave", leave);
  
    // New event listeners for the icons
    currentRef.querySelectorAll("svg").forEach((icon) => {
      icon.addEventListener("mouseenter", enter);
      icon.addEventListener("mouseleave", leave);
    });
  
    return () => {
      if (!currentRef) return;
  
      currentRef.removeEventListener("mouseenter", enter);
      currentRef.removeEventListener("mouseleave", leave);
  
      // Remove event listeners for the icons
      currentRef.querySelectorAll("svg").forEach((icon) => {
        icon.removeEventListener("mouseenter", enter);
        icon.removeEventListener("mouseleave", leave);
      });
    };
  }, []);
  

  return [hovered, ref];
}

export default useHover;
