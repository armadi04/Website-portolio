import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useFloating, shift, flip, offset } from "@floating-ui/react";

const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName = "",
  imageClassName = "",
  className = "",
}) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("top");
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [-100, 100], [10, -10]);
  const rotateY = useTransform(springX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 100);
    y.set(yPct * 100);

    const angle = Math.atan2(yPct, xPct) * (180 / Math.PI);
    if (angle > -45 && angle <= 45) setDirection("right");
    else if (angle > 45 && angle <= 135) setDirection("bottom");
    else if (angle > 135 || angle <= -135) setDirection("left");
    else setDirection("top");
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <motion.div
        className={`absolute ${childrenClassName}`}
        style={{
          transform: "translateZ(100px)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {children}
      </motion.div>
      <motion.img
        src={imageUrl}
        alt=""
        className={`w-full h-full ${imageClassName}`}
        style={{
          transition: "all 0.3s ease",
          filter: isHovered ? "brightness(0.7)" : "brightness(1)",
        }}
      />
    </motion.div>
  );
};

export default DirectionAwareHover;
