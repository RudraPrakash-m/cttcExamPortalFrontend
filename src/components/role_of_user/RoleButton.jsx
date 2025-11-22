import React from "react";
import { Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const RoleButton = () => {
  return (
    <Stack
      direction="row"
      spacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 4 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Button variant="contained" color="primary" size="large">
          Start Exam
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Button variant="outlined" color="secondary" size="large">
          Take Exams
        </Button>
      </motion.div>
    </Stack>
  );
};

export default RoleButton;
