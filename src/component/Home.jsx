import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import Skills from "./Skills";
import Navbar from "./Navbar";
import img2 from "../assets/ganesh.jpg";
import pdf from "../assets/GaneshhResume.pdf";
import { useMediaQuery, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";

// Clean minimal styled components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
  position: relative;
`;

const ContentCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  max-width: 600px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #212529;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HighlightText = styled.span`
  color: #007bff;
  font-weight: 800;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: #6c757d;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  font-family: 'Inter', sans-serif;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #495057;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #007bff;
    transform: translateY(-2px);
  }
`;

const ProfileImage = styled.div`
  position: relative;
  transition: all 0.3s ease;

  img {
    border-radius: 16px;
    border: 4px solid #ffffff;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);

    img {
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }
  }
`;

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = pdf;
  link.download = "GANESHKALERESUME.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Navbar />
      
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {isMobile && (
          <ImageContainer style={{ marginBottom: "2rem" }}>
            <img
              src={img2}
              alt="Ganesh"
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
              }}
            />
          </ImageContainer>
        )}

        <GlassCard style={{ maxWidth: "600px", marginRight: isMobile ? "0" : "2rem" }}>
          <Parallax speed={-10}>
            <div style={{ marginBottom: "2rem" }}>
              <AnimatedTypography>
                Hi, I am{" "}
                <span style={{ 
                  background: "linear-gradient(45deg, #ff00ff, #00ffff)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}>
                  Ganesh...
                </span>
              </AnimatedTypography>
            </div>
          </Parallax>

          <Parallax speed={-8}>
            <GlowText>
              Full Stack Java | React Developer
            </GlowText>
          </Parallax>

          <Parallax speed={-6}>
            <SubText>
              I create stunning websites for your business, highly experienced
              in web design and development with cutting-edge technologies.
            </SubText>
          </Parallax>

          <Parallax speed={-4}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "center" : "flex-start",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <GlowButton onClick={handleDownload}>
                Download Resume
                <LiaFileDownloadSolid style={{ fontSize: "1.5rem" }} />
              </GlowButton>
              
              <div style={{ display: "flex", gap: "1rem" }}>
                <IconWrapper>
                  <NavLink target="_blank" to="https://github.com/ganesh5491">
                    <FaGithubSquare />
                  </NavLink>
                </IconWrapper>
                <IconWrapper>
                  <NavLink
                    target="_blank"
                    to="https://www.linkedin.com/in/ganesh-kale-70a50a248"
                  >
                    <FaLinkedin />
                  </NavLink>
                </IconWrapper>
              </div>
            </div>
          </Parallax>
        </GlassCard>

        {!isMobile && (
          <ImageContainer>
            <img
              src={img2}
              alt="Ganesh"
              style={{
                height: "340px",
                width: "340px",
                objectFit: "cover",
              }}
            />
          </ImageContainer>
        )}
      </div>
      
      <Skills />
    </Container>
  );
};

export default Home;