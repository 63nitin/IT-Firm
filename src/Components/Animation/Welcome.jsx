import { motion } from "framer-motion";

function Welcome() {
  const text = "Your Success, Powered by Technology".split(" ");

  return (
    <div className="App">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.20,
            delay: i / 5,
          }}
          key={i}
           className="text-6xl font-sans font-bold text-blue-300 mb-2"
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default Welcome;
