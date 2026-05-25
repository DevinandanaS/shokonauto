import { useEffect, useState } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import "./TextGenerateEffect.css";

export const TextGenerateEffect = ({
  words,
  className = "",
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView, hasAnimated, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-generate-word"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={`text-generate-effect ${className}`}>
      {renderWords()}
    </div>
  );
};
