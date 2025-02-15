import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "What areas of law does your firm specialize in?",
    answer: "Our firm specializes in corporate law, intellectual property, mergers & acquisitions, commercial litigation, employment law, and international business law. Each practice area is led by experienced attorneys with extensive expertise in their respective fields."
  },
  {
    question: "How do I schedule an initial consultation?",
    answer: "You can schedule an initial consultation by calling our office, using our online contact form, or sending us an email. Our team will respond within 24 hours to set up a meeting with the appropriate attorney for your case."
  },
  {
    question: "What should I bring to my first meeting with an attorney?",
    answer: "For your first meeting, please bring any relevant documents related to your case, including contracts, correspondence, court documents, and any other materials that might help us understand your situation better. Also, prepare a brief timeline of events and list of questions you'd like to discuss."
  },
  {
    question: "How do your billing arrangements work?",
    answer: "We offer various billing arrangements depending on the type of case and services required. This may include hourly rates, flat fees, or contingency fees. During your initial consultation, we'll discuss the most appropriate billing structure for your specific situation."
  },
  {
    question: "How long will my case take to resolve?",
    answer: "The duration of each case varies significantly depending on its complexity, the parties involved, and the legal process required. During our initial consultation, we'll provide an estimated timeline based on our experience with similar cases and discuss factors that might affect the duration."
  },
  {
    question: "Do you handle international legal matters?",
    answer: "Yes, we have extensive experience in international law and cross-border transactions. Our team includes attorneys who are well-versed in international business law, trade regulations, and international dispute resolution."
  },
  {
    question: "What is your success rate in litigation cases?",
    answer: "While past success doesn't guarantee future results, our firm has maintained a strong track record in litigation. We carefully evaluate each case and develop strategic approaches that align with our clients' objectives, resulting in favorable outcomes for the majority of our cases."
  },
  {
    question: "How do you keep clients informed about their cases?",
    answer: "We maintain regular communication with our clients through scheduled updates, email communications, and phone calls. Each client is assigned a primary contact person, and we ensure prompt responses to any questions or concerns that arise during the course of representation."
  },
  {
    question: "What sets your firm apart from other law firms?",
    answer: "Our firm combines extensive legal expertise with a client-centered approach. We pride ourselves on our accessibility, transparent communication, and commitment to achieving optimal results while maintaining the highest ethical standards. Our team's diverse experience and collaborative approach enable us to provide comprehensive legal solutions."
  },
  {
    question: "Do you offer pro bono services?",
    answer: "Yes, we are committed to giving back to our community through pro bono work. Our attorneys regularly participate in pro bono programs and partner with local organizations to provide legal services to those in need. Please contact our office to learn more about our pro bono initiatives."
  }
];

const FAQs = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 0 }}>
      {/* Header Banner */}
      <Box
        sx={{
          height: { xs: '250px', sm: '300px' },
          position: 'relative',
          backgroundImage: 'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mb: 10,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.7))',
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
              variant="h3"
              component="h1"
              sx={{
                color: 'white',
                fontFamily: 'Playfair Display',
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.2,
              }}
            >
              Frequently Asked{' '}
              <Box component="span" sx={{ color: '#AC835C' }}>
                Questions
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={3}>
          {faqs.map((faq, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Accordion
                sx={{
                  backgroundColor: 'white',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  borderRadius: '8px !important',
                  '&:before': {
                    display: 'none',
                  },
                  '& .MuiAccordionSummary-root': {
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&.Mui-expanded': {
                      backgroundColor: '#AC835C',
                      color: 'white',
                      borderRadius: '8px 8px 0 0',
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                    },
                  },
                  '& .MuiAccordionDetails-root': {
                    backgroundColor: 'white',
                    borderRadius: '0 0 8px 8px',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: '#AC835C',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  }
                  sx={{ p: 2 }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Playfair Display',
                      fontWeight: 600,
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 2 }}>
                  <Typography
                    sx={{
                      color: '#333',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQs;