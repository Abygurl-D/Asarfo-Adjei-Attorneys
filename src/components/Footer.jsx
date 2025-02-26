import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
  useTheme
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Contact Section */}
      

      {/* Main Footer */}
      <Box sx={{ bgcolor: '#000000', color: 'white', pt: 8, pb: 4 }}>
        <Container>
          <Grid container spacing={4}>
            {/* Logo & About */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#AC835C',
                    fontFamily: 'Playfair Display',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    lineHeight: 1.2,
                  }}
                >
                  Asarfo-Adjei
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#AC835C',
                    fontFamily: 'Playfair Display',
                    fontSize: '1rem',
                  }}
                >
                  Attorneys
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: '#AAAAAA',
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                We are a premier law firm committed to delivering exceptional legal services in corporate law, litigation,
                intellectual property, and more. Our experienced attorneys work diligently to ensure the best outcomes for our clients.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {[
                  { icon: <Facebook size={18} />, url: 'https://facebook.com' },
                  { icon: <Twitter size={18} />, url: 'https://twitter.com' },
                  { icon: <Instagram size={18} />, url: 'https://instagram.com' },
                  { icon: <Linkedin size={18} />, url: 'https://linkedin.com' },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      '&:hover': {
                        bgcolor: '#AC835C',
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
                  fontFamily: 'Playfair Display',
                  fontWeight: 600,
                  mb: 3,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 2,
                    bgcolor: '#AC835C',
                  },
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Practice Areas', path: '/practice-areas' },
                  { name: 'Attorneys', path: '/attorneys' },
                  { name: 'Case Study', path: '/case-study' },
                ].map((link, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to={link.path}
                    sx={{
                      color: '#AAAAAA',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#AC835C',
                        '& .arrow': {
                          transform: 'translateX(3px)',
                        },
                      },
                    }}
                  >
                    <ArrowRight
                      size={14}
                      className="arrow"
                      style={{
                        marginRight: 8,
                        transition: 'transform 0.3s ease',
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
                  fontFamily: 'Playfair Display',
                  fontWeight: 600,
                  mb: 3,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 2,
                    bgcolor: '#AC835C',
                  },
                }}
              >
                Practice Areas
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                  'Corporate Law',
                  'Litigation',
                  'Intellectual Property',
                  'Employment Law',
                  'Contract Law',
                ].map((area, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to="/practice-areas"
                    sx={{
                      color: '#AAAAAA',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#AC835C',
                        '& .arrow': {
                          transform: 'translateX(3px)',
                        },
                      },
                    }}
                  >
                    <ArrowRight
                      size={14}
                      className="arrow"
                      style={{
                        marginRight: 8,
                        transition: 'transform 0.3s ease',
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
                  fontFamily: 'Playfair Display',
                  fontWeight: 600,
                  mb: 3,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 2,
                    bgcolor: '#AC835C',
                  },
                }}
              >
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  {
                    icon: <MapPin size={20} />,
                    text: '123 Legal Street, Accra, Ghana',
                  },
                  {
                    icon: <Phone size={20} />,
                    text: '+233 (0) 302 123 456',
                    link: 'tel:+2330302123456',
                  },
                  {
                    icon: <Mail size={20} />,
                    text: 'info@asarfoadjei.com',
                    link: 'mailto:info@asarfoadjei.com',
                  },
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        color: '#AC835C',
                        mt: 0.5,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      component={item.link ? 'a' : 'p'}
                      href={item.link}
                      sx={{
                        color: '#AAAAAA',
                        textDecoration: 'none',
                        '&:hover': {
                          color: item.link ? '#AC835C' : '#AAAAAA',
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
                    fontFamily: 'Playfair Display',
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
                    display: 'flex',
                    gap: 1,
                  }}
                >
                  <TextField
                    placeholder="Your Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'rgba(255,255,255,0.05)',
                        '& fieldset': {
                          borderColor: 'rgba(255,255,255,0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255,255,255,0.2)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#AC835C',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: '#AC835C',
                      minWidth: 'auto',
                      '&:hover': {
                        bgcolor: '#8a6a4a',
                      },
                    }}
                  >
                    <Send size={18} />
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 4 }} />

          {/* Copyright */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', sm: 'center' },
              gap: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: '#AAAAAA',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © {new Date().getFullYear()} Asarfo-Adjei Attorneys. All Rights Reserved.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
              }}
            >
              {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map((item, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to="#"
                  sx={{
                    color: '#AAAAAA',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: '#AC835C',
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
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
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: '50%',
          bgcolor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </Box>
    </Box>
  );
};

export default Footer;