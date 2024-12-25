
import { RiReactjsLine } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import expressLogo from "../assets/express-js.png"; // Import your Express logo
import tailwindLogo from "../assets/tailwind.png";
import mysqllogo from "../assets/MySql.png";
import vscodelogo from "../assets/vscode.png";
import canvalogo from "../assets/github.png";
import githublogo from "../assets/Canva.png";
import postgresqlogo from "../assets/postgresql.png";
import javalogo from "../assets/java.png";
import clogo from "../assets/c.png";
import pythonlogo from "../assets/python.png";
import { motion } from "motion/react";
import { animate } from "motion";


const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-20 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl">
        <motion.h1
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0,y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div whileInView={{opacity: 1, x: 0}}
        initial ={{opacity: 0, x: -100}}
        transition={{duration:1.5}}

        className="flex flex-col items-start gap-12 px-8">
          {/* Front-End Section */}
          <div className="flex items-center gap-8">
            <h2 className="text-xl text-neutral-300 w-40">Front-End</h2>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-4">
              <AiFillHtml5 className="text-[#E44D26] text-7xl" />
              <DiCss3 className="text-[#1572B6] text-7xl" />
              <DiJsBadge className="text-[#F7DF1E] text-6xl" />
              <RiReactjsLine className="text-7xl text-cyan-400" />
              <img src={tailwindLogo} alt="Tailwind" className="w-16 h-16" />
            </motion.div>
          </div>

          {/* Back-End Section */}
          <div className="flex items-center gap-8">
            <h2 className="text-xl text-neutral-300 w-40">Back-End</h2>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-4">
              <FaNodeJs className="text-[#68A063] text-7xl" />
              <img src={expressLogo} alt="Express.js" className="w-16 h-16" />
            </motion.div>
          </div>

          {/* Database Section */}
          <div className="flex items-center gap-8">
            <h2 className="text-xl text-neutral-300 w-40">Database</h2>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-4">
              <img src={mysqllogo} alt="MySQL" className="w-16 h-16" />
              <img src={postgresqlogo} alt="PostgreSQL" className="w-16 h-16" />
            </motion.div>
          </div>

          {/* Tools Section */}
          <div className="flex items-center gap-8">
            <h2 className="text-xl text-neutral-300 w-40">Tools</h2>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-4">
              <img src={vscodelogo} alt="VS Code" className="w-16 h-16" />
              <img src={canvalogo} alt="Canva" className="w-16 h-16" />
              <img src={githublogo} alt="GitHub" className="w-16 h-16" />
            </motion.div>
          </div>

          {/* Programming Languages Section */}
          <div className="flex items-center gap-8">
            <h2 className="text-xl text-neutral-300 w-40">Programming Languages</h2>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-4">
              <img src={javalogo} alt="Java" className="w-16 h-16" />
              <img src={clogo} alt="C" className="w-16 h-16" />
              <img src={pythonlogo} alt="Python" className="w-16 h-16" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
