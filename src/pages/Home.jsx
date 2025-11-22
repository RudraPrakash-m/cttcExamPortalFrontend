import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RoleButton from "../components/role_of_user/RoleButton";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import Loading from "../components/loading/Loading";

const Home = () => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [roleStatus, setRoleStatus] = useState("");

  const { isLoaded, user } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const email = user.emailAddresses?.[0]?.emailAddress || "";
    const { id, fullName } = user;

    setUserData({
      id: id || "",
      name: fullName || "",
      email,
    });
  }, [isLoaded, user]);

  useEffect(() => {
    if (!userData.id) return;

    const findRole = async () => {
      setIsLoading(true);
      try {
        const result = await axios.post(
          "http://localhost:8080/api/findrole",
          userData
        );

        if (result.data.role && result.data.role !== "none") {
          localStorage.setItem("userRole", result.data.role);

          setUserRole(result.data.role);
        } else if (result.data.role === "none") {
          setRoleStatus("not_registered");
        }
      } catch (error) {
        setRoleStatus("error");
      } finally {
        setIsLoading(false);
      }
    };

    findRole();
  }, [userData]);

  // Show loading state only when Clerk is loading OR when we're fetching role
  if (!isLoaded || (userData.id && isLoading)) {
    return <Loading />;
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(135deg, #f3f4f6 0%, #ffffff 50%, #e0f2fe 100%)",
      }}
    >
      <div className="max-w-3xl text-center">
        {/* Show status messages */}
        {roleStatus === "not_registered" && (
          <motion.div
            className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Please complete your registration to access all features.
          </motion.div>
        )}

        {roleStatus === "error" && (
          <motion.div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Error loading user information. Please try again.
          </motion.div>
        )}

        {user?.fullName && (
          <motion.div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome {user?.fullName}
          </motion.div>
        )}

        <motion.h1
          className="text-5xl font-extrabold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Exam Portal for CTTC
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          CTTC Bhubaneswar delivers industry-focused training in Tool Design...
        </motion.p>

        <motion.p
          className="text-xl text-gray-700 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Empowering thousands of students with practical skills.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-blue-700 mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          "Empowering Skills. Enhancing Futures."
        </motion.h2>

        <RoleButton />
      </div>
    </div>
  );
};

export default Home;
