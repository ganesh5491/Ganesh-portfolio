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

const AnimatedCard = ({ children, delay }) => {
  return (
    <Card
      data-aos="fade-up"
      data-aos-delay={delay}
      sx={{
        background: "rgba(15, 15, 15, 0.7)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        height: "100%",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: "0",
          padding: "2px",
          background:
            "linear-gradient(135deg, rgba(99,27,176,0.6), rgba(0,212,255,0.4))",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          borderRadius: "inherit",
          pointerEvents: "none",
          transition: "all 0.5s ease",
          opacity: 0.7,
        },
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(99, 27, 176, 0.3)",
          "&:before": {
            opacity: 1,
            background:
              "linear-gradient(135deg, rgba(99,27,176,0.8), rgba(0,212,255,0.6))",
          },
        },
      }}
    >
      {children}
    </Card>
  );
};

const SkillItem = ({ icon, name }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1.5}
      sx={{
        mb: 1,
        p: 1.5,
        borderRadius: "8px",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.05)",
          transform: "translateX(5px)",
        },
      }}
    >
      <Box
        sx={{
          width: 42,
          height: 42,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "10px",
        }}
      >
        {icon}
      </Box>
      <Typography
        color="#EEE"
        variant="body1"
        sx={{
          fontWeight: 500,
          background: "linear-gradient(90deg, #EEE, #AAA)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {name}
      </Typography>
    </Box>
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
        { name: "Next.js", icon: <SiNextdotjs size={22} color="#000000" /> },
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
        { name: "Express.js", icon: <SiExpress size={22} color="#000000" /> },
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
    <Box
      textAlign="center"
      pt={12}
      pb={12}
      sx={{
        background:
          "radial-gradient(circle at center, #1a1a2e 0%, #000000 70%)",
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle, rgba(99,27,176,0.1) 0%, transparent 70%)",
          animation: "rotate 20s linear infinite",
          zIndex: 0,
        },
        "@keyframes rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      }}
    >
      <Box position="relative" zIndex={1}>
        <Parallax speed={-3}>
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={2}
            sx={{
              background: "linear-gradient(90deg, #FFF, #AAA)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            My Skills
          </Typography>
          <Typography
            variant="subtitle1"
            color="#AAA"
            mb={6}
            sx={{
              maxWidth: "700px",
              mx: "auto",
              px: 2,
            }}
          >
            Technologies and tools I've mastered to create powerful applications
          </Typography>
        </Parallax>

        <Grid container spacing={4} justifyContent="center" mt={5} px={4}>
          {skillsData.map((categoryData, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <AnimatedCard delay={index * 100}>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    mb={3}
                    sx={{
                      color: "#FFF",
                      fontWeight: 600,
                      minHeight: "64px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(90deg, rgba(99,27,176,0.3), rgba(0,212,255,0.2))",
                      borderRadius: "12px",
                      p: 1.5,
                      borderBottom: "2px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {categoryData.category}
                  </Typography>
                  <Grid container spacing={1}>
                    {categoryData.skills.map((skill, skillIndex) => (
                      <Grid item key={skillIndex} xs={6}>
                        <SkillItem icon={skill.icon} name={skill.name} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
