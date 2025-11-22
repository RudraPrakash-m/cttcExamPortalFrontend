import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Expert Faculty",
      description:
        "Industry professionals providing hands-on training and guidance.",
    },
    {
      title: "Advanced Equipment",
      description:
        "State-of-the-art tools, machines, and laboratories for practical learning.",
    },
    {
      title: "Practical Training",
      description:
        "Hands-on workshops, project-based learning, and real-world simulations.",
    },
    {
      title: "Career Support",
      description:
        "Guidance and placement support to help you start your professional journey.",
    },
  ];

  const stats = [
    { number: "11.3 Acres", label: "Campus Area" },
    { number: "500+", label: "Students Trained" },
    { number: "100+", label: "Projects Completed" },
    { number: "25+", label: "Years of Expertise" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../public/HOLIDAY-2025.pdf";
    link.download = "Holiday_Schedule.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-24 px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Bridging Industry & Skilled Professionals
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
          Central Tool Room & Training Centre (CTTC), Bhubaneswar is a premier
          institute offering training, design, consultancy, and manufacturing
          services. Our focus is on producing skilled professionals for the
          modern engineering and industrial landscape.
        </p>

        {/* Subtle Holiday PDF Download Button */}
        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-blue-100 text-blue-700 px-6 py-2 rounded-lg font-medium text-sm hover:bg-blue-200 transition-colors duration-300"
        >
          Download Holiday PDF
        </motion.button>
      </motion.div>

      {/* Features Section */}
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 flex flex-col items-center text-center rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            <div className="text-blue-600 mb-4 text-4xl">⭐</div>{" "}
            {/* placeholder icon */}
            <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div className="grid md:grid-cols-4 gap-8 mb-24 bg-white p-12 rounded-3xl shadow-2xl border border-gray-200 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <h3 className="text-blue-600 font-black mb-2 text-2xl">
              {stat.number}
            </h3>
            <p className="text-gray-600 font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div className="text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-white font-bold text-3xl mb-6">
            Join CTTC Today
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Become a part of the next generation of skilled professionals in
            manufacturing, tool engineering, and industrial automation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-50 transition-colors duration-300"
            onClick={() => navigate("/")}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
