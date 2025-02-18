import { useState } from "react";
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
import { Menu as MenuIcon, Globe } from "lucide-react";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);

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
              flexDirection: "column",
              alignItems: "flex-start",
              flexGrow: { xs: 1, md: 0 },
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#AB835C",
                fontFamily: "Playfair Display",
                fontWeight: 600,
                fontSize: { xs: "1.2rem", sm: "1.4rem" },
                lineHeight: 1.2,
              }}
            >
              Asarfo-Adjei
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#AB835C",
                fontFamily: "Playfair Display",
                fontWeight: 500,
                fontSize: { xs: "1.2rem", sm: "1.4rem" },
              }}
            >
              Attorneys
            </Typography>
          </Box>

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
              <IconButton
                onClick={handleLanguageMenuOpen}
                sx={{
                  color: "#AB835C",
                }}
              >
                <Globe size={20} />
              </IconButton>

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
            <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
            <MenuItem onClick={handleLanguageMenuClose}>Français</MenuItem>
            <MenuItem onClick={handleLanguageMenuClose}>Español</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
