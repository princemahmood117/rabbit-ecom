import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold tracking-tighter uppercase mb-4 flex flex-wrap justify-center">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
          className={char === " " ? "mx-[0.2rem]" : ""}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedText