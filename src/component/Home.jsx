
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

const Icon = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const GithubIcon = styled(Icon)`
  color: rgb(124, 9, 137);
  padding-left: 10px;
  padding-right: 10px;
  height: 35px;
  width: auto;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const LinkedinIcon = styled(Icon)`
  color: rgb(124, 9, 137);

  padding-left: 10px;
  padding-right: 10px;
  height: 35px;
  width: auto;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  100% { border-color: purple; }
`;

const AnimatedTypography = styled.h1`
  text-shadow: 2px 2px 4px rgba(203, 49, 220, 0.36);
  overflow: hidden;
  border-right: 0.15em solid black;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: ${typing} 3.5s steps(15) infinite, ${blinkCaret} 2.5s infinite;
  display: inline-block;
  width: fit-content;

  transition: transform 0.3s ease;
  position: absolute;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const TypingContainer = styled.div`
  width: fit-content;
  text-align: center;
  margin-bottom: 150px;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const Button = styled.button`
  background-color: rgb(124, 9, 137);
  color: white;
  border: none;
  padding: 7px 15px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: rgb(3, 9, 14);
    transform: scale(1.1);
  }
`;

const HoverText = styled.div`
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color:rgb(2, 5, 8);
  }
`;

const ImageContainer = styled.div`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
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
    <div
      style={{
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      <Navbar />

      <div
        style={{
          textAlign: "center",
          color: "black",
          width: "100%",
          marginTop: "60px",
          position: "relative",
          zIndex: 0,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        {isMobile && (
          <ImageContainer>
            <img
              src={img2}
              alt="Ganesh"
              style={{
                height: "200px",
                width: "auto",
                borderRadius: "50%",
                marginTop: "20px",
                boxShadow: "0px 0px 50px rgb(116, 26, 146)",
              }}
            />
          </ImageContainer>
        )}

        <div
          style={{
            maxWidth: "600px",
            textAlign: isMobile ? "center" : "left",
            padding: isMobile ? "0 20px" : "0",
          }}
        >
          <Parallax speed={-10}>
            <TypingContainer>
              <AnimatedTypography style={{ color: "black" }}>
                Hi, I am{" "}
                <span style={{ color: "rgb(124, 9, 137)" }}>Ganesh...</span>
              </AnimatedTypography>
            </TypingContainer>
          </Parallax>

          <Parallax speed={-8}>
            <HoverText>
              <h2
                style={{
                  marginBottom: "30px",
                  fontWeight: "bold",
                  color: "#444",
                  marginLeft: isMobile ? "0" : "20px",
                }}
              >
                Full Stack Java | React Developer
              </h2>
            </HoverText>
          </Parallax>

          <Parallax speed={-6}>
            <HoverText>
              <p
                style={{
                  marginTop: "10px",
                  maxWidth: "600px",
                  margin: "0 auto",
                  color: "#666",
                  padding: "0",
                  marginLeft: isMobile ? "0" : "20px",
                }}
              >
                I create stunning websites for your business, highly experienced
                in web design and development.
              </p>
            </HoverText>
          </Parallax>

          <Parallax speed={-4}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                marginTop: "40px",
                marginBottom: "40px",
                flexWrap: "wrap",
                marginRight: isMobile ? "0" : "180px",
              }}
            >
              <Button
                style={{
                  borderRadius: "50px",
                  fontWeight: "bold",
                }}
                onClick={handleDownload}
              >
                Download Resume
                <LiaFileDownloadSolid
                  style={{ height: "30px", width: "auto" }}
                />{" "}
              </Button>
              <NavLink target="_blank" to="https://github.com/ganesh5491">
                <GithubIcon as={FaGithubSquare} />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://www.linkedin.com/in/ganesh-kale-70a50a248"
              >
                <LinkedinIcon as={FaLinkedin} />
              </NavLink>
            </div>
          </Parallax>
        </div>

        {!isMobile && (
          <ImageContainer>
            <img
              src={img2}
              alt="Ganesh"
              style={{
                height: "340px",
                width: "auto",
                borderRadius: "50%",
                marginTop: "40px",
                marginLeft: "100px",
                boxShadow: "0px 0px 50px rgb(116, 26, 146)",
              }}
            />
          </ImageContainer>
        )}
      </div>
      <Skills />
    </div>
  );
};

export default Home;