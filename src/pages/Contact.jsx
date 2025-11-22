import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const centers = [
    {
      name: "Central Tool Room and Training Centre (CTTC), Bhubaneswar",
      address: "B-36, Chandaka Industrial Area, Bhubaneswar‑751024, Odisha, India",
      locationUrl: "https://www.mappls.com/68qog2",
      phone: ["+916742654700", "+916742654701", "+916742654772"],
      fax: "91-674-2654768",
      email: "cttc@cttc.gov.in",
    },
    {
      name: "CTTC Extension Centre, Rayagada",
      address: "UGMIT Campus, Behind S.P. Office, Rayagada‑765001, Odisha, India",
      locationUrl: "https://www.cttc.gov.in/extenssion.html#rayagada",
      phone: ["+919437147392", "+919853956033"],
      email: "cttc@cttc.gov.in",
    },
    {
      name: "CTTC Extension Centre, Kalinga Nagar",
      address: "Jajpur Cluster Development Ltd Campus, Pankapal, Kalinganagar, Jajpur‑755026, Odisha, India",
      locationUrl: "https://www.cttc.gov.in/extenssion.html#kalinganagar",
      phone: ["+919861184500", "+918480154204"],
      email: "kalinganagarcttc@gmail.com",
    },
    {
      name: "CTTC Extension Centre, Berhampur",
      address: "Khodasingi, Near Industrial Training Institute, Berhampur‑760010, Ganjam, Odisha, India",
      locationUrl: "https://www.cttc.gov.in/extenssion.html#berhampur",
      phone: ["7008422867", "8456861950", "9337637302"],
      email: "bamcttc@gmail.com",
    },
    {
      name: "CTTC Extension Centre, Bhawanipatna",
      address: "SDEC Building, Govt. ITI Campus, Bhawanipatna, Kalahandi‑766001, Odisha, India",
      locationUrl: "https://www.cttc.gov.in/extenssion.html#bhawanipatna",
      phone: ["+919776319872", "+917978474366"],
      email: "cttc.bwipec@gmail.com",
    },
    {
      name: "CTTC Extension Centre, Keonjhar",
      address: "Orissa School of Mining Engineering Campus, Dist‑Keonjhar, Pin‑758001, Odisha, India",
      locationUrl: "https://www.cttc.gov.in/extenssion.html#keonjhar",
      phone: ["+917326026249"],
      email: "pabitramohan99@gmail.com",
    },
    {
      name: "CTTC Extension Centre, Balasore",
      address: "SDEC Building (Government ITI Campus), OT Road, Angaragadia, Dist‑Balasore, Odisha, Pin‑756001, India",
      locationUrl: "https://www.cttc.gov.in/extenssion.html#balasore",
      phone: ["+919437013103"],
      email: "cttc.bec@gmail.com",
    },
  ];

  const departments = [
    { name: "Training Department", number: "0674-2654742/743" },
    { name: "Marketing Department", number: "0674-2654712" },
    { name: "Purchase Department", number: "0674-2654710" },
    { name: "Production Department", number: "0674-2654715" },
    { name: "Reception", number: "0674-2654700/770" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-[80px] pb-20 bg-gradient-to-br from-gray-100 via-white to-sky-100 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Working Hours */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <p className="text-gray-700">Working Days/Hours: Monday to Saturday : 09:00 AM to 05:30 PM</p>
          <p className="text-gray-700">Weekly Holidays: All Sundays</p>
          <p className="text-gray-700">Holidays in 2025...</p>
        </motion.div>

        {/* Centers */}
        <div className="space-y-4">
          {centers.map((center, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{center.name}</h2>
                <p className="mb-2 text-gray-700">
                  Location:{" "}
                  <a
                    href={center.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline break-words"
                  >
                    {center.address}
                  </a>
                </p>
                <p className="mb-2 text-gray-700">
                  Phone:{" "}
                  {center.phone.map((p, i) => (
                    <a
                      key={i}
                      href={`tel:${p}`}
                      className="text-sky-600 hover:underline mr-2"
                    >
                      {p}
                    </a>
                  ))}
                </p>
                {center.fax && <p className="mb-2 text-gray-700">Fax: {center.fax}</p>}
                <p className="text-gray-700">
                  E-mail:{" "}
                  <a
                    href={`mailto:${center.email}`}
                    className="text-sky-600 hover:underline break-words"
                  >
                    {center.email}
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div className="my-8" variants={itemVariants}>
          <hr className="border-gray-300" />
        </motion.div>

        {/* Departments */}
        <motion.h2
          className="text-xl sm:text-2xl font-semibold mb-4 text-center"
          variants={itemVariants}
        >
          Department Contact Numbers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {departments.map((dept, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white shadow-md rounded-lg p-4 text-center">
                <p className="font-semibold">{dept.name}</p>
                <a
                  href={`tel:${dept.number}`}
                  className="text-sky-600 hover:underline break-words"
                >
                  {dept.number}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
