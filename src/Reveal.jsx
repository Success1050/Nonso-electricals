import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children, variants, style, className, custom }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: "true" });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial='hidden'
      animate={mainControls}
      transition={{ duration: custom, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
