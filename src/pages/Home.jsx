import { useState, useEffect } from "react";
import { Link, } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import GavelIcon from "@mui/icons-material/Gavel"; // Icon for hero section

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ fontFamily: `"Playfair Display", serif`, overflowX: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Image Slider */}
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt="Law Firm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
          />
        </AnimatePresence>

        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
          }}
        />

        {/* Hero Text */}
        <Container
          sx={{
            position: "absolute",
            textAlign: "center",
            color: "#FFFFFF",
            zIndex: 2,
            maxWidth: "100vw",
          }}
        >
          {/* Icon + Title */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
            <Box
              sx={{
                backgroundColor: "#AC835C",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                mr: 1,
              }}
            >
              <GavelIcon sx={{ color: "#FFFFFF" }} />
            </Box>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ fontStyle: "italic",fontFamily:"Playfair Display", fontSize: "36px" }}
            >
              Reliable Legal Solution
            </Typography>
          </Box>

          {/* Subtitle */}
          <Typography variant="h2" sx={{ fontFamily:"Playfair Display",fontStyle: "italic", fontSize: "70px" }}>
            We are here for the <br />
            <Typography component="span" sx={{ color: "#AC835C",fontFamily:"Playfair Display", fontStyle: "italic", fontSize: "70px" }}>
              voice of justice.
            </Typography>
          </Typography>

          {/* Explore Firm Button */}
          <Button
          component={Link}
          to="/about"
            variant="outlined"
            sx={{
              mt: 3,
              borderColor: "#FFFFFF",
              color: "#FFFFFF",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "#AC835C", borderColor: "#AC835C" },
            }}
          >
            Explore Firm
          </Button>
        </Container>
      </Box>

      {/* Introduction Section */}
      <Container sx={{ py: 8, textAlign: "center", maxWidth: "100vw" }}>
        <Typography variant="h4" fontWeight="bold" fontFamily="Playfair Display" color="#AC835C" mb={2}>
          Welcome to Asarfo-Adjei Attorneys
        </Typography>
        <Typography variant="body1" color="black" fontFamily="Playfair Display" fontSize={"24px"} maxWidth="md" mx="auto">
          We are a premier law firm committed to delivering exceptional legal services in corporate law, litigation,
          intellectual property, and more. Our experienced attorneys work diligently to ensure the best outcomes for our clients.
        </Typography>
      </Container>

      {/* Get in Touch Section */}
      <Box
  sx={{
    position: "relative",
    width: "100%",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundImage: 'url("/images/contact-bg.jpg")', // Replace with actual image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    px: { xs: 3, md: 6 },
    overflowX: "hidden",
    boxSizing: "border-box",
  }}
>
  {/* Dark Overlay */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))",
    }}
  />

  {/* Left Section (Text) */}
  <Box sx={{ position: "relative", zIndex: 2, color: "#FFFFFF", flex: 1, pr: 2 }}>
    <Typography variant="h4" sx={{ fontStyle: "italic", fontFamily:"Playfair Display", fontSize: "36px" }}>
      All people are equal before the law.
    </Typography>
    <Typography variant="h4"  sx={{ fontStyle: "italic",fontFamily:"Playfair Display", fontSize: "36px", mt: 1 }}>
      <Typography component="span" sx={{ color: "#AC835C",fontFamily:"Playfair Display", fontStyle: "italic", fontWeight: "bold", fontSize: "36px" }}>
        A good attorney
      </Typography>{" "}
      is what makes a difference.
    </Typography>
  </Box>

  {/* Right Section (Phone Contact) */}
  <Box
    sx={{
      position: "relative",
      zIndex: 2,
      textAlign: "right",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    }}
  >
    <Box
      sx={{
        backgroundColor: "#AC835C",
        borderRadius: "50%",
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 1,
      }}
    >
      <PhoneIcon sx={{ color: "#FFFFFF", fontSize: "36px" }} />
    </Box>
    <Typography sx={{ fontWeight: "bold", color: "#AC835C", fontSize: "36px",fontFamily:"Playfair Display", fontStyle: "italic" }}>
      Get in Touch
    </Typography>
    <Typography sx={{ color: "#FFFFFF",fontFamily:"Playfair Display", fontSize: "36px" }}>
      +1 (234) 567-890
    </Typography>
  </Box>
</Box>

    </Box>
  );
};

export default Home;
