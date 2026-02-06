import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github, githubLock, pineapple, lock } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] rounded-[20px] sm:rounded-[24px] overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover"
        loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 20 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end"
      >
        <h3 className="text-timberWolf font-bold font-beckman text-base sm:text-lg md:text-2xl mb-1 sm:mb-2 uppercase line-clamp-2">
          {name}
        </h3>

        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-2 sm:space-y-3 mb-3 sm:mb-4"
          >
            <p className="text-silver text-xs sm:text-sm leading-relaxed font-poppins line-clamp-2 sm:line-clamp-3">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
              {repo && (
                <motion.a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                  rounded-full bg-night hover:bg-battleGray transition-colors flex-shrink-0"
                  title="View source code"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
                    loading="lazy"
                  />
                </motion.a>
              )}

              {demo && (
                <motion.a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-2 sm:px-3 md:px-4 py-1 sm:py-2 
                  bg-timberWolf text-jet font-bold font-beckman text-xs sm:text-sm 
                  rounded-lg hover:bg-battleGray transition-colors whitespace-nowrap flex-shrink-0"
                >
                  LIVE →
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center -mt-[4rem] sm:-mt-[6rem]">
      <motion.div 
        variants={textVariant()}
        className="w-full px-4 sm:px-8"
      >
        <p className={`${styles.sectionSubText}`}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-4 text-taupe text-sm sm:text-base md:text-[18px] max-w-3xl leading-[24px] sm:leading-[28px] md:leading-[30px]"
        >
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>

        {/* Projects Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-max">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
