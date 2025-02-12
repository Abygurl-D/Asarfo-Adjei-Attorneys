import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box, Typography } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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

  return (
    <AppBar 
      position="fixed"
      elevation={scroll ? 4 : 0}
      sx={{
        backgroundColor: "transparent",
        transition: "background-color 0.3s",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 2, lg: 4 }, py: 1 }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontWeight: "bold", color: "#AB835C" }}>
          ⚖ Asarfo-Adjei Attorneys
        </Typography>

        {/* Nav Links - Desktop */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 3 }}>
          {["Home", "About", "Practice Areas", "Attorneys", "Case Study"].map((item, index) => (
            <Button key={index} href={`#${item.toLowerCase().replace(/ /g, "-")}`} sx={{ color: "white", "&:hover": { color: "#AB835C" } }}>
              {item}
            </Button>
          ))}

          {/* Dropdown Menu */}
          <Button
            onClick={handleDropdownOpen}
            sx={{ color: "white", display: "flex", alignItems: "center", "&:hover": { color: "#AB835C" } }}
          >
            Pages <ExpandMoreIcon sx={{ ml: 0.5 }} />
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleDropdownClose}>
            {["FAQs", "Testimonials", "CSR"].map((page, idx) => (
              <MenuItem key={idx} onClick={handleDropdownClose} component="a" href={`#${page.toLowerCase()}`}>
                {page}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Get in Touch Button */}
        <Button
          variant="outlined"
          sx={{
            display: { xs: "none", lg: "block" },
            borderColor: "#AB835C",
            color: "#AB835C",
            "&:hover": { backgroundColor: "#AB835C", color: "white" },
          }}
        >
          Get in Touch
        </Button>

        {/* Mobile Menu Icon */}
        <IconButton sx={{ display: { lg: "none" }, color: "#AB835C" }} onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Menu */}
      {menuOpen && (
        <Box sx={{ display: { lg: "none" }, position: "absolute", top: "64px", left: 0, width: "100%", bgcolor: "black", p: 2, boxShadow: 3 }}>
          {["Home", "About", "Practice Areas", "Attorneys", "Case Study"].map((item, index) => (
            <Button key={index} href={`#${item.toLowerCase().replace(/ /g, "-")}`} sx={{ color: "white", display: "block", textAlign: "left", width: "100%", "&:hover": { color: "#AB835C" } }}>
              {item}
            </Button>
          ))}

          {/* Mobile Dropdown Menu */}
          <Button onClick={handleDropdownOpen} sx={{ color: "#AB835C", textAlign: "left", width: "100%", "&:hover": { color: "#AB835C" } }}>
            Pages <ExpandMoreIcon sx={{ ml: 0.5 }} />
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleDropdownClose}>
            {["FAQs", "Testimonials", "CSR"].map((page, idx) => (
              <MenuItem key={idx} onClick={handleDropdownClose} component="a" href={`#${page.toLowerCase()}`}>
                {page}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;
