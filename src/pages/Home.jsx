import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gavel,
  Scale,
  Building2,
  Users,
  FileText,
  Briefcase,
  ArrowRight,
  Award,
  Clock,
  CheckCircle2,
} from "lucide-react";

// Hero images
const images = [
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80",
  "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740830904/hero1_rubmey.jpg",
  "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740830979/hero2_win0bn.jpg",
];

// Practice areas data
const practiceAreas = [
  {
    title: "Corporate Law",
    icon: <Building2 size={32} />,
    description: "Expert guidance in corporate governance and business law",
  },
  {
    title: "Litigation",
    icon: <Gavel size={32} />,
    description: "Strategic representation in complex legal disputes",
  },
  {
    title: "Intellectual Property",
    icon: <Scale size={32} />,
    description: "Protection and enforcement of intellectual property rights",
  },
  {
    title: "Employment Law",
    icon: <Users size={32} />,
    description: "Comprehensive employment and labor law solutions",
  },
];

// Attorneys data
const attorneys = [
  {
    name: "Sarah Johnson",
    position: "Corporate Law",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Chen",
    position: "Intellectual Property",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Elena Rodriguez",
    position: "International Law",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
];

// Stats data
const stats = [
  { value: "25+", label: "Years of Experience", icon: <Clock size={32} /> },
  {
    value: "500+",
    label: "Successful Cases",
    icon: <CheckCircle2 size={32} />,
  },
  { value: "50+", label: "Expert Attorneys", icon: <Users size={32} /> },
  { value: "15+", label: "Industry Awards", icon: <Award size={32} /> },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

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
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${images[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
          }}
        />

        {/* Hero Content */}
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#FFFFFF",
            textAlign: "center",
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Excellence in <br />
              <Box component="span" sx={{ color: "#AC835C" }}>
                Legal Practice
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Playfair Display",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                maxWidth: "800px",
                mx: "auto",
                mb: 4,
              }}
            >
              Providing exceptional legal services with integrity and
              professionalism, while maintaining the highest standards of
              ethical conduct and client advocacy.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Button
                component={Link}
                to="/practice-areas"
                variant="contained"
                sx={{
                  bgcolor: "#AC835C",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 500,
                  borderRadius: 3,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#8a6a4a",
                  },
                }}
              >
                Our Services
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 500,
                  borderRadius: 3,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#AC835C",
                    bgcolor: "rgba(172, 131, 92, 0.1)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#FFFFFF" }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
              >
                <Box
                  component="img"
                  src="https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740830947/about-01_ixkjbe.jpg"
                  alt="Law Firm Office"
                  sx={{
                    width: "100%",
                    height: { xs: "300px", md: "450px" },
                    objectFit: "cover",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "#AC835C",
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    lineHeight: 1.2,
                  }}
                >
                  A Legacy of Excellence 
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    mb: 3,
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}
                >
                  Founded in 1985, our firm has established itself as a leader
                  in corporate and commercial law. We combine decades of
                  experience with innovative approaches to deliver exceptional
                  results for our clients.
                </Typography>
                <Box sx={{ mb: 4 }}>
                  {[
                    "Expert legal representation across multiple practice areas",
                    "Personalized approach tailored to each client's unique needs",
                    "Commitment to ethical practice and professional excellence",
                  ].map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    >
                      <CheckCircle2
                        size={20}
                        color="#AC835C"
                        style={{ marginRight: 10 }}
                      />
                      <Typography sx={{ color: "#333" }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button
                component={Link}
                to="/about"
                variant="outlined"
                sx={{
                  borderColor: "#AC835C",
                  color: "#AC835C",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 500,
                  borderRadius: 3,
                  textTransform: "none",
                  "&:hover": {
                    color:'white',
                    borderColor: "#AC835C",
                    bgcolor: "#AC835C",
                  },
                }}
              >
                Learn More About Us
              </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: "#F5F5F5" }}>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div variants={fadeIn}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        p: 3,
                        boxShadow: "none",
                        bgcolor: "transparent",
                        border: "1px solid #E0E0E0",
                      }}
                    >
                      <Box sx={{ color: "#AC835C", mb: 2 }}>{stat.icon}</Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "Playfair Display",
                          fontWeight: 700,
                          color: "#000",
                          mb: 1,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Practice Areas Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#FFFFFF" }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
            
              <Typography
                variant="h3"
                sx={{
                  color:'#AC835C',
                  fontFamily: "Playfair Display",
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Practice Areas
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  maxWidth: "800px",
                  mx: "auto",
                  fontSize: "1.1rem",
                }}
              >
                Our firm specializes in a wide range of legal services to meet
                the diverse needs of our clients.
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <Grid container spacing={3}>
              {practiceAreas.map((area, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={fadeIn}>
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      variants={cardHover}
                    >
                      <Card
                        component={Link}
                        to="/practice-areas"
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          bgcolor: "#F5F5F5",
                          boxShadow: "none",
                          transition: "all 0.3s ease",
                          textDecoration: "none",
                          "&:hover": {
                            bgcolor: "#000",
                            "& .title, & .description": {
                              color: "#FFF",
                            },
                            "& .icon": {
                              color: "#AC835C",
                            },
                          },
                        }}
                      >
                        <CardContent sx={{ p: 4, flexGrow: 1 }}>
                          <Box
                            className="icon"
                            sx={{
                              color: "#AC835C",
                              mb: 2,
                              transition: "color 0.3s ease",
                            }}
                          >
                            {area.icon}
                          </Box>
                          <Typography
                            className="title"
                            variant="h5"
                            sx={{
                              fontFamily: "Playfair Display",
                              fontWeight: 600,
                              mb: 2,
                              color: "#000",
                              transition: "color 0.3s ease",
                            }}
                          >
                            {area.title}
                          </Typography>
                          <Typography
                            className="description"
                            sx={{
                              color: "#555",
                              transition: "color 0.3s ease",
                            }}
                          >
                            {area.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <Box sx={{ textAlign: "center", mt: 5 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <Button
                component={Link}
                to="/practice-areas"
                variant="outlined"
                sx={{
                  borderColor: "#AC835C",
                  color: "#AC835C",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 500,
                  borderRadius: 3,
                  textTransform: "none",
                  "&:hover": {
                    color:'white',
                    borderColor: "#AC835C",
                    bgcolor: "#AC835C",
                  },
                }}
              >
                View All Practice Areas
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740830885/12_l90fyd.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <Box
              sx={{
                textAlign: "center",
                color: "white",
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  lineHeight: 1.3,
                }}
              >
                All people are equal before the law.{" "}
                <Box component="span" sx={{ color: "#AC835C" }}>
                  A good attorney
                </Box>{" "}
                is what makes a difference.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                }}
              >
                Our team of experienced attorneys is ready to help you navigate
                complex legal challenges. Schedule a consultation today to
                discuss your case.
              </Typography>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  bgcolor: "#AC835C",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 500,
                  borderRadius: 3,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#8a6a4a",
                  },
                }}
              >
                Schedule a Consultation
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Attorneys Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#FFFFFF" }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
             
              <Typography
                variant="h3"
                sx={{
                  color:'#AC835C',
                  fontFamily: "Playfair Display",
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Meet Our Attorneys
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  maxWidth: "800px",
                  mx: "auto",
                  fontSize: "1.1rem",
                }}
              >
                Our team of experienced attorneys is dedicated to providing
                exceptional legal services.
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <Grid container spacing={4} justifyContent="center">
              {attorneys.map((attorney, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div variants={fadeIn}>
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      variants={cardHover}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <Box sx={{ position: "relative", paddingTop: "133%" }}>
                          <Box
                            component="img"
                            src={attorney.image}
                            alt={attorney.name}
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                        <CardContent sx={{ p: 3 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: "Playfair Display",
                              fontWeight: 600,
                              mb: 0.5,
                            }}
                          >
                            {attorney.name}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#AC835C",
                              fontWeight: '500',
                            }}
                          >
                            {attorney.position}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <Box sx={{ textAlign: "center", mt: 5 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <Button
                component={Link}
                to="/attorneys"
                variant="outlined"
                sx={{
                  borderColor: "#AC835C",
                  color: "#AC835C",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 500,
                  borderRadius: 3,
                  textTransform: "none",
                  "&:hover": {
                    color:'white',
                    borderColor: "#AC835C",
                    bgcolor: "#AC835C",
                  },
                }}
              >
                View All Attorneys
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
