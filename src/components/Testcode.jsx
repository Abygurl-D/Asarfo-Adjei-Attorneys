import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
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
} from "@mui/material";
import { Menu as MenuIcon, Globe, Scale } from "lucide-react";

const Testcode = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("English");

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

  // Google Translate initialization
  useEffect(() => {
    // Create Google Translate script
    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // Define the initialization function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,es,zh-CN,ar,de,ja,ru",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Check if script already exists
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      addScript();
    }

    // Clean up
    return () => {
      // We don't remove the script as it might be needed by other components
    };
  }, []);

  // Function to change language
  const changeLanguage = (languageName, languageCode) => {
    if (window.google && window.google.translate) {
      // Get the select element
      const selectElement = document.querySelector(".goog-te-combo");

      if (selectElement) {
        // Set the value
        selectElement.value = languageCode;

        // Trigger change event
        const event = new Event("change", { bubbles: true });
        selectElement.dispatchEvent(event);

        // Also trigger click for mobile compatibility
        selectElement.click();

        // Update current language state
        setCurrentLanguage(languageName);
        handleLanguageMenuClose();
      }
    } else {
      console.error("Google Translate not loaded yet");
      // Fallback - reload the page with the translate parameter
      window.location.href = `https://translate.google.com/translate?sl=auto&tl=${languageCode}&u=${encodeURIComponent(
        window.location.href
      )}`;
    }
  };

  // Languages mapping
  const languages = [
    { name: "English", code: "en" },
    { name: "Français", code: "fr" },
    { name: "Español", code: "es" },
    { name: "العربية", code: "ar" },
    { name: "中文", code: "zh-CN" },
    { name: "Deutsch", code: "de" },
    { name: "日本語", code: "ja" },
    { name: "Русский", code: "ru" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#000000",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: "70px", sm: "80px" },
            py: { xs: 1, sm: 1.5 },
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

          {/* Hidden Google Translate Element */}
          <Box
            id="google_translate_element"
            sx={{
              position: "absolute",
              top: "-9999px",
              left: "-9999px",
              height: "1px",
              width: "1px",
              overflow: "hidden",
            }}
          />

          {isMobile ? (
            <Box sx={{ display: "flex", gap: 2 }}>
              {/* Language Selector - Mobile */}
              <IconButton
                onClick={handleLanguageMenuOpen}
                sx={{
                  color: "#AB835C",
                }}
              >
                <Globe size={24} />
              </IconButton>

              {/* Mobile Menu Button */}
              <IconButton
                onClick={handleMenuOpen}
                sx={{
                  color: "#AB835C",
                }}
              >
                <MenuIcon size={24} />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                ml: "auto",
              }}
            >
              {/* Navigation Links */}
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Practice Areas", path: "/practice-areas" },
                { name: "Case Study", path: "/case-study" },
              ].map((item) => (
                <Link
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: -4,
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
                  sx={{
                    color: "white",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    textTransform: "none",
                    "&:hover": { color: "#AB835C" },
                  }}
                >
                  Pages
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  PaperProps={{
                    sx: {
                      mt: 1,
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
                    component={RouterLink}
                    to="/testimonials"
                    onClick={handleMenuClose}
                  >
                    Testimonials
                  </MenuItem>
                  <MenuItem
                    component={RouterLink}
                    to="/faqs"
                    onClick={handleMenuClose}
                  >
                    FAQs
                  </MenuItem>
                </Menu>
              </Box>

              {/* Language Selector */}
              <Box>
                <IconButton
                  onClick={handleLanguageMenuOpen}
                  sx={{
                    color: "#AB835C",
                  }}
                >
                  <Globe size={20} />
                </IconButton>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#AB835C",
                    fontSize: "0.7rem",
                    display: "block",
                    textAlign: "center",
                    mt: -0.5,
                  }}
                >
                  {currentLanguage}
                </Typography>
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
                  "&:hover": {
                    backgroundColor: "#AB835C",
                    borderColor: "#AB835C",
                    color: "white",
                  },
                }}
              >
                Get in Touch
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
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Practice Areas", path: "/practice-areas" },
              { name: "Case Study", path: "/case-study" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "FAQs", path: "/faqs" },
            ].map((item) => (
              <MenuItem
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={handleMenuClose}
              >
                {item.name}
              </MenuItem>
            ))}
            <MenuItem sx={{ pt: 2 }}>
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
                  "&:hover": {
                    backgroundColor: "#AB835C",
                    borderColor: "#AB835C",
                    color: "white",
                  },
                }}
              >
                Get in Touch
              </Button>
            </MenuItem>
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
            {languages.map((lang) => (
              <MenuItem
                key={lang.code}
                onClick={() => changeLanguage(lang.name, lang.code)}
                sx={{
                  backgroundColor:
                    currentLanguage === lang.name
                      ? "rgba(171, 131, 92, 0.1)"
                      : "transparent",
                }}
              >
                {lang.name}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Testcode;
