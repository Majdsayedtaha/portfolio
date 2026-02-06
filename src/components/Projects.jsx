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
      className="relative h-[280px] sm:h-[350px] rounded-[24px] overflow-hidden group cursor-pointer"
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
        className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end"
      >
        <h3 className="text-timberWolf font-bold font-beckman text-xl sm:text-2xl mb-2 uppercase">
          {name}
        </h3>

        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-3 mb-4"
          >
            <p className="text-silver text-xs sm:text-sm leading-relaxed font-poppins line-clamp-3">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              {repo && (
                <motion.a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 
                  rounded-full bg-night hover:bg-battleGray transition-colors"
                  title="View source code"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
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
                  className="flex items-center justify-center px-3 sm:px-4 py-2 
                  bg-timberWolf text-jet font-bold font-beckman text-xs sm:text-sm 
                  rounded-lg hover:bg-battleGray transition-colors"
                >
                  LIVE DEMO →
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
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-4 text-taupe text-[16px] sm:text-[18px] max-w-3xl leading-[28px] sm:leading-[30px]"
      >
        These projects demonstrate my expertise with practical examples of
        some of my work, including brief descriptions and links to code
        repositories and live demos. They showcase my ability to tackle
        intricate challenges, adapt to various technologies, and efficiently
        oversee projects.
      </motion.p>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
