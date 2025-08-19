import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import AOS from "aos";
import styled, { keyframes } from "styled-components";
import {
  FaJava,
  FaPython,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaRobot,
} from "react-icons/fa";
import {
  SiSpring,
  SiMongodb,
  SiHibernate,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiSupabase,
  SiNetlify,
  SiRender,
  SiPostgresql,
  SiReplit,
} from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

// Futuristic animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
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
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled components
const Container = styled(Box)`
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
      radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
    animation: ${rotate} 20s linear infinite;
  }
`;

const GlassCard = styled(Card)`
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 20px !important;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  animation: ${float} 6s ease-in-out infinite;
  
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
    transform: translateY(-15px) rotateX(5deg) rotateY(5deg) !important;
    animation-play-state: paused;
    box-shadow: 
      0 25px 50px rgba(0, 255, 255, 0.2),
      0 0 80px rgba(255, 0, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    border-color: rgba(0, 255, 255, 0.4) !important;
  }
`;

const CategoryTitle = styled(Typography)`
  background: linear-gradient(45deg, #00ffff, #ff00ff, #00ff7f) !important;
  background-size: 200% 200% !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent !important;
  animation: ${shimmer} 3s ease-in-out infinite !important;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.3) !important;
  font-weight: 700 !important;
  position: relative;
  z-index: 1;
`;

const SkillItemContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(10px) scale(1.02);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.2);
  }
`;

const IconContainer = styled(Box)`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00ffff, #ff00ff, #00ff7f);
    border-radius: 14px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.1) rotateZ(5deg);
    
    &::before {
      opacity: 1;
    }
  }
`;

const SkillName = styled(Typography)`
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 500 !important;
  background: linear-gradient(90deg, #ffffff, #00ffff, #ffffff) !important;
  background-size: 200% 200% !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent !important;
  transition: all 0.3s ease !important;
  
  &:hover {
    animation: ${shimmer} 1s ease-in-out !important;
  }
`;

const MainTitle = styled(Typography)`
  background: linear-gradient(45deg, #ffffff, #00ffff, #ff00ff, #ffffff) !important;
  background-size: 400% 400% !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent !important;
  animation: ${shimmer} 4s ease-in-out infinite !important;
  text-shadow: 0 0 30px rgba(0, 255, 255, 0.5) !important;
  font-weight: 800 !important;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #00ffff, transparent);
    border-radius: 2px;
    animation: ${glow} 2s ease-in-out infinite;
  }
`;

const Subtitle = styled(Typography)`
  color: rgba(255, 255, 255, 0.7) !important;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1) !important;
  font-weight: 400 !important;
  margin-bottom: 3rem !important;
`;

const SkillItem = ({ icon, name }) => {
  return (
    <SkillItemContainer>
      <IconContainer>
        {icon}
      </IconContainer>
      <SkillName variant="body1">
        {name}
      </SkillName>
    </SkillItemContainer>
  );
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Core Java", icon: <FaJava size={22} color="#5382A1" /> },
        { name: "Advanced Java", icon: <SiSpring size={22} color="#6DB33F" /> },
        { name: "Python", icon: <FaPython size={22} color="#3776AB" /> },
        { name: "Javascript", icon: <FaJsSquare size={22} color="#F7DF1E" /> },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 size={22} color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt size={22} color="#1572B6" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={22} color="#06B6D4" />,
        },
        { name: "Bootstrap", icon: <FaBootstrap size={22} color="#7952B3" /> },
        { name: "React.js", icon: <FaReact size={22} color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs size={22} color="#ffffff" /> },
        { name: "React Native", icon: <FaReact size={22} color="#61DAFB" /> },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Spring", icon: <SiSpring size={22} color="#6DB33F" /> },
        { name: "Spring Boot", icon: <SiSpring size={22} color="#6DB33F" /> },
        { name: "Hibernate", icon: <SiHibernate size={22} color="#59666C" /> },
        { name: "Node.js", icon: <FaNodeJs size={22} color="#339933" /> },
        { name: "Express.js", icon: <SiExpress size={22} color="#ffffff" /> },
        { name: "REST APIs", icon: <MdOutlineApi size={22} color="#FF6B6B" /> },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={22} color="#47A248" /> },
        { name: "SQL", icon: <FaDatabase size={22} color="#00758F" /> },
        { name: "Supabase", icon: <SiSupabase size={22} color="#3ECF8E" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql size={22} color="#336791" />,
        },
      ],
    },
    {
      category: "Other Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt size={22} color="#F05032" /> },
        { name: "Netlify", icon: <SiNetlify size={22} color="#00C7B7" /> },
        { name: "Render", icon: <SiRender size={22} color="#46E3B7" /> },
        { name: "Replit", icon: <SiReplit size={22} color="#667881" /> },
        {
          name: "Bolt AI",
          icon: <GiArtificialIntelligence size={22} color="#7E57C2" />,
        },
        { name: "Rocket AI", icon: <FaRobot size={22} color="#FF7043" /> },
      ],
    },
  ];

  return (
    <Container
      textAlign="center"
      pt={12}
      pb={12}
      position="relative"
    >
      <Box position="relative" zIndex={1}>
        <Parallax speed={-3}>
          <MainTitle variant="h3" mb={2}>
            My Skills
          </MainTitle>
          <Subtitle
            variant="subtitle1"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              px: 2,
            }}
          >
            Technologies and tools I've mastered to create powerful applications
          </Subtitle>
        </Parallax>

        <Grid container spacing={4} justifyContent="center" mt={5} px={4}>
          {skillsData.map((categoryData, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <GlassCard
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent sx={{ p: 3, position: 'relative', zIndex: 1 }}>
                  <CategoryTitle
                    variant="h5"
                    mb={3}
                    sx={{
                      minHeight: "64px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      p: 1.5,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {categoryData.category}
                  </CategoryTitle>
                  <Grid container spacing={1}>
                    {categoryData.skills.map((skill, skillIndex) => (
                      <Grid item key={skillIndex} xs={6}>
                        <SkillItem icon={skill.icon} name={skill.name} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;