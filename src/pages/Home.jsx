import React from "react";
import { motion } from "framer-motion";
import RoleButton from "../components/role_of_user/RoleButton";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: "linear-gradient(135deg, #f3f4f6 0%, #ffffff 50%, #e0f2fe 100%)",
      }}
    >
      {/* Hero Section */}
      <div className="max-w-3xl text-center">
        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Exam Portal for CTTC
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          CTTC Bhubaneswar delivers industry-focused training in Tool Design,
          CNC, CAD/CAM, and Industrial Automation while supporting MSMEs through
          advanced tooling and precision manufacturing.
        </motion.p>

        <motion.p
          className="text-xl text-gray-700 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Empowering thousands of students with practical, job-ready skills.
        </motion.p>

        {/* Tagline */}
        <motion.h2
          className="text-2xl font-semibold text-blue-700 mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          “Empowering Skills. Enhancing Futures.”
        </motion.h2>

        <RoleButton/>
      </div>
    </div>
  );
};

export default Home;
