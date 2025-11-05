import { motion } from "framer-motion";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "./Navbar";
import img3 from "../assets/mee.jpg";
import { LiaFileDownloadSolid } from "react-icons/lia";
import pdf from "../assets/GaneshhResume.pdf";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Clean minimal styled components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
  padding-top: 80px;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const AboutCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #212529;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  flex-shrink: 0;

  img {
    border-radius: 16px;
    border: 4px solid #ffffff;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const ProfileContent = styled.div`
  flex: 1;
`;

const NameTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BioText = styled.p`
  font-size: 1.1rem;
  color: #495057;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactLabel = styled.span`
  font-weight: 600;
  color: #212529;
  font-family: 'Inter', sans-serif;
`;

const ContactValue = styled.span`
  color: #6c757d;
  font-family: 'Inter', sans-serif;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: #007bff;
  color: #ffffff;
  border: none;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  text-decoration: none;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #007bff;
  border: 2px solid #007bff;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  text-decoration: none;

  &:hover {
    background: #007bff;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const SkillsHighlight = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
`;

const SkillTag = styled.span`
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
`;

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = pdf;
  link.download = "GaneshKaleResume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <Navbar />

      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>About Me</SectionTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AboutCard>
            <ProfileSection>
              <ProfileImage>
                <img
                  src={img3}
                  alt="Ganesh Kale"
                  style={{
                    height: isMobile ? "250px" : "350px",
                    width: isMobile ? "250px" : "350px",
                    objectFit: "cover",
                  }}
                />
              </ProfileImage>

              <ProfileContent>
                <NameTitle>Ganesh Kale</NameTitle>

                <BioText>
                  Result-driven Full Stack Developer with <strong>1+ years of professional experience</strong> at
                  <strong> Cybaem Tech Pvt. Ltd.</strong> and <strong>C-DAC</strong>. Skilled in React.js, Node.js,
                  Spring Boot, and MongoDB, with a proven track record of developing scalable applications that
                  improve business efficiency and user experience.
                </BioText>

                <BioText>
                  Passionate about clean code, problem-solving, and integrating AI tools to accelerate
                  development and automation. Experienced in building production applications including
                  ITSM systems, e-commerce platforms, and learning management systems.
                </BioText>

                <SkillsHighlight>
                  <SkillTag>React.js</SkillTag>
                  <SkillTag>Node.js</SkillTag>
                  <SkillTag>Spring Boot</SkillTag>
                  <SkillTag>MongoDB</SkillTag>
                  <SkillTag>Auth0</SkillTag>
                  <SkillTag>Razorpay</SkillTag>
                  <SkillTag>AI Tools</SkillTag>
                </SkillsHighlight>

                <ContactInfo>
                  <ContactItem>
                    <ContactLabel>📧 Email:</ContactLabel>
                    <ContactValue>ganeshkale030303@gmail.com</ContactValue>
                  </ContactItem>
                  <ContactItem>
                    <ContactLabel>📱 Phone:</ContactLabel>
                    <ContactValue>+91 9028441589</ContactValue>
                  </ContactItem>
                  <ContactItem>
                    <ContactLabel>📍 Location:</ContactLabel>
                    <ContactValue>Pune, Maharashtra, India</ContactValue>
                  </ContactItem>
                </ContactInfo>

                <ButtonGroup>
                  <PrimaryButton onClick={handleDownload}>
                    <LiaFileDownloadSolid style={{ fontSize: "1.25rem" }} />
                    Download Resume
                  </PrimaryButton>
                  <NavLink to="/Contact" style={{ textDecoration: "none" }}>
                    <SecondaryButton>
                      Get In Touch
                    </SecondaryButton>
                  </NavLink>
                </ButtonGroup>
              </ProfileContent>
            </ProfileSection>
          </AboutCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AboutCard>
            <SectionTitle>Education & Professional Journey</SectionTitle>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "3rem",
              marginTop: "2rem"
            }}>
              {/* Education Section */}
              <div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#212529",
                  marginBottom: "1.5rem",
                  fontFamily: "'Inter', sans-serif"
                }}>
                  🎓 Education
                </h3>

                <div style={{ paddingLeft: "1rem", borderLeft: "3px solid #007bff" }}>
                  <div style={{ marginBottom: "2rem", marginLeft: "1rem" }}>
                    <div style={{
                      fontSize: "0.9rem",
                      color: "#6c757d",
                      marginBottom: "0.5rem",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      2020 - 2024
                    </div>
                    <h4 style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#212529",
                      marginBottom: "0.5rem",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      B.Tech - Computer Science Engineering
                    </h4>
                    <p style={{
                      fontSize: "1rem",
                      color: "#495057",
                      margin: "0",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      MGM's College of Engineering, Nanded<br />
                      CGPA: 7.10
                    </p>
                  </div>

                  <div style={{ marginBottom: "2rem", marginLeft: "1rem" }}>
                    <div style={{
                      fontSize: "0.9rem",
                      color: "#6c757d",
                      marginBottom: "0.5rem",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      2018 - 2020
                    </div>
                    <h4 style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#212529",
                      marginBottom: "0.5rem",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Higher Secondary Education (HSE)
                    </h4>
                    <p style={{
                      fontSize: "1rem",
                      color: "#495057",
                      margin: "0",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Shri CBG PU Science College, Kardyal<br />
                      Percentage: 75.16%
                    </p>
                  </div>

                  <div style={{ marginLeft: "1rem" }}>
                    <div style={{
                      fontSize: "0.9rem",
                      color: "#6c757d",
                      marginBottom: "0.5rem",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      2017 - 2018
                    </div>
                    <h4 style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#212529",
                      marginBottom: "0.5rem",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Secondary School Certificate (SSC)
                    </h4>
                    <p style={{
                      fontSize: "1rem",
                      color: "#495057",
                      margin: "0",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Cambridge Vidyalaya, Nanded<br />
                      Percentage: 78.00%
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Summary */}
              <div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#212529",
                  marginBottom: "1.5rem",
                  fontFamily: "'Inter', sans-serif"
                }}>
                  💼 Professional Growth
                </h3>

                <div style={{ paddingLeft: "1rem", borderLeft: "3px solid #28a745" }}>
                  <div style={{ marginBottom: "2rem", marginLeft: "1rem" }}>
                    <div style={{
                      fontSize: "0.9rem",
                      color: "#6c757d",
                      marginBottom: "0.5rem",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Aug 2025 - Present
                    </div>
                    <h4 style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#212529",
                      marginBottom: "0.5rem",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Full Stack Developer
                    </h4>
                    <p style={{
                      fontSize: "1rem",
                      color: "#495057",
                      margin: "0",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Cybaem Tech Pvt. Ltd., Pune<br />
                      Building production applications and improving business efficiency
                    </p>
                  </div>

                  <div style={{ marginLeft: "1rem" }}>
                    <div style={{
                      fontSize: "0.9rem",
                      color: "#6c757d",
                      marginBottom: "0.5rem",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Mar 2024 - Jul 2024
                    </div>
                    <h4 style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#212529",
                      marginBottom: "0.5rem",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Full Stack Developer Intern
                    </h4>
                    <p style={{
                      fontSize: "1rem",
                      color: "#495057",
                      margin: "0",
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      C-DAC, Pune<br />
                      Developed PARAM SHAVAK sales portal with 20% performance improvement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AboutCard>
        </motion.div>
      </ContentWrapper>
    </Container>
  );
};

export default About;

