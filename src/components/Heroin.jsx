import { HEROIN_CONTENT } from "../constants";
import profilePic from "../assets/shobithaProfile.jpg";
import resume from "../assets/resume.pdf";
import { motion } from "motion/react"
import { delay } from "motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5,delay: delay},
    },
});

const Heroin = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
             className="pb-4 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl ml-10 relative -top-4">
              Shobitha N V
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-light text-transparent ml-10 block -mt-4">
              Software Developer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="ml-10">{HEROIN_CONTENT}</motion.p>
            {/* Buttons appear here below the text */}
            <div className="flex justify-start mt-6 ml-10">
              <motion.a
                  variants={container(1.5)}
                  initial="hidden"
                  animate="visible"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 mr-4"
              >
                Get My Resume
              </motion.a>
              <motion.a
                  variants={container(1.5)}
                  initial="hidden"
                  animate="visible"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shobithanaliyar@gmail.com&su=Hire%20Me&body=Hello,%20I%20am%20interested%20in%20hiring%20you!"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
>
  Hire Me
</motion.a>

            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img initial = {{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1,delay: 1.2}}
             src={profilePic}
              alt="Shobitha N V"
              className="w-full max-w-[500px] h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroin;
