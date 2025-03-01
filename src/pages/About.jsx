import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Building2, BookOpen, Quote } from "lucide-react";

const partners = [
  {
    name: "Augustine Asarfo Adjei",
    role: "Managing Partner",
    specialty: "Corporate Law",
    image:
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=500",
    bio: "With over 14 years of experience in corporate law, Augustine leads our firm's strategic direction and corporate practice.",
    quote: "Excellence is not an act, but a habit in legal practice.",
  },
  {
    name: "Ebenezer Asare",
    role: "Partner",
    specialty: "Litigation",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
    bio: "A distinguished litigator with a proven track record of handling complex commercial disputes.",
    quote: "Justice is not just our profession, it's our passion.",
  },
  {
    name: "Raphael Tawiah Gyambrah",
    role: "Partner",
    specialty: "Transaction Advisory",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=500",
    bio: "Providing strategic transaction advisory with expertise in mergers, acquisitions, and corporate restructuring.",
    quote:
      "Guiding businesses through complex transactions with clarity and precision.",
  },
];

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const PartnerCard = ({ partner }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: "relative",
        height: 400,
        overflow: "hidden",
        bgcolor: "transparent",
        cursor: "pointer",
      }}
    >
      <Box
        component="img"
        src={partner.image}
        alt={partner.name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: isHovered ? "brightness(0.2)" : "brightness(1)",
          transition: "filter 0.5s ease",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 3,
          color: "white",
          transition: "transform 0.5s ease",
          transform: isHovered ? "translateY(0)" : "translateY(70%)",
        }}
      >
        <Typography variant="h5" gutterBottom fontFamily="Playfair Display">
          {partner.name}
        </Typography>
        <AnimatePresence>
          {isHovered && (
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Typography variant="subtitle1" color="#AC835C" gutterBottom>
                {partner.role} • {partner.specialty}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {partner.bio}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Quote size={20} color="#AC835C" />
                <Typography variant="body2" fontStyle="italic">
                  {partner.quote}
                </Typography>
              </Box>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    </MotionCard>
  );
};

const About = () => {
  return (
    <Box>
      {/* Banner Section (Black) */}
      <Box
        sx={{
          position: "relative",
          height: "50vh",
          bgcolor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200"
          alt="Law Firm"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.4,
          }}
        />
        <Container
          maxWidth="lg"
          sx={{ height: "100%", position: "relative", zIndex: 1 }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              pt: { xs: 8, sm: 9 },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "white",
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                lineHeight: 1.2,
              }}
            >
              Who{" "}
              <Box component="span" sx={{ color: "#AC835C" }}>
                We Are
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Firm History Section (White) */}
      <Box sx={{ bgcolor: "white", py: 15 }}>
        <Container>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" fontFamily="playfair dispaly">
                  Our{" "}
                  <Box component="span" sx={{ color: "#AC835C" }}>
                    Legacy
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="playfair dispaly"
                  fontSize={"20px"}
                  sx={{ mb: 4 }}
                >
                  Since our founding in 1985, Mitchell Thompson & Associates has
                  been at the forefront of legal innovation and excellence. Our
                  journey began with a simple yet powerful vision: to provide
                  unparalleled legal services while maintaining the highest
                  standards of professional integrity.
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="playfair dispaly"
                  fontSize={"20px"}
                >
                  Through decades of dedicated service, we have grown from a
                  small practice into one of the region's most respected law
                  firms, serving clients across multiple industries and
                  jurisdictions.
                </Typography>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                component="img"
                src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=800"
                alt="Firm History"
                sx={{
                  width: "100%",
                  height: 500,
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vision & Future Section (Black) */}
      <Box sx={{ bgcolor: "black", color: "white", py: 15 }}>
        <Container>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                component="img"
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800"
                alt="Vision"
                sx={{
                  width: "100%",
                  height: 500,
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" fontFamily="playfair dispaly">
                  Our{" "}
                  <Box component="span" sx={{ color: "#AC835C" }}>
                    Vision
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="playfair dispaly"
                  fontSize={"20px"}
                  sx={{ mb: 4 }}
                >
                  Looking ahead, we envision a future where legal services are
                  more accessible, efficient, and aligned with the evolving
                  needs of our clients. We are investing in cutting-edge legal
                  technology and developing innovative solutions to address
                  tomorrow's challenges.
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="playfair dispaly"
                  fontSize={"20px"}
                >
                  Our commitment to excellence drives us to continuously adapt
                  and grow, ensuring that we remain at the forefront of legal
                  practice while maintaining the personal touch that has defined
                  our firm for generations.
                </Typography>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Leadership Message Section (White) */}
      <Box sx={{ bgcolor: "white", py: 15 }}>
        <Container>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" fontFamily="playfair dispaly">
                  A Message from Our{" "}
                  <Box component="span" sx={{ color: "#AC835C" }}>
                    President
                  </Box>
                </Typography>
                <Box sx={{ display: "flex", gap: 2, my: 4 }}>
                  <Quote size={40} color="#AC835C" />
                  <Typography
                    variant="body1"
                    fontSize={"20px"}
                    fontFamily="playfair dispaly"
                    sx={{ fontStyle: "italic" }}
                  >
                    Our success is built on the trust of our clients and the
                    dedication of our team. We are committed to maintaining the
                    highest standards of legal excellence while fostering
                    innovation and growth in our practice.
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  color="#AC835C"
                  fontFamily={"playfair display"}
                  fontSize={"18px"}
                >
                  Augustine Asarfo Adjei
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontFamily={"playfair display"}
                  fontSize={"18px"}
                >
                  Managing Partner & President
                </Typography>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                component="img"
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=800"
                alt="President"
                sx={{
                  width: "100%",
                  height: 600,
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Partner Gallery Section (Black) */}
      <Box sx={{ bgcolor: "white", py: 15 }}>
        <Container>
          <Typography
            variant="h2"
            fontFamily="playfair dispaly"
            color="black"
            align="center"
            sx={{ mb: 8 }}
          >
            Our{" "}
            <Box component="span" sx={{ color: "#AC835C" }}>
              Partners
            </Box>
          </Typography>
          <Grid container spacing={4}>
            {partners.map((partner, index) => (
              <Grid item xs={12} md={4} key={index}>
                <PartnerCard partner={partner} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
