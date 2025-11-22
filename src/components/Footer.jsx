import React from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <Facebook />, url: "https://facebook.com" },
  { icon: <Twitter />, url: "https://twitter.com" },
  { icon: <Instagram />, url: "https://instagram.com" },
  { icon: <LinkedIn />, url: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <Box
      component={motion.div}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        py: 3,
        bgcolor: "#0a1f44", // match your nav color
        color: "white",
        textAlign: "center",
        mt: 0, // no extra gap
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          CTTC Exam Portal
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Your one-stop platform for exam management and mock tests.
        </Typography>

        <Box>
          {socialLinks.map((item, index) => (
            <IconButton
              key={index}
              component="a"
              href={item.url}
              target="_blank"
              rel="noopener"
              sx={{
                color: "white",
                transition: "0.3s",
                "&:hover": { color: "#00bcd4", transform: "scale(1.2)" },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>

        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          &copy; {new Date().getFullYear()} CTTC Exam Portal. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
