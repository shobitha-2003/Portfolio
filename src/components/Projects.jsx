import { PROJECTS } from "../constants";
import { motion } from "motion/react"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y:-100}}
      transition={{duration: 0.5}}
    className="my-20 text-center text-4xl">Projects</motion.h1>
      <div className="space-y-8"> {/* Space between projects */}
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap lg:justify-center items-start gap-8"
          >
            {/* Image Section */}
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 2}}
            className="w-full lg:w-1/4">
              <img
                src={project.image}
                height={400}
                width={400}
                alt={project.title}
                className="rounded"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity: 0, x:100}}
             transition={{duration: 1}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 hover:bg-red-600 hover:text-white cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <div className="mt-4">
                <a
                  href={project.githubLink} // Replace with the actual GitHub link from your PROJECTS object
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-purple-700 px-4 py-2 text-white hover:bg-purple-600"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
