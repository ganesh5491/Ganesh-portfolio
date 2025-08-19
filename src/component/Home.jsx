import { Parallax } from "react-scroll-parallax";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import Skills from "./Skills";
import Navbar from "./Navbar";
import img2 from "../assets/ganesh.jpg";
import pdf from "../assets/GaneshhResume.pdf";
import { useMediaQuery, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";

// Futuristic animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3), 0 0 60px rgba(0, 255, 255, 0.1); }
  50% { box-shadow: 0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.4), 0 0 90px rgba(255, 0, 255, 0.2); }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: #00ffff; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// Styled components with glassmorphism
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(0, 255, 127, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    border-radius: 20px;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 
      0 20px 40px rgba(0, 255, 255, 0.2),
      0 0 60px rgba(255, 0, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(0, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

const AnimatedTypography = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(45deg, #00ffff, #ff00ff, #00ff7f, #ff6b6b);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${shimmer} 3s ease-in-out infinite;
  text-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  overflow: hidden;
  border-right: 0.15em solid #00ffff;
  white-space: nowrap;
  letter-spacing: 0.1em;
  animation: ${typing} 3.5s steps(15) infinite, ${blinkCaret} 2.5s infinite, ${shimmer} 3s ease-in-out infinite;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    animation: ${shimmer} 2s infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const GlowButton = styled.button`
  background: linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2));
  border: 1px solid rgba(0, 255, 255, 0.3);
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 
      0 10px 30px rgba(0, 255, 255, 0.4),
      0 0 50px rgba(255, 0, 255, 0.3);
    border-color: rgba(0, 255, 255, 0.6);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
`;

const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-5px) rotateZ(10deg) scale(1.2);
    filter: drop-shadow(0 10px 20px rgba(0, 255, 255, 0.4));
  }
  
  svg {
    font-size: 2.5rem;
    background: linear-gradient(45deg, #00ffff, #ff00ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.5));
  }
`;

const ImageContainer = styled.div`
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${float} 6s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(45deg, #00ffff, #ff00ff, #00ff7f);
    border-radius: 50%;
    z-index: -1;
    animation: ${glow} 3s ease-in-out infinite;
  }
  
  img {
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.1) rotateY(10deg);
    animation-play-state: paused;
    
    img {
      border-color: rgba(0, 255, 255, 0.6);
    }
  }
`;

const GlowText = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ffffff, #00ffff, #ffffff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${shimmer} 3s ease-in-out infinite;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SubText = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    font-size: 1rem;
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