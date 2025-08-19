import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import img1 from "../assets/mind1.jpg";
import Navbar from "./Navbar";
import { useTheme, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Futuristic animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotateX(0deg); }
  50% { transform: translateY(-15px) rotateX(5deg); }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3), 
                0 0 40px rgba(0, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  50% { 
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.4), 
                0 0 60px rgba(255, 0, 255, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled components
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
    animation: ${rotate} 20s linear infinite;
  }
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #ffffff, #00ffff, #ff00ff, #ffffff);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${shimmer} 4s ease-in-out infinite;
  text-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #00ffff, transparent);
    border-radius: 2px;
    animation: ${glow} 2s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  width: 280px;
  height: 320px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${float} 6s ease-in-out infinite;
  cursor: pointer;
  
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
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-20px) rotateX(10deg) rotateY(5deg) scale(1.05);
    animation-play-state: paused;
    box-shadow: 
      0 30px 60px rgba(0, 255, 255, 0.3),
      0 0 80px rgba(255, 0, 255, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-color: rgba(0, 255, 255, 0.5);
  }
  
  &:nth-child(2) {
    animation-delay: -2s;
  }
  
  &:nth-child(3) {
    animation-delay: -4s;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: auto;
    min-height: 280px;
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border: 2px solid rgba(0, 255, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2) rotateZ(10deg);
    background: rgba(0, 255, 255, 0.2);
    border-color: rgba(0, 255, 255, 0.6);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
  }
`;

const ServiceTitle = styled.h2`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 1rem 0;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CTASection = styled.section`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  align-items: center;
  gap: ${props => props.isMobile ? '2rem' : '3rem'};
  padding: 3rem;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 4rem auto;
  max-width: 1200px;
  position: relative;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%);
    border-radius: 25px;
    pointer-events: none;
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 255, 255, 0.2);
    border-color: rgba(0, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    margin: 2rem 1rem;
    padding: 2rem;
  }
`;

const CTAContent = styled.div`
  flex: 1;
  text-align: ${props => props.isMobile ? 'center' : 'left'};
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: ${props => props.isMobile ? '2rem' : '2.8rem'};
  font-weight: 800;
  background: linear-gradient(45deg, #ffffff, #00ffff, #ff00ff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${shimmer} 3s ease-in-out infinite;
  text-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const CTASubtitle = styled.h4`
  color: rgba(255, 0, 255, 0.8);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
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
  width: ${props => props.isMobile ? '200px' : 'auto'};
  
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
      0 15px 35px rgba(0, 255, 255, 0.4),
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

const ImageContainer = styled.div`
  position: relative;
  transition: all 0.4s ease;
  
  img {
    width: ${props => props.isMobile ? '200px' : '300px'};
    height: ${props => props.isMobile ? '200px' : '300px'};
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    animation: ${float} 4s ease-in-out infinite;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    background: linear-gradient(45deg, #00ffff, #ff00ff, #00ff7f);
    border-radius: 50%;
    z-index: -1;
    animation: ${glow} 3s ease-in-out infinite;
  }
  
  &:hover {
    transform: scale(1.1) rotateY(10deg);
    
    img {
      border-color: rgba(0, 255, 255, 0.6);
      animation-play-state: paused;
    }
  }
`;

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "I design and build tailored mobile applications that meet specific business needs, ensuring both functionality and user satisfaction."
    },
    {
      icon: "💻",
      title: "Frontend Development",
      description: "I create visually engaging, responsive interfaces that work seamlessly across devices, providing a smooth user experience."
    },
    {
      icon: "🔧",
      title: "Backend Development",
      description: "Developing backend systems that are robust, secure, and scalable, tailored to handle growing business needs."
    }
  ];

  return (
    <Container>
      <Navbar />
      
      <div style={{ 
        paddingTop: '120px', 
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 1
      }}>
        <MainTitle>Services</MainTitle>
        
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "6rem",
            padding: "0 2rem"
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              data-aos="zoom-out"
              data-aos-delay={index * 200}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </div>

        <CTASection isMobile={isMobile} data-aos="fade-up">
          <CTAContent isMobile={isMobile}>
            <CTASubtitle>Get In Touch</CTASubtitle>
            <CTATitle isMobile={isMobile}>
              LET'S CREATE<br />
              SOMETHING AMAZING TOGETHER
            </CTATitle>
            
            <ButtonContainer isMobile={isMobile}>
              <GlowButton isMobile={isMobile}>
                <NavLink
                  to="/project"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  My Last Projects
                </NavLink>
              </GlowButton>
              <GlowButton isMobile={isMobile}>
                <NavLink
                  to="/contact"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Contact Me
                </NavLink>
              </GlowButton>
            </ButtonContainer>
          </CTAContent>
          
          <ImageContainer isMobile={isMobile}>
            <img
              src={img1}
              alt="Person Pointing"
            />
          </ImageContainer>
        </CTASection>
      </div>
    </Container>
  );
};

export default Services;