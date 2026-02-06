import React, { Component } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Canvas Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-full p-3">
          <img
            src={this.props.fallbackIcon}
            alt="tech icon"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      );
    }

    return this.props.children;
  }
}

const Tech = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <motion.div variants={textVariant()} className="w-full px-4 sm:px-8">
        <p className={`${styles.sectionSubTextLight}`}>My skills</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Technologies.</h2>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6 mt-10 sm:mt-14 justify-items-center">
          {technologies.map((technology) => (
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center"
              key={technology.name}
              title={technology.name}
            >
              <ErrorBoundary fallbackIcon={technology.icon}>
                <BallCanvas icon={technology.icon} />
              </ErrorBoundary>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
