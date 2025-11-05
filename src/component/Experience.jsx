import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useTheme, useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";

// Styled components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
  padding-top: 80px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #212529;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
`;

const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  margin-bottom: 3rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: #007bff;
  border-radius: 50%;
  position: absolute;
  left: -10px;
  top: 20px;
  box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #e9ecef;
  z-index: 2;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: -1px;
  top: 40px;
  bottom: -30px;
  width: 2px;
  background: #e9ecef;

  ${TimelineItem}:last-child & {
    display: none;
  }
`;

const TimelineContent = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  margin-left: 3rem;
  flex: 1;
  transition: all 0.3s ease;
  border-left: 4px solid #007bff;

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
    padding: 2rem;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
`;

const JobTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #007bff;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
`;

const Location = styled.p`
  font-size: 0.95rem;
  color: #6c757d;
  margin: 0;
  font-family: 'Inter', sans-serif;
`;

const DateRange = styled.div`
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  color: #495057;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const AchievementItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: #495057;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;

  &:before {
    content: "→";
    position: absolute;
    left: 0;
    color: #007bff;
    font-weight: bold;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const TechTag = styled.span`
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
`;

const MetricHighlight = styled.span`
  background: #e8f5e8;
  color: #2e7d32;
  font-weight: 600;
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-size: 0.9em;
`;

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const experiences = [
    {
      company: "Cybaem Tech Pvt. Ltd.",
      title: "Full Stack Developer",
      location: "Pune, India",
      period: "Aug 2025 – Present",
      type: "current",
      achievements: [
        "Built full stack web and mobile applications using <MetricHighlight>MERN stack</MetricHighlight> and Spring Boot for live business and service platforms",
        "Developed <MetricHighlight>4+ production applications</MetricHighlight>: ITSM- Ticketing System, Mrugaya Jewellery, LMS and T-imoexo International",
        "Integrated <MetricHighlight>secure authentication</MetricHighlight> with Auth0 and payment gateway using Razorpay",
        "Improved business operational efficiency by <MetricHighlight>35%</MetricHighlight> through custom solutions",
        "Utilized AI tools such as Rocket.new, Replit AI, Bolt AI and Rork AI to accelerate development",
        "Deployed full stack applications on web, cPanel, and Play Store after optimizing backend APIs"
      ],
      techStack: ["React.js", "Node.js", "Spring Boot", "MongoDB", "Auth0", "Razorpay", "AI Tools"]
    },
    {
      company: "Centre for Development of Advanced Computing (C-DAC)",
      title: "Full Stack Developer Intern",
      location: "Pune, India",
      period: "Mar 2024 – Jul 2024",
      type: "internship",
      achievements: [
        "Developed <MetricHighlight>PARAM SHAVAK sales portal</MetricHighlight> using MERN stack, improving system performance and data efficiency",
        "Improved system performance by <MetricHighlight>20%</MetricHighlight> and data efficiency through optimized database queries",
        "Achieved <MetricHighlight>99% cross-device compatibility</MetricHighlight> with responsive design and comprehensive testing",
        "Integrated secure authentication with Auth0 and implemented email integration for user communications"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Auth0", "Email Integration"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <Container>
      <Navbar />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <SectionTitle>Professional Experience</SectionTitle>
            <SectionSubtitle>
              My journey as a Full Stack Developer, from intern to professional,
              building scalable applications and delivering business impact.
            </SectionSubtitle>
          </SectionHeader>
        </motion.div>

        <TimelineContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ position: "relative", paddingLeft: "2rem" }}
        >
          {/* Timeline vertical line */}
          <div
            style={{
              position: "absolute",
              left: "-1px",
              top: "20px",
              bottom: "20px",
              width: "2px",
              background: "#e9ecef"
            }}
          />

          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              variants={itemVariants}
              style={{ position: "relative" }}
            >
              <TimelineDot />
              <TimelineLine />
              <TimelineContent>
                <CompanyHeader>
                  <CompanyInfo>
                    <CompanyName>{experience.company}</CompanyName>
                    <JobTitle>{experience.title}</JobTitle>
                    <Location>{experience.location}</Location>
                  </CompanyInfo>
                  <DateRange>{experience.period}</DateRange>
                </CompanyHeader>

                <AchievementList>
                  {experience.achievements.map((achievement, achIndex) => (
                    <AchievementItem
                      key={achIndex}
                      dangerouslySetInnerHTML={{ __html: achievement }}
                    />
                  ))}
                </AchievementList>

                <TechStack>
                  {experience.techStack.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </div>
    </Container>
  );
};

export default Experience;