import React from "react";
import { Button, Stack, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useUser } from "@clerk/clerk-react";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const RoleButton = () => {
  const { isSignedIn } = useUser();

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      sx={{ mt: 6, width: "100%" }}
    >
      {isSignedIn ? (
        <MotionButton
          variant="contained"
          size="large"
          sx={{
            textTransform: "none",
            fontSize: "1.1rem",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: "12px",
            background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
            boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
        >
          Complete Your Profile
        </MotionButton>
      ) : (
        <Typography
          variant="body1"
          sx={{
            color: "#dc2626",
            fontWeight: 600,
            background: "#fee2e2",
            px: 3,
            py: 1,
            borderRadius: "10px",
          }}
        >
          Login first to continue
        </Typography>
      )}

      <MotionBox
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#1e3a8a",
            fontWeight: 500,
            opacity: 0.8,
          }}
        >
          You must complete your profile to unlock all features
        </Typography>
      </MotionBox>
    </Stack>
  );
};

export default RoleButton;
