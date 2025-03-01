import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
} from '@mui/material';
import {
  Award,
  Scale,
  Building2,
  Users,
} from 'lucide-react';

const cases = [
  {
    title: 'Corporate Merger Success',
    category: 'Corporate Law',
    icon: <Building2 size={24} />,
    challenge: 'A complex merger between two multinational corporations with significant regulatory hurdles.',
    solution: 'Developed a comprehensive merger strategy, navigating multiple jurisdictions and regulatory requirements.',
    outcome: 'Successfully completed $500M merger with zero regulatory issues.',
    year: '2024'
  },
  {
    title: 'Intellectual Property Defense',
    category: 'IP Law',
    icon: <Scale size={24} />,
    challenge: 'Patent infringement case threatening clients core technology.',
    solution: 'Aggressive defense strategy combined with negotiation for favorable settlement terms.',
    outcome: 'Secured favorable settlement and cross-licensing agreement.',
    year: '2023'
  },
  {
    title: 'Employment Class Action',
    category: 'Employment Law',
    icon: <Users size={24} />,
    challenge: 'Class action lawsuit involving 1,000+ employees claiming workplace discrimination.',
    solution: 'Comprehensive audit and implementation of new workplace policies.',
    outcome: 'Case dismissed with prejudice, new policies praised as industry standard.',
    year: '2023'
  },
  {
    title: 'International Arbitration',
    category: 'Arbitration',
    icon: <Award size={24} />,
    challenge: 'Multi-jurisdictional dispute involving complex international contracts.',
    solution: 'Coordinated legal strategy across multiple jurisdictions with local counsel.',
    outcome: 'Favorable arbitration award of $100M+ for client.',
    year: '2024'
  }
];

const CaseStudy = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 0 }}>
      {/* Banner Section */}
      <Box
        sx={{
          height: { xs: '300px', sm: '350px' },
          position: 'relative',
          backgroundImage: 'url("https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740833769/case_studies_z0v9ab.webp")',
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
              Case{' '}
              <Box component="span" sx={{ color: '#AC835C' }}>
                Studies
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Case Studies Grid */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {cases.map((caseStudy, index) => (
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          bgcolor: '#F5F5F5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#AC835C',
                        }}
                      >
                        {caseStudy.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: 'Playfair Display',
                            fontWeight: 600,
                            color: 'black',
                            mb: 0.5,
                          }}
                        >
                          {caseStudy.title}
                        </Typography>
                        <Chip
                          label={caseStudy.category}
                          size="small"
                          sx={{
                            bgcolor: '#AC835C',
                            color: 'white',
                            fontSize: '0.75rem',
                          }}
                        />
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        color: '#817f7c',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                    >
                      {caseStudy.year}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[
                      { label: 'Challenge', content: caseStudy.challenge },
                      { label: 'Solution', content: caseStudy.solution },
                      { label: 'Outcome', content: caseStudy.outcome }
                    ].map((section, idx) => (
                      <Box key={idx}>
                        <Typography
                          sx={{
                            color: '#AC835C',
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                        >
                          {section.label}
                        </Typography>
                        <Typography
                          sx={{
                            color: '#333',
                            lineHeight: 1.6,
                          }}
                        >
                          {section.content}
                        </Typography>
                      </Box>
                    ))}
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

export default CaseStudy;