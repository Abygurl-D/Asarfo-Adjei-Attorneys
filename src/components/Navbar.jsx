import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleDropdownOpen = (event) => setAnchorEl(event.currentTarget);
  const handleDropdownClose = () => setAnchorEl(null);

  const handlePageNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
    handleDropdownClose();
  };

  return (
    <AppBar 
      position="fixed"
      elevation={scroll ? 4 : 0}
      sx={{
        backgroundColor: "black",
        transition: "background-color 0.3s",
      }}
    >
      <Toolbar 
        sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          px: { xs: 2, lg: 4 }, 
          py: 1.5,
          minHeight: { xs: '70px', sm: '80px' }
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src="/src/assets/images/logo5.png"
            alt="Asarfo-Adjei Attorneys"
            sx={{
              height: { xs: '55px', sm: '60px' },
              width: 'auto',
              objectFit: "contain",
              cursor: "pointer",
              transition: 'opacity 0.3s ease',
              "&:hover": { opacity: 0.85 },
              mr: 1,
              display: 'block',
            }}
          />
        </Link>

        {/* Nav Links - Desktop */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 3 }}>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Practice Areas", path: "/practice-areas" },
            { name: "Attorneys", path: "/attorneys" },
            { name: "Case Study", path: "/case-study" }
          ].map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{ 
                color: "white", 
                fontSize: '0.95rem',
                fontWeight: 500,
                "&:hover": { color: "#AB835C" },
                textTransform: 'none'
              }}
            >
              {item.name}
            </Button>
          ))}

          {/* Dropdown Menu */}
          <Button
            onClick={handleDropdownOpen}
            sx={{ 
              color: "white", 
              display: "flex", 
              alignItems: "center",
              fontSize: '0.95rem',
              fontWeight: 500,
              "&:hover": { color: "#AB835C" },
              textTransform: 'none'
            }}
          >
            Pages <ExpandMoreIcon sx={{ ml: 0.5 }} />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleDropdownClose}
            PaperProps={{
              sx: {
                mt: 1,
                backgroundColor: 'black',
                color: 'white',
                '& .MuiMenuItem-root': {
                  fontSize: '0.95rem',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(171, 131, 92, 0.1)',
                    color: '#AB835C'
                  }
                }
              }
            }}
          >
            {[
              { name: "FAQs", path: "/faqs" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "CSR", path: "/csr" }
            ].map((page) => (
              <MenuItem
                key={page.path}
                onClick={() => handlePageNavigation(page.path)}
                component={Link}
                to={page.path}
              >
                {page.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Get in Touch Button */}
        <Button
          component={Link}
          to="/contact"
          variant="outlined"
          sx={{
            display: { xs: "none", lg: "block" },
            borderColor: "#AB835C",
            color: "#AB835C",
            fontSize: '0.95rem',
            fontWeight: 500,
            textTransform: 'none',
            px: 3,
            "&:hover": { 
              backgroundColor: "#AB835C", 
              color: "white",
              borderColor: "#AB835C"
            },
          }}
        >
          Get in Touch
        </Button>

        {/* Mobile Menu Icon */}
        <IconButton 
          sx={{ 
            display: { lg: "none" }, 
            color: "#AB835C",
            padding: '8px'
          }} 
          onClick={toggleMenu}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Menu */}
      {menuOpen && (
        <Box 
          sx={{ 
            display: { lg: "none" }, 
            position: "absolute", 
            top: { xs: '70px', sm: '80px' }, 
            left: 0, 
            width: "100%", 
            bgcolor: "black", 
            p: 2, 
            boxShadow: 3 
          }}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Practice Areas", path: "/practice-areas" },
            { name: "Attorneys", path: "/attorneys" },
            { name: "Case Study", path: "/case-study" }
          ].map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              sx={{ 
                color: "white", 
                display: "block", 
                textAlign: "left", 
                width: "100%",
                fontSize: '0.95rem',
                fontWeight: 500,
                textTransform: 'none',
                py: 1,
                "&:hover": { color: "#AB835C" } 
              }}
            >
              {item.name}
            </Button>
          ))}

          {/* Mobile Pages Menu */}
          <Button
            onClick={handleDropdownOpen}
            sx={{ 
              color: "#AB835C", 
              textAlign: "left", 
              width: "100%",
              fontSize: '0.95rem',
              fontWeight: 500,
              textTransform: 'none',
              py: 1,
              "&:hover": { color: "#AB835C" } 
            }}
          >
            Pages <ExpandMoreIcon sx={{ ml: 0.5 }} />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleDropdownClose}
            PaperProps={{
              sx: {
                backgroundColor: 'black',
                color: 'white',
                '& .MuiMenuItem-root': {
                  fontSize: '0.95rem',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(171, 131, 92, 0.1)',
                    color: '#AB835C'
                  }
                }
              }
            }}
          >
            {[
              { name: "FAQs", path: "/faqs" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "CSR", path: "/csr" }
            ].map((page) => (
              <MenuItem
                key={page.path}
                onClick={() => handlePageNavigation(page.path)}
                component={Link}
                to={page.path}
              >
                {page.name}
              </MenuItem>
            ))}
          </Menu>

          {/* Mobile Get in Touch Button */}
          <Button
            component={Link}
            to="/contact"
            onClick={() => setMenuOpen(false)}
            variant="outlined"
            sx={{
              mt: 2,
              width: "100%",
              borderColor: "#AB835C",
              color: "#AB835C",
              fontSize: '0.95rem',
              fontWeight: 500,
              textTransform: 'none',
              "&:hover": { 
                backgroundColor: "#AB835C", 
                color: "white",
                borderColor: "#AB835C"
              },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;