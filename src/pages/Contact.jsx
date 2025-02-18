import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:thehairapist123@gmail.com';
  };

  return (
    <Box sx={{ minHeight: '100vh', pt: 0 }}>
      {/* Banner Section */}
      <Box
        sx={{
          height: { xs: '300px', sm: '350px' },
          position: 'relative',
          backgroundImage: 'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80")',
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
            background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ height: '100%', position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              pt: { xs: 8, sm: 9 }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <MessageCircle size={24} color="#AB835C" />
              <Typography
                sx={{
                  color: 'white',
                  fontFamily: 'Playfair Display',
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                }}
              >
                Get in touch
              </Typography>
            </Box>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: 'white',
                fontFamily: 'Playfair Display',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              Contact{' '}
              <Box component="span" sx={{ color: '#AB835C' }}>
                Info
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Playfair Display',
                fontWeight: 700,
                mb: 1,
              }}
            >
              Do you need help?
            </Typography>
            <Typography
              sx={{
                color: '#AB835C',
                fontSize: '45px',
                fontFamily: 'Playfair Display',
                mb: 4,
              }}
            >
              Contact Us Now!
            </Typography>

            {/* Contact Info List */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                {
                  icon: <MapPin size={24} />,
                  title: 'Address',
                  content: '123 Legal Street, Accra, Ghana',
                },
                {
                  icon: <Phone size={24} />,
                  title: 'Phone',
                  content: '+233 (0) 302 123 456',
                },
                {
                  icon: <Mail size={24} />,
                  title: 'Email',
                  content: 'thehairapist123@gmail.com',
                },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                  <IconButton
                    sx={{
                      backgroundColor: '#F5F5F5',
                      color: '#AB835C',
                      '&:hover': { backgroundColor: '#F5F5F5' },
                      width: 48,
                      height: 48,
                    }}
                  >
                    {item.icon}
                  </IconButton>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: 'Playfair Display',
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: '#817F8D' }}>
                      {item.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: 'black',
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  color: '#AB835C',
                  fontFamily: 'Playfair Display',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Send direct message
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  placeholder="Full name"
                  sx={{
                    mb: 2,
                    '& .MuiInputBase-root': {
                      color: 'white',
                      backgroundColor: 'transparent',
                      '& fieldset': {
                        borderColor: '#AB835C',
                      },
                      '&:hover fieldset': {
                        borderColor: '#AB835C',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#817F8D',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Email address"
                  type="email"
                  sx={{
                    mb: 2,
                    '& .MuiInputBase-root': {
                      color: 'white',
                      backgroundColor: 'transparent',
                      '& fieldset': {
                        borderColor: '#AB835C',
                      },
                      '&:hover fieldset': {
                        borderColor: '#AB835C',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#817F8D',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Your message"
                  multiline
                  rows={4}
                  sx={{
                    mb: 3,
                    '& .MuiInputBase-root': {
                      color: 'white',
                      backgroundColor: 'transparent',
                      '& fieldset': {
                        borderColor: '#AB835C',
                      },
                      '&:hover fieldset': {
                        borderColor: '#AB835C',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#817F8D',
                    },
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    color: 'white',
                    backgroundColor: 'transparent',
                    border: '1px solid #AB835C',
                    py: 1.5,
                    fontSize: '1rem',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(171, 131, 92, 0.1)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;