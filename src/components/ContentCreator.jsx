import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";

const SocialLink = ({ icon: Icon, label, url, delay }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noreferrer"
    variants={fadeIn("up", "spring", delay, 0.75)}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="group relative flex flex-col items-center justify-center"
    title={label}
  >
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-jetLight to-jet flex items-center justify-center
      hover:shadow-lg hover:shadow-timberWolf/50 transition-all duration-300 border border-timberWolf/30 group-hover:border-timberWolf">
      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-timberWolf group-hover:text-battleGray transition-colors" />
    </div>
    <span className="mt-3 text-timberWolf text-sm font-poppins font-semibold group-hover:text-battleGray transition-colors text-center">
      {label}
    </span>
  </motion.a>
);

const ContentCreator = () => {
  const socialLinks = [
    {
      label: "YouTube",
      url: "https://www.youtube.com/@majdst_codes",
      icon: ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      url: "https://www.tiktok.com/@majdst_codes",
      icon: ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.9 2.9 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.54-.05z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      url: "https://github.com/Majdsayedtaha",
      icon: ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/majd-sayed-taha",
      icon: ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.25-.129.599-.129.948v5.42h-3.553s.047-8.733 0-9.646h3.553v1.364c.429-.661 1.196-1.604 2.906-1.604 2.108 0 3.689 1.379 3.689 4.343v5.543zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.962-1.704 1.194 0 1.924.753 1.944 1.704 0 .946-.75 1.704-1.991 1.704zm1.958 10.019H3.379V9.806h3.916v9.646zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.729C24 .774 23.203 0 22.224 0z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/majdst_codes",
      icon: ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <rect x="2.17" y="2.17" width="19.66" height="19.66" rx="4.58" ry="4.58" fill="none" stroke="currentColor" strokeWidth="1.41" />
          <path d="M12 8.7a3.3 3.3 0 1 0 3.3 3.3A3.3 3.3 0 0 0 12 8.7z" fill="currentColor" />
          <circle cx="18.37" cy="5.63" r="0.85" fill="currentColor" />
        </svg>
      ),
    },
  ];



  return (
    <div className="relative z-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Content & Community</p>
        <h2 className={styles.sectionHeadTextLight}>Content Creator.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Beyond development, I share my knowledge and insights with the tech community
        through multiple platforms. Follow my journey as I create educational content,
        share coding tips, and showcase exciting projects.
      </motion.p>

      {/* Social Links Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8"
      >
        {socialLinks.map((social, index) => (
          <SocialLink
            key={social.label}
            {...social}
            delay={index * 0.1}
          />
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-12 text-center"
      >
        <p className="text-taupe text-base sm:text-lg font-poppins mb-8">
          Follow me on social media to stay updated with my latest content and projects!
        </p>
        <button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 
            rounded-lg bg-gradient-to-r from-timberWolf to-platinum text-jet 
            font-bold font-beckman hover:shadow-lg hover:shadow-timberWolf/50 
            transition-all duration-300 hover:scale-105"
        >
          Get In Touch
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContentCreator, "content");