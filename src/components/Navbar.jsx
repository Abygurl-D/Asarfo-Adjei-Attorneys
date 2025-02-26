import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Slide,
  Fade,
  Divider,
} from "@mui/material";
import { Menu as MenuIcon, Globe, ChevronDown, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine if we've scrolled past threshold
      setScrolled(currentScrollPos > 50);
      
      // Hide/show navbar on scroll
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageMenuOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleLanguageMenuClose();
  };

  const navLinks = [
    { name: t('home'), path: "/" },
    { name: t('about'), path: "/about" },
    { name: t('practiceAreas'), path: "/practice-areas" },
    { name: t('caseStudy'), path: "/case-study" },
  ];

  const pagesDropdown = [
    { name: t('testimonials'), path: "/testimonials" },
    { name: t('faqs'), path: "/faqs" },
  ];

  return (
    <Slide appear={false} direction="down" in={visible}>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.95)" : "#000000",
          borderBottom: scrolled 
            ? "none" 
            : "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: scrolled ? "60px" : "70px", sm: scrolled ? "70px" : "80px" },
              py: { xs: scrolled ? 0.5 : 1, sm: scrolled ? 1 : 1.5 },
              transition: "all 0.3s ease",
            }}
          >
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: { xs: 1, md: 0 },
                textDecoration: "none",
                gap: 1,
              }}
            >
              <Scale 
                size={isMobile ? 24 : 28} 
                color="#AB835C" 
                strokeWidth={1.5} 
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#AB835C",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 600,
                    fontSize: { xs: "1.1rem", sm: "1.3rem" },
                    lineHeight: 1.2,
                    letterSpacing: "0.02em",
                  }}
                >
                  Asarfo-Adjei
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#AB835C",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 500,
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    letterSpacing: "0.02em",
                  }}
                >
                  Attorneys
                </Typography>
              </Box>
            </Box>

            {isMobile ? (
              <Box sx={{ display: "flex", gap: 1 }}>
                {/* Language Selector - Mobile */}
                <IconButton
                  onClick={handleLanguageMenuOpen}
                  sx={{
                    color: "#AB835C",
                  }}
                >
                  <Globe size={22} />
                </IconButton>

                {/* Mobile Menu Button */}
                <IconButton
                  onClick={handleMenuOpen}
                  sx={{
                    color: "#AB835C",
                  }}
                >
                  <MenuIcon size={22} />
                </IconButton>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { md: 2, lg: 4 },
                  ml: "auto",
                }}
              >
                {/* Navigation Links */}
                {navLinks.map((item) => (
                  <Link
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path ? "#AB835C" : "white",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      position: "relative",
                      padding: "4px 0",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: location.pathname === item.path ? "100%" : "0%",
                        height: "2px",
                        bottom: 0,
                        left: 0,
                        backgroundColor: "#AB835C",
                        transition: "width 0.3s ease",
                      },
                      "&:hover": {
                        color: "#AB835C",
                        "&::after": {
                          width: "100%",
                        },
                      },
                    }}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Pages Dropdown */}
                <Box>
                  <Button
                    onClick={handleMenuOpen}
                    endIcon={<ChevronDown size={16} />}
                    sx={{
                      color: pagesDropdown.some(item => location.pathname === item.path) 
                        ? "#AB835C" 
                        : "white",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      textTransform: "none",
                      "&:hover": { color: "#AB835C" },
                    }}
                  >
                    {t('pages')}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    TransitionComponent={Fade}
                    PaperProps={{
                      sx: {
                        mt: 1,
                        backgroundColor: "#000000",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "4px",
                        minWidth: "180px",
                        "& .MuiMenuItem-root": {
                          color: "white",
                          fontSize: "0.95rem",
                          transition: "all 0.3s ease",
                          padding: "10px 16px",
                          "&:hover": {
                            backgroundColor: "rgba(171, 131, 92, 0.1)",
                            color: "#AB835C",
                          },
                        },
                      },
                    }}
                  >
                    {pagesDropdown.map((item) => (
                      <MenuItem
                        key={item.path}
                        component={RouterLink}
                        to={item.path}
                        onClick={handleMenuClose}
                        selected={location.pathname === item.path}
                        sx={{
                          color: location.pathname === item.path ? "#AB835C" : "white",
                        }}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                {/* Language Selector */}
                <Box>
                  <Button
                    onClick={handleLanguageMenuOpen}
                    startIcon={<Globe size={18} />}
                    endIcon={<ChevronDown size={16} />}
                    sx={{
                      color: "#AB835C",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      textTransform: "none",
                      minWidth: "auto",
                    }}
                  >
                    {i18n.language === 'fr' ? 'FR' : 'EN'}
                  </Button>
                  <Menu
                    anchorEl={languageAnchorEl}
                    open={Boolean(languageAnchorEl)}
                    onClose={handleLanguageMenuClose}
                    TransitionComponent={Fade}
                    PaperProps={{
                      sx: {
                        mt: 1,
                        backgroundColor: "#000000",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "4px",
                        minWidth: "150px",
                        "& .MuiMenuItem-root": {
                          color: "white",
                          fontSize: "0.95rem",
                          transition: "all 0.3s ease",
                          padding: "10px 16px",
                          "&:hover": {
                            backgroundColor: "rgba(171, 131, 92, 0.1)",
                            color: "#AB835C",
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem 
                      onClick={() => changeLanguage('en')}
                      selected={i18n.language === 'en'}
                      sx={{
                        color: i18n.language === 'en' ? "#AB835C" : "white",
                      }}
                    >
                      English
                    </MenuItem>
                    <MenuItem 
                      onClick={() => changeLanguage('fr')}
                      selected={i18n.language === 'fr'}
                      sx={{
                        color: i18n.language === 'fr' ? "#AB835C" : "white",
                      }}
                    >
                      Français
                    </MenuItem>
                  </Menu>
                </Box>

                {/* Get in Touch Button */}
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  sx={{
                    borderColor: "#AB835C",
                    color: "#AB835C",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    textTransform: "none",
                    px: 3,
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "#AB835C",
                      borderColor: "#AB835C",
                      color: "white",
                    },
                  }}
                >
                  {t('getInTouch')}
                </Button>
              </Box>
            )}

            {/* Mobile Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ display: { xs: "block", md: "none" } }}
              PaperProps={{
                sx: {
                  width: "100%",
                  maxWidth: "100%",
                  left: "0 !important",
                  right: "0",
                  backgroundColor: "#000000",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  "& .MuiMenuItem-root": {
                    color: "white",
                    fontSize: "0.95rem",
                    py: 1.5,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(171, 131, 92, 0.1)",
                      color: "#AB835C",
                    },
                  },
                },
              }}
            >
              {navLinks.map((item) => (
                <MenuItem
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleMenuClose}
                  selected={location.pathname === item.path}
                  sx={{
                    color: location.pathname === item.path ? "#AB835C" : "white",
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
              
              <Divider sx={{ my: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#AB835C",
                  px: 2,
                  pt: 1,
                  pb: 0.5,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                {t('pages')}
              </Typography>
              
              {pagesDropdown.map((item) => (
                <MenuItem
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleMenuClose}
                  selected={location.pathname === item.path}
                  sx={{
                    color: location.pathname === item.path ? "#AB835C" : "white",
                    pl: 3,
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
              
              <Box sx={{ p: 2 }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  fullWidth
                  onClick={handleMenuClose}
                  sx={{
                    borderColor: "#AB835C",
                    color: "#AB835C",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    textTransform: "none",
                    py: 1,
                    "&:hover": {
                      backgroundColor: "#AB835C",
                      borderColor: "#AB835C",
                      color: "white",
                    },
                  }}
                >
                  {t('getInTouch')}
                </Button>
              </Box>
            </Menu>

            {/* Language Menu */}
            <Menu
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: "#000000",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  "& .MuiMenuItem-root": {
                    color: "white",
                    fontSize: "0.95rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(171, 131, 92, 0.1)",
                      color: "#AB835C",
                    },
                  },
                },
              }}
            >
              <MenuItem 
                onClick={() => changeLanguage('en')}
                selected={i18n.language === 'en'}
              >
                English
              </MenuItem>
              <MenuItem 
                onClick={() => changeLanguage('fr')}
                selected={i18n.language === 'fr'}
              >
                Français
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Navbar;