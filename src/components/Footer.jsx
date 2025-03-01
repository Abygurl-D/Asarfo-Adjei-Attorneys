import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* Contact Section */}

      {/* Main Footer */}
      <Box sx={{ bgcolor: "#000000", color: "white", pt: 8, pb: 4 }}>
        <Container>
          <Grid container spacing={4}>
            {/* Logo & About */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#AC835C",
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    fontSize: "1.5rem",
                    lineHeight: 1.2,
                  }}
                >
                  Asarfo-Adjei
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#AC835C",
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    fontSize: "1.5rem",
                  }}
                >
                  Attorneys
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "#AAAAAA",
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                We are a premier law firm committed to delivering exceptional
                legal services in corporate law, litigation, intellectual
                property, and more. Our experienced attorneys work diligently to
                ensure the best outcomes for our clients.
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                {[
                  { icon: <Facebook size={18} />, url: "https://facebook.com" },
                  { icon: <Twitter size={18} />, url: "https://twitter.com" },
                  {
                    icon: <Instagram size={18} />,
                    url: "https://instagram.com",
                  },
                  { icon: <Linkedin size={18} />, url: "https://linkedin.com" },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                      "&:hover": {
                        bgcolor: "#AC835C",
                      },
                    }}
                    size="small"
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: 600,
                  mb: 3,
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 2,
                    bgcolor: "#AC835C",
                  },
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Practice Areas", path: "/practice-areas" },
                  { name: "Attorneys", path: "/attorneys" },
                  { name: "Case Study", path: "/case-study" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to={link.path}
                    sx={{
                      color: "#AAAAAA",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#AC835C",
                        "& .arrow": {
                          transform: "translateX(3px)",
                        },
                      },
                    }}
                  >
                    <ArrowRight
                      size={14}
                      className="arrow"
                      style={{
                        marginRight: 8,
                        transition: "transform 0.3s ease",
                      }}
                    />
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Practice Areas */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: 600,
                  mb: 3,
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 2,
                    bgcolor: "#AC835C",
                  },
                }}
              >
                Practice Areas
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  "Corporate Law",
                  "Litigation",
                  "Intellectual Property",
                  "Employment Law",
                  "Contract Law",
                ].map((area, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to="/practice-areas"
                    sx={{
                      color: "#AAAAAA",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#AC835C",
                        "& .arrow": {
                          transform: "translateX(3px)",
                        },
                      },
                    }}
                  >
                    <ArrowRight
                      size={14}
                      className="arrow"
                      style={{
                        marginRight: 8,
                        transition: "transform 0.3s ease",
                      }}
                    />
                    {area}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: 600,
                  mb: 3,
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 2,
                    bgcolor: "#AC835C",
                  },
                }}
              >
                Contact Us
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {[
                  {
                    icon: <MapPin size={20} />,
                    text: "123 Legal Street, Accra, Ghana",
                  },
                  {
                    icon: <Phone size={20} />,
                    text: "+233 (0) 302 123 456",
                    link: "tel:+2330302123456",
                  },
                  {
                    icon: <Mail size={20} />,
                    text: "info@asarfoadjei.com",
                    link: "mailto:info@asarfoadjei.com",
                  },
                ].map((item, index) => (
                  <Box key={index} sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{
                        color: "#AC835C",
                        mt: 0.5,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      component={item.link ? "a" : "p"}
                      href={item.link}
                      sx={{
                        color: "#AAAAAA",
                        textDecoration: "none",
                        "&:hover": {
                          color: item.link ? "#AC835C" : "#AAAAAA",
                        },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Newsletter */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Subscribe to Our Newsletter
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <TextField
                    placeholder="Your Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "rgba(255,255,255,0.05)",
                        "& fieldset": {
                          borderColor: "rgba(255,255,255,0.1)",
                        },
                        "&:hover fieldset": {
                          borderColor: "rgba(255,255,255,0.2)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#AC835C",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: "#AC835C",
                      minWidth: "auto",
                      "&:hover": {
                        bgcolor: "#8a6a4a",
                      },
                    }}
                  >
                    <Send size={18} />
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 4 }} />

          {/* Copyright */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", sm: "center" },
              gap: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#AAAAAA",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              © {new Date().getFullYear()} Asarfo-Adjei Attorneys. All Rights
              Reserved.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
              }}
            >
              {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
                (item, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to="#"
                    sx={{
                      color: "#AAAAAA",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "#AC835C",
                      },
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* WhatsApp Button */}
      <Box
        component="a"
        href="https://wa.me/2330302123456"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          bgcolor: "#AC835C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 455 455"
          fill="white"
        >
          <path d="M419.967,162.004c-21.894-21.728-52.521-37.201-86.24-43.57c-4.069-0.766-7.993,1.908-8.762,5.978c-0.769,4.07,1.907,7.993,5.978,8.762C395.154,145.302,440,189.928,440,241.696c0,42.636-30.352,80.956-79.21,100.006c-2.494,0.973-4.281,3.201-4.688,5.847c-2.964,19.25,1.082,38.841,10.969,55.161c-21.588-5.766-39.074-22.333-45.875-44.782c-1.028-3.394-4.302-5.61-7.827-5.297c-5.297,0.46-10.636,0.694-15.869,0.694c-46.659,0-90.456-18-117.157-48.151c-2.745-3.101-7.485-3.389-10.587-0.643c-3.101,2.746-3.389,7.486-0.643,10.587c29.504,33.316,77.5,53.207,128.387,53.207c3.738,0,7.524-0.11,11.313-0.328c5.437,14.023,14.79,26.508,26.772,35.604c14.075,10.685,30.851,16.332,48.512,16.332c3.027,0,5.757-1.82,6.922-4.614s0.536-6.014-1.594-8.165c-13.83-13.961-20.775-33.575-19.005-53.169c24.22-10.168,44.756-25.233,59.594-43.76C446.36,289.816,455,266.12,455,241.696C455,212.727,442.559,184.425,419.967,162.004z" />
          <path d="M315,161.696c0-34.155-16.61-66.156-46.771-90.109c-29.653-23.55-68.978-36.519-110.729-36.519c-41.754,0-81.08,12.969-110.731,36.519C16.609,95.54,0,127.541,0,161.696c0,24.424,8.64,48.121,24.985,68.529c14.838,18.526,35.375,33.592,59.594,43.76c1.77,19.594-5.175,39.208-19.005,53.169c-2.13,2.15-2.759,5.371-1.594,8.165s3.896,4.614,6.922,4.614c17.662,0,34.437-5.647,48.512-16.332c11.982-9.095,21.335-21.581,26.772-35.604c3.789,0.218,7.575,0.328,11.313,0.328c41.752,0,81.077-12.969,110.729-36.519C298.39,227.852,315,195.851,315,161.696zM141.631,272.63c-3.536-0.309-6.799,1.902-7.827,5.297c-6.801,22.448-24.286,39.015-45.875,44.781c9.887-16.319,13.933-35.911,10.969-55.161c-0.407-2.646-2.194-4.874-4.688-5.847C45.352,242.652,15,204.332,15,161.696c0-61.552,63.925-111.628,142.5-111.628c78.575,0,142.5,50.076,142.5,111.628c0,61.552-63.925,111.628-142.5,111.628C152.267,273.324,146.928,273.091,141.631,272.63z" />
        </svg>
      </Box>
    </Box>
  );
};

export default Footer;
