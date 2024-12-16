import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "@fontsource/roboto"; // Custom font
import aiImage from "../images/ai.png";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen flex flex-col  dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Header */}
        <header className=" dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-50  bg-gradient-to-r  from-blue-500 to-purple-600">
          <div className="container mx-auto py-4 flex justify-between items-center">
            {/* Centered VAGMI Logo */}
            <div className="flex-1 text-center">
              <motion.h1
                className="text-5xl text-white  font-extrabold tracking-wide "
                style={{ fontFamily: "'Roboto', sans-serif" }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; VAGMI
              </motion.h1>
            </div>

            {/* Dark Mode Toggle and Get Started */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-sm bg-gray-600 dark:bg-gray-500 text-white px-4 py-2 rounded-full"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <Link
                to="/write"
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>

        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6 text-center">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold mb-4">
              Write Better, Faster, and Smarter
            </h2>
            <p className="text-lg mb-8">
              Experience the ultimate writing assistant with AI-powered content generator,grammar check and humanizing the text.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12">
              Features That Empower Your Writing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <Link to={"/write"}>
                <Feature
                  title="Content Generation"
                  description="AI-powered suggestions to generate content for writers."
                  icon={<FaCheckCircle className="text-blue-500 text-4xl" />}
                />
              </Link>
              <Link to={"/write1"}>
                <Feature
                  title="Check Grammar"
                  description="Advanced tools to catch even the trickiest grammar and spelling errors."
                  icon={<FaCheckCircle className="text-green-500 text-4xl" />}
                />
              </Link>
              <Link to={"/write2"}>
                <Feature
                  title="Humanize"
                  description="Effortlessly humainze your given story."
                  icon={<FaCheckCircle className="text-purple-500 text-4xl" />}
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-white dark:bg-gray-900">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8">
              Trusted by Thousands of Writers
            </h3>
            <p className="text-lg italic mb-4">
              "This AI assistant has transformed the way I write. It's like
              having an editor in my pocket!"
            </p>
            <p>- Alex, Content Creator</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto text-center">
            <p>
              VAGMI © {new Date().getFullYear()} | All Rights Reserved
            </p>
            <p className="mt-4">
              Follow us on{" "}
              <a href="#" className="underline">
                Twitter
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                LinkedIn
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

const Feature = ({ title, description, icon }) => (
  <motion.div
    className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="mb-6">{icon}</div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p>{description}</p>
  </motion.div>
);

export default Home;
