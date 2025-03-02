import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import {
  Gavel,
  Building2,
  Scale,
  Briefcase,
  FileText,
  Users,
  X,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Corporate Law",
    icon: <Building2 size={40} />,
    shortDescription:
      "Expert guidance in corporate governance and business law",
    fullDescription: `Our corporate law practice provides comprehensive legal services to businesses of all sizes. We specialize in:
    
    • Corporate formation and structuring
    • Mergers and acquisitions
    • Corporate governance
    • Shareholder agreements
    • Business contracts and negotiations
    • Regulatory compliance
    
    With decades of experience, our corporate lawyers ensure your business operates smoothly while minimizing legal risks.`,
  },
  {
    title: "Litigation",
    icon: <Gavel size={40} />,
    shortDescription: "Strategic representation in complex legal disputes",
    fullDescription: `Our litigation team handles complex disputes across various jurisdictions. Our expertise includes:
    
    • Commercial litigation
    • Civil litigation
    • Alternative dispute resolution
    • Appellate advocacy
    • Class action defense
    • International arbitration
    
    We develop strategic approaches to achieve optimal outcomes while managing costs and risks effectively.`,
  },
  {
    title: "Intellectual Property",
    icon: <Scale size={40} />,
    shortDescription:
      "Protection and enforcement of intellectual property rights",
    fullDescription: `Our IP practice helps clients protect and monetize their intellectual property assets. Services include:
    
    • Patent prosecution and litigation
    • Trademark registration and protection
    • Copyright law
    • Trade secrets protection
    • IP portfolio management
    • Technology licensing
    
    We work with innovators across industries to secure and defend their intellectual property rights.`,
  },
  {
    title: "Employment Law",
    icon: <Users size={40} />,
    shortDescription: "Comprehensive employment and labor law solutions",
    fullDescription: `Our employment law practice addresses all aspects of the employer-employee relationship:
    
    • Employment contracts and policies
    • Workplace discrimination
    • Labor relations
    • Compensation and benefits
    • Workplace safety compliance
    • Employment litigation
    
    We help employers maintain compliant workplaces while protecting their business interests.`,
  },
  {
    title: "Contract Law",
    icon: <FileText size={40} />,
    shortDescription: "Expert contract drafting and negotiation services",
    fullDescription: `Our contract law practice provides comprehensive services for all contractual matters:
    
    • Contract drafting and review
    • Negotiation support
    • Contract dispute resolution
    • Commercial agreements
    • International contracts
    • Contract compliance
    
    We ensure your agreements are clear, enforceable, and protect your interests.`,
  },
  {
    title: "Business Advisory",
    icon: <Briefcase size={40} />,
    shortDescription: "Strategic legal counsel for business growth",
    fullDescription: `Our business advisory practice provides strategic legal guidance for:
    
    • Business strategy and planning
    • Risk management
    • Regulatory compliance
    • Corporate restructuring
    • International expansion
    • Business succession planning
    
    We partner with businesses to achieve their objectives while navigating legal complexities.`,
  },
];

const PracticeAreas = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (area) => {
    setSelectedArea(area);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", pt: 0 }}>
      {/* Banner Section */}
      <Box
        sx={{
          height: { xs: "300px", sm: "350px" },
          position: "relative",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          mb: 6,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ height: "100%", position: "relative", zIndex: 1 }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              pt: { xs: 8, sm: 9 },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "white",
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                lineHeight: 1.2,
              }}
            >
              Legal{" "}
              <Box component="span" sx={{ color: "#AC835C" }}>
                Practice Areas
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Playfair Display",
            color: "#AC835C",
            fontWeight: 700,
            mb: 2,
          }}
        >
          Expert Legal Services for Your Business & Personal Needs
        </Typography>
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            color: " #2B2523",
            fontWeight: 600,
          }}
        >
          Our team of dedicated legal professionals specializes in multiple
          areas of law, ensuring that you receive expert guidance and
          representation tailored to your unique legal needs.
        </Typography>
      </Container>

      {/* Practice Areas Grid */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {practiceAreas.map((area, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                onClick={() => handleCardClick(area)}
                sx={{
                  backgroundColor: "#F5F5F5",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "black",
                    transform: "translateY(-5px)",
                    "& .MuiTypography-root": {
                      color: "white",
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: "#AC835C", mb: 2 }}>{area.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Playfair Display",
                      fontWeight: 600,
                      mb: 2,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {area.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#666",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {area.shortDescription}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="practice-area-modal"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, sm: 4 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 600,
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
            outline: "none",
          }}
        >
          {selectedArea && (
            <>
              <Box
                sx={{
                  bgcolor: "#AC835C",
                  p: 3,
                  borderRadius: "8px 8px 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ color: "white" }}>{selectedArea.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontFamily: "Playfair Display",
                      fontWeight: 600,
                    }}
                  >
                    {selectedArea.title}
                  </Typography>
                </Box>
                <IconButton onClick={handleCloseModal} sx={{ color: "white" }}>
                  <X size={24} />
                </IconButton>
              </Box>
              <Box sx={{ p: 4 }}>
                <Typography
                  sx={{
                    color: "#333",
                    whiteSpace: "pre-line",
                    lineHeight: 1.8,
                  }}
                >
                  {selectedArea.fullDescription}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default PracticeAreas;
