import { motion } from "framer-motion";
import { FaLaptopCode, FaPenNib } from "react-icons/fa";

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mx-4 gap-4 overflow-x-hidden lg:mx-24">
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="border border-whitePrimary/25 rounded-xl py-2 px-6 bg-blackPrimary/25 backdrop-blur min-h-64 flex flex-col justify-evenly items-center sm:w-3/4 lg:w-2/4 2xl:w-2/6"
      >
        <h2 className="text-xl font-bold flex flex-row justify-center items-center gap-4">
          <FaPenNib className="text-bluePrimary sm:p-1" size={36} />
          Web Design and Development
        </h2>
        <p className="text-xs font-thin text-center sm:w-2/4 lg:w-3/4 2xl:w-3/5 lg:h-38 lg:text-sm">
          Whether you're starting from scratch or already have a design in hand, I can bring your vision to life with clean, accessible, and brand-aligned UI.
          I specialize in creating sleek, intuitive interfaces that not only look great but also deliver a seamless user experience.
        </p>
      </motion.div>

      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="border border-whitePrimary/25 rounded-xl py-2 px-6 bg-blackPrimary/25 backdrop-blur min-h-64 flex flex-col justify-evenly items-center sm:w-3/4 lg:w-2/4 2xl:w-2/6"
      >
        <h2 className="text-xl font-bold flex flex-row justify-center items-center gap-4">
          <FaLaptopCode className="text-bluePrimary" size={38} />
          Content Storage
        </h2>
        <p className="text-xs font-thin text-center sm:w-2/4 lg:w-3/4 2xl:w-3/5 lg:h-38 lg:text-sm">
          I also integrate Firebase to build dynamic, data-driven applications, perfect for storing content, managing users, or updating your site in real time.
        </p>
      </motion.div>
    </div>
  );
}

export default Skills;
