import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const attorneys = [
  {
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    practiceArea: 'Corporate Law & M&A',
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    practiceArea: 'Intellectual Property',
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Elena Rodriguez',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    practiceArea: 'International Law',
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'David Thompson',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    practiceArea: 'Business Litigation',
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Jessica Park',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    practiceArea: 'Employment Law',
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Marcus Williams',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    practiceArea: 'Real Estate Law',
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Sophia Lee',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=800&q=80',
    practiceArea: 'Tax Law',
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Robert Martinez',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    practiceArea: 'Environmental Law',
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  }
];

const Attorneys = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 0 }}>
      {/* Banner Section */}
      <Box
        sx={{
          height: { xs: '300px', sm: '350px' },
          position: 'relative',
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mb: 6,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ height: '100%', position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pt: { xs: 8, sm: 9 }
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontFamily: 'Playfair Display',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                lineHeight: 1.2,
                textAlign: 'center',
              }}
            >
              <Box component="span" sx={{ color: 'white' }}>
                Meet Our{' '}
              </Box>
              <Box component="span" sx={{ color: '#AC835C' }}>
                Attorneys
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Attorneys Grid */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {attorneys.map((attorney, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    '& .social-bar': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    }
                  }
                }}
              >
                <Box sx={{ position: 'relative', paddingTop: '133%' }}>
                  <CardMedia
                    component="img"
                    image={attorney.image}
                    alt={attorney.name}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  {/* Social Media Bar */}
                  <Box
                    className="social-bar"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(172, 131, 92, 0.95)',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 1,
                      py: 1.5,
                      opacity: 0,
                      transform: 'translateY(100%)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {[
                      { icon: <Facebook size={20} />, url: attorney.social.facebook },
                      { icon: <Linkedin size={20} />, url: attorney.social.linkedin },
                      { icon: <Instagram size={20} />, url: attorney.social.instagram },
                      { icon: <Twitter size={20} />, url: attorney.social.twitter }
                    ].map((social, idx) => (
                      <IconButton
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'white',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            color: 'rgba(255,255,255,0.8)',
                          }
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
                <CardContent sx={{ p: 2, flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Playfair Display',
                      fontWeight: 600,
                      color: 'black',
                      mb: 0.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    {attorney.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#817f7c',
                      fontSize: '0.9rem'
                    }}
                  >
                    {attorney.practiceArea}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Attorneys;