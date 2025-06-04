import { motion } from "framer-motion";
import TeaserCard from "../components/TeaserCard";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Tools from "../components/Tools";

// Fade in + slide-up variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Home() {
    return (
      <div className="flex flex-col gap-12 lg:gap-16 mb-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Profile />
        </motion.div>
  
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Skills />
        </motion.div>
  
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Tools />
        </motion.div>
  
        <div id="portfolio">
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <TeaserCard />
        </motion.div>
        </div>

      </div>
    );
  }
  

export default Home;
