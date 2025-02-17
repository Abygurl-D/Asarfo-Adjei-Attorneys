import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
} from '@mui/material';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Anderson',
    position: 'CEO, Tech Innovations Inc.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    testimonial: 'The corporate law team provided exceptional guidance during our merger. Their attention to detail and strategic approach made a complex process manageable.',
  },
  {
    name: 'Sarah Chen',
    position: 'Founder, StartUp Solutions',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    testimonial: 'Their intellectual property team helped us protect our innovations. The level of expertise and personal attention exceeded our expectations.',
  },
  {
    name: 'Michael Rodriguez',
    position: 'Director, Global Enterprises',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    testimonial: 'Working with their international law department has been invaluable for our global expansion. They understand the complexities of cross-border business.',
  },
  {
    name: 'Emily Thompson',
    position: 'HR Director, Innovation Corp',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    testimonial: 'The employment law team provided clear, practical advice that helped us navigate complex workplace issues. Their proactive approach prevented potential problems.',
  },
  {
    name: 'David Kim',
    position: 'CFO, Growth Ventures',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    testimonial: 'Their business advisory services have been crucial to our growth. They do not just solve legal problems; they help prevent them.',
  },
  {
    name: 'Lisa Martinez',
    position: 'Owner, Creative Solutions',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    testimonial: 'From contract negotiations to dispute resolution, their expertise has been invaluable. They are more than lawyers; they are trusted business advisors.',
  }
];

const Testimonials = () => {
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
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
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
              Client{' '}
              <Box component="span" sx={{ color: '#AC835C' }}>
                Testimonials
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Grid */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ width: 64, height: 64 }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: 'Playfair Display',
                          fontWeight: 600,
                          color: 'black',
                          mb: 0.5,
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#817f7c',
                          fontSize: '0.9rem',
                          mb: 1,
                        }}
                      >
                        {testimonial.position}
                      </Typography>
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        size="small"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: '#AC835C',
                          }
                        }}
                      />
                    </Box>
                  </Box>

                  <Box sx={{ position: 'relative' }}>
                    <Quote
                      size={24}
                      style={{
                        color: '#AC835C',
                        opacity: 0.2,
                        position: 'absolute',
                        top: -10,
                        left: -10,
                      }}
                    />
                    <Typography
                      sx={{
                        color: '#333',
                        lineHeight: 1.8,
                        pl: 4,
                      }}
                    >
                      "{testimonial.testimonial}"
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;