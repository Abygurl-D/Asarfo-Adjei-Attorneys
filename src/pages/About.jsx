import React from 'react';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const attorneys = [
  {
    name: 'Asarfo-Adjei',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    practiceAreas: 'Corporate Law, Mergers & Acquisitions',
    bio: 'With over 15 years of experience in corporate law, Sarah leads our M&A practice with unparalleled expertise and dedication.'
  },
  {
    name: 'Ralphael Gyambra',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    practiceAreas: 'Intellectual Property, Technology Law',
    bio: 'Michael specializes in protecting innovative companies through comprehensive IP strategy and litigation.'
  },
  {
    name: 'Elena Rodriguez',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    practiceAreas: 'International Law, Commercial Litigation',
    bio: 'Elena brings a global perspective to complex commercial disputes, with particular expertise in international arbitration.'
  }
];

const About = () => {
  return (
    <Box sx={{ bgcolor: '#fff' }}>
      {/* Main Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ 
              color: 'black',
              fontFamily: 'Playfair Display',
              fontWeight: 700
            }}>
              Excellence in Legal Practice
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#333' }}>
              Founded in 1985, our firm has established itself as a leader in corporate and commercial law. 
              We combine decades of experience with innovative approaches to deliver exceptional results for our clients.
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Law Firm Office"
              sx={{
                width: '100%',
                height: 400,
                objectFit: 'cover',
                borderRadius: 2,
              }}
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Container>

      {/* Mission & Vision Section */}
      <Box sx={{ bgcolor: '#f8f8f8', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: '#fff' }}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ 
                    color: 'var(--primary-color)',
                    fontFamily: 'Playfair Display',
                    fontWeight: 600
                  }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1">
                    To provide exceptional legal services with integrity and professionalism, 
                    while maintaining the highest standards of ethical conduct and client advocacy.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: '#fff' }}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ 
                    color: 'var(--primary-color)',
                    fontFamily: 'Playfair Display',
                    fontWeight: 600
                  }}>
                    Our Vision
                  </Typography>
                  <Typography variant="body1">
                    To be the most trusted and respected law firm, recognized for our commitment to excellence,
                    innovation, and positive impact on our clients and communities.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* President's Message */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1559548331-f9cb98001426?auto=format&fit=crop&w=800&q=80"
              alt="President"
              sx={{
                width: '100%',
                height: 400,
                objectFit: 'cover',
                borderRadius: 2,
              }}
              loading="lazy"
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ 
              color: 'var(--primary-color)',
              fontFamily: 'Playfair Display',
              fontWeight: 600
            }}>
              A Message from Our President
            </Typography>
            <Typography variant="body1" paragraph>
              For over three decades, our firm has stood at the forefront of legal excellence. 
              We've built our reputation on a foundation of trust, expertise, and unwavering commitment to our clients' success.
            </Typography>
            <Typography variant="body1" paragraph>
              As we look to the future, we remain dedicated to innovation while honoring the traditional values that have defined our practice.
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
              James D. Mitchell
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              President & Managing Partner
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Lead Attorneys */}
      <Box sx={{ bgcolor: '#f8f8f8', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
            color: 'black',
            fontFamily: 'Playfair Display',
            fontWeight: 600,
            mb: 6
          }}>
            Our Lead Attorneys
          </Typography>
          <Grid container spacing={4}>
            {attorneys.map((attorney, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <Box
                    component="img"
                    src={attorney.image}
                    alt={attorney.name}
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                    }}
                    loading="lazy"
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ 
                      fontFamily: 'Playfair Display',
                      fontWeight: 600
                    }}>
                      {attorney.name}
                    </Typography>
                    <Typography variant="subtitle2" color="var(--primary-color)" gutterBottom>
                      {attorney.practiceAreas}
                    </Typography>
                    <Typography variant="body2">
                      {attorney.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;