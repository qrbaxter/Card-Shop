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
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    // New event listeners for the icons
    ref.current.querySelectorAll("svg").forEach((icon) => {
      icon.addEventListener("mouseenter", enter);
      icon.addEventListener("mouseleave", leave);
    });

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);

      // Remove event listeners for the icons
      ref.current.querySelectorAll("svg").forEach((icon) => {
        icon.removeEventListener("mouseenter", enter);
        icon.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return [hovered, ref];
}

export default useHover;
