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
  max-width: 700px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const IntroSection = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  margin-bottom: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  color: #495057;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ToolCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #007bff, #28a745);
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ToolHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ToolIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #1976d2;
  font-weight: bold;
`;

const ToolName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #212529;
  margin: 0;
  font-family: 'Inter', sans-serif;
`;

const ToolDescription = styled.p`
  color: #495057;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
`;

const UseCasesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UseCaseItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  color: #6c757d;
  font-family: 'Inter', sans-serif;

  &:before {
    content: "✓";
    color: #28a745;
    font-weight: bold;
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
`;

const MetricsSection = styled.div`
  background: linear-gradient(135deg, #007bff, #0056b3);
  border-radius: 16px;
  padding: 3rem;
  color: #ffffff;
  text-align: center;
`;

const MetricsTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif';
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const MetricCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
`;

const MetricLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
  font-family: 'Inter', sans-serif;
`;

const AIExpertise = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const aiTools = [
    {
      name: "Rocket.new",
      icon: "🚀",
      description: "AI-powered prototyping and UI enhancement platform that accelerates design-to-development workflow.",
      useCases: [
        "Rapid prototyping for client projects",
        "UI/UX design iterations",
        "Component library generation",
        "Design system automation"
      ]
    },
    {
      name: "Replit AI",
      icon: "💻",
      description: "AI-powered development environment with intelligent code assistance and debugging capabilities.",
      useCases: [
        "Accelerated debugging by 40%",
        "Code completion and suggestions",
        "Real-time error detection",
        "Collaborative coding with AI assistance"
      ]
    },
    {
      name: "Bolt AI",
      icon: "⚡",
      description: "Development acceleration platform that automates repetitive tasks and enhances productivity.",
      useCases: [
        "Automated testing workflows",
        "Code generation and refactoring",
        "Build optimization",
        "Development workflow automation"
      ]
    },
    {
      name: "Rork AI",
      icon: "🤖",
      description: "Advanced automation tool for streamlining development processes and workflow optimization.",
      useCases: [
        "CI/CD pipeline automation",
        "Deployment workflows",
        "Infrastructure automation",
        "Process optimization"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <Container>
      <Navbar />

      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <SectionTitle>AI & Automation Expertise</SectionTitle>
            <SectionSubtitle>
              Leveraging cutting-edge AI tools to accelerate development, enhance productivity,
              and deliver innovative solutions faster than traditional methods.
            </SectionSubtitle>
          </SectionHeader>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <IntroSection>
            <IntroText>
              As a modern Full Stack Developer, I integrate AI tools into every stage of the development lifecycle.
              From rapid prototyping to automated testing and deployment, AI-powered tools help me deliver
              high-quality solutions faster while maintaining code excellence and innovation.
            </IntroText>
            <IntroText>
              My experience with these tools has resulted in significant efficiency gains, reduced development
              time, and improved code quality across multiple production applications.
            </IntroText>
          </IntroSection>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ToolsGrid>
            {aiTools.map((tool, index) => (
              <ToolCard
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
              >
                <ToolHeader>
                  <ToolIcon>{tool.icon}</ToolIcon>
                  <ToolName>{tool.name}</ToolName>
                </ToolHeader>

                <ToolDescription>
                  {tool.description}
                </ToolDescription>

                <UseCasesList>
                  {tool.useCases.map((useCase, ucIndex) => (
                    <UseCaseItem key={ucIndex}>
                      {useCase}
                    </UseCaseItem>
                  ))}
                </UseCasesList>
              </ToolCard>
            ))}
          </ToolsGrid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MetricsSection>
            <MetricsTitle>AI-Driven Impact</MetricsTitle>
            <MetricsGrid>
              <MetricCard>
                <MetricValue>40%</MetricValue>
                <MetricLabel>Faster Development</MetricValue>
              </MetricCard>
              <MetricCard>
                <MetricValue>35%</MetricValue>
                <MetricLabel>Improved Efficiency</MetricValue>
              </MetricCard>
              <MetricCard>
                <MetricValue>60%</MetricValue>
                <MetricValue>Reduced Debug Time</MetricValue>
              </MetricCard>
              <MetricCard>
                <MetricValue>50%</MetricValue>
                <MetricValue>Faster Prototyping</MetricValue>
              </MetricCard>
            </MetricsGrid>
          </MetricsSection>
        </motion.div>
      </ContentWrapper>
    </Container>
  );
};

export default AIExpertise;