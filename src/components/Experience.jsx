import React from 'react';
import { EXPERIENCES } from '../constants'; // Make sure to import your experience data from the correct path
import { motion } from "motion/react"

const Experience = () => {
  return (
    <div className="flex py-20 space-x-12"> {/* space between columns */}
      {/* Education Section (Left Side) */}
      <div className="flex-1 flex flex-col items-start space-y-6 pl-20">
        <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration: 0.5}}

        className="text-6xl font-bold">EDUCATION</motion.h1>
        {/* Loop through the first 3 items for Education */}
        {EXPERIENCES.slice(0, 3).map((item, index) => (
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 2}}
          key={index} className="w-full">
            <p className="text-2xl font-semibold text-blue-800">{item.year}</p> {/* Dark blue color for year */}
            <p className="text-xl font-semibold text-yellow-500">{item.instituename}</p> {/* Light yellow color for institution name */}
            <p className="text-lg">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Experience Section (Right Side) */}
      <div className="flex-1 flex flex-col items-start space-y-6 pr-20">
        <motion.h1
         whileInView={{opacity: 1, y:0}}
         initial={{opacity: 0, y:-100}}
         transition={{duration: 0.5}}
          className="text-6xl font-bold">EXPERIENCE</motion.h1>
        {/* Loop through the last item for Experience */}
        {EXPERIENCES.slice(3).map((item, index) => (
          <motion.div
          whileInView={{opacity: 1, x:0}}
          initial={{opacity: 0, x:100}}
          transition={{duration: 2}}
          key={index} className="w-full">
            <p className="text-2xl font-semibold text-blue-800">{item.year}</p> {/* Dark blue color for year */}
            <p className="text-xl font-semibold text-yellow-500">{item.company}</p> {/* Light yellow color for company */}
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
