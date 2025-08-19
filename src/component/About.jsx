import { motion } from "framer-motion";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import img2 from "../assets/poster.jpg";
import img1 from "../assets/office.jpeg";
import img3 from "../assets/mee.jpg";
import { LiaFileDownloadSolid } from "react-icons/lia";
import pdf from "../assets/GaneshhResume.pdf";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

 const handleDownload = () => {
   const link = document.createElement("a");
   link.href = pdf;
   link.download = "GANESHKALERESUME.pdf";
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
 };
 const Button = styled.button`
   background-color: rgba(16, 15, 16, 0.78);
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
     background-color: rgb(77, 8, 88);
     transform: scale(1.1);
   }
 `;

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .timeline {
          position: relative;
          padding-left: 4px;
          border-left: 2px solid #0033cc93;
        }
        .timelineItem {
          position: relative;
          margin-bottom: 20px;
          margin-left: 20px;
        }
        .timelineItem::before {
          content: "";
          position: absolute;
          left: -30px;
          top: 5px;
          width: 10px;
          height: 10px;
          background-color: #0033cce7;
          border-radius: 50%;
        }
        .timelineItem .year {
          font-size: 14px;
          color: #888;
          margin-bottom:5px;
        }

        @media (max-width: 768px) {
          .timelineItem::before {
            left: -20px;
          }
        }
      `}</style>

      <Navbar />
      <Box
        sx={{
          paddingTop: "5vh",
          color: "black",
          width: "100%",
          minHeight: "80vh",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box
            id="about-me"
            sx={{
              margin: isMobile ? "5% 5%" : "7% 10%",
              paddingBottom: "50px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",
                fontSize: isMobile ? "28px" : "35px",
                color: "#333",
                mb: 2,
                mt: 4,
                fontWeight: "bold",
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                textShadow: "2px 2px 4px rgba(17, 90, 179, 0.3)",
              }}
            >
              About Me
            </Typography>
            <Box
              id="about"
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "center",
                alignItems: "center",
                gap: isMobile ? "20px" : "50px",
              }}
            >
              <Box id="about-1">
                <img
                  src={img3}
                  alt="Ganesh"
                  style={{
                    height: isMobile ? "200px" : "340px",
                    width: "auto",
                    borderRadius: "10%",
                    marginTop: isMobile ? "0" : "-50px",
                    boxShadow: "0px 0px 15px #c141bf",
                  }}
                />
              </Box>
              <Box
                id="about-2"
                sx={{
                  maxWidth: isMobile ? "90%" : "500px",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: isMobile ? "24px" : "28px",
                    mb: 1,
                    color: "#003366",
                    fontWeight: "bold",
                    fontFamily:
                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                    textShadow: "2px 2px 4px rgba(17, 90, 179, 0.3)",
                  }}
                >
                  I'm Ganesh
                </Typography>
                <Typography
                  sx={{
                    fontSize: isMobile ? "14px" : "16px",
                    lineHeight: 1.6,
                    color: "#555",
                    mb: 1,
                    fontFamily:
                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                  }}
                >
                  I am a passionate Full-Stack Developer with{" "}
                  <b>1+ year of professional experience</b>, gained through
                  impactful roles at <b>Tweaking World</b> and <b>CDAC</b>. I
                  specialize in <b>Java</b>, <b>Spring Boot</b>, <b>React</b>,
                  and <b>Node.js</b>, and have built scalable, secure
                  applications using the <b>MERN stack</b>, <b>Next.js</b>, and{" "}
                  <b>JWT</b>. I’ve worked on real-time systems, optimized{" "}
                  <b>RESTful APIs</b>, and integrated efficient database
                  solutions with <b>MongoDB</b> and <b>SQL</b>. With strong
                  problem-solving skills and a focus on clean code, I thrive in{" "}
                  <b>Agile</b> environments and enjoy transforming innovative
                  ideas into user-centric digital products. Let’s connect and
                  create something meaningful!
                </Typography>
                <Typography
                  sx={{
                    fontSize: isMobile ? "14px" : "16px",
                    lineHeight: 1.6,
                    color: "#555",
                    mb: 1,
                    fontFamily:
                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                  }}
                >
                  I’m always exploring new technologies and techniques to keep
                  up with the latest in web development and ensure the best
                  possible solutions for users. Let’s connect and bring creative
                  ideas to life!
                </Typography>

                <Box
                  className="info-container"
                  sx={{
                    maxWidth: "600px",
                    padding: "20px",
                    marginTop: "-20px",
                  }}
                >
                  <Box
                    className="info-row"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px 0",
                    }}
                  >
                    <Box sx={{ flex: 1, margin: "5px" }}>
                      <label
                        style={{
                          fontWeight: "bold",
                          color: "#190eb2c3",
                          fontFamily:
                            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                        }}
                      >
                        Email :
                      </label>
                      <span
                        style={{
                          color: "rgba(41, 35, 35, 0.805)",
                          marginLeft: "5px",
                          fontFamily:
                            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                        }}
                      >
                        ganeshkale030303@gmail.com
                      </span>
                    </Box>
                  </Box>

                  <Box
                    className="info-row"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px 0",
                    }}
                  >
                    <Box sx={{ flex: 1, margin: "5px" }}>
                      <label
                        style={{
                          fontWeight: "bold",
                          color: "#190eb2c3",
                          fontFamily:
                            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                        }}
                      >
                        Phone :
                      </label>
                      <span
                        style={{
                          color: "rgba(41, 35, 35, 0.805)",
                          marginLeft: "5px",
                          fontFamily:
                            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                        }}
                      >
                        +91 9028441589
                      </span>
                    </Box>
                  </Box>

                  <Box
                    className="info-row"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px 0",
                    }}
                  >
                    <Box sx={{ flex: 1, margin: "5px" }}>
                      <label
                        style={{
                          fontWeight: "bold",
                          color: "#190eb2c3",
                          fontFamily:
                            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                        }}
                      >
                        City :
                      </label>
                      <span
                        style={{
                          color: "rgba(41, 35, 35, 0.805)",
                          marginLeft: "5px",
                          fontFamily:
                            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                        }}
                      >
                        Pune, Maharashtra, India.
                      </span>
                    </Box>
                  </Box>

                  <Box
                    className="button-container"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 3,
                      gap: "15px",
                      marginLeft: isMobile ? "0" : "-70px",
                    }}
                  >
                    <Button
                      style={{
                        borderRadius: "50px",
                      }}
                      onClick={handleDownload}
                    >
                      Download CV
                      <LiaFileDownloadSolid
                        style={{ height: "30px", width: "auto" }}
                      />{" "}
                    </Button>
                    <Button
                      style={{
                        borderRadius: "50px",
                        color: "white",
                      }}
                    >
                      <NavLink
                        to="/contact"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Hire Me
                      </NavLink>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>

        <Box>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",
                fontSize: isMobile ? "35px" : "35px",
                color: "#333",
                mb: 7,
                mt: 4,
                fontWeight: "bold",
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                textShadow: "2px 2px 4px rgba(17, 90, 179, 0.3)",
              }}
            >
              Education and Experience
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                padding: "10px",
                marginLeft: isMobile ? "0" : "100px",
                gap: isMobile ? "20px" : "0",
              }}
            >
              <Box
                sx={{
                  maxWidth: "800px",
                  padding: "15px",
                  width: isMobile ? "90%" : "39%",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px 5px #433db387",
                  marginLeft: isMobile ? "0" : "30px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    color: "#003366",
                    mb: 3,
                    fontWeight: "bold",
                    fontFamily:
                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                    textShadow: "2px 2px 4px rgba(17, 90, 179, 0.3)",
                  }}
                >
                  Education
                </Typography>
                <Box className="timeline">
                  <Box className="timelineItem">
                    <li
                      className="year"
                      style={{
                        fontWeight: "bold",
                        color: "#333",
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        fontFamily:
                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                      }}
                    >
                      📅 2020 - 2024
                    </li>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "17px",
                        fontWeight: "bold",
                        padding: "10px",
                        color: "#333",
                        marginTop: "-5px",
                        marginLeft: "-10px",
                        marginBottom: "10px",
                        fontFamily:
                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                        textShadow: "2px 2px 4px rgba(17, 90, 179, 0.3)",
                      }}
                    >
                      B.Tech - Computer Science - 7.10 CGPA
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        mt: -1.25,
                        textTransform: "capitalize",
                        fontFamily: "inherit",
                      }}
                    >
                      Mgm's College of Engineering Nanded, Maharashtra.
                    </Typography>
                  </Box>
                  <Box className="timelineItem">
                    <li
                      style={{
                        fontWeight: "bold",
                        color: "#333",
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        fontFamily:
                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                      }}
                      className="year"
                    >
                      📅 2018 - 2020
                    </li>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        padding: "10px",
                        color: "#333",
                        marginTop: "-5px",
                        marginLeft: "-10px",
                        marginBottom: "10px",
                        fontFamily:
                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                        textShadow: "2px 2px 4px rgba(17, 90, 179, 0.3)",
                      }}
                    >
                      Higher Secondary Education (HSE) - 75.16%
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        mt: -1.25,
                        fontFamily: "inherit",
                      }}
                    >
                      Shri CBG PU Science College, Kardyal, Karnataka.
                    </Typography>
                  </Box>
                  <Box className="timelineItem">
                    <li
                      className="year"
                      style={{
                        fontWeight: "bold",
                        color: "#333",
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        fontFamily:
                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                      }}
                    >
                      📅 2017 - 2018
                    </li>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "17px",
                        fontWeight: "bold",
                        paddingTop: "5px",
                        color: "#333",
                        marginTop: "-5px",
                        paddingBottom: "10px",
                        marginBottom: "8px",
                        fontFamily:
                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                        textShadow: "2px 2px 4px rgba(17, 90, 179, 0.3)",
                      }}
                    >
                      Secondary School Certificate (SSC) - 78.00%
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        mt: -1.25,
                        fontFamily: "inherit",
                      }}
                    >
                      Cambridge Vidyalaya Nanded, Maharashtra.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  padding: "10px",
                  width: isMobile ? "90%" : "38%",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px 5px #433db387",
                  marginLeft: isMobile ? "0" : "40px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    color: "#003366",
                    padding: "10px",
                    marginBottom: "15px",
                    fontWeight: "bold",
                    fontFamily:
                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Experience
                </Typography>
              
                <Box className="timeline">
                  <Box className="timelineItem">
                    <li
                      className="year"
                      style={{
                        fontWeight: "bold",
                        color: "#333",
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        fontFamily:
                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                      }}
                    >
                      📅 03/2024 - 06/2024
                    </li>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "17px",
                        fontWeight: "bold",
                        paddingTop: "5px",
                        paddingBottom: "10px",
                        marginBottom: "8px",
                        color: "#333",
                        fontFamily:
                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                        textShadow: "2px 2px 4px rgba(17, 90, 179, 0.3)",
                      }}
                    >
                      Centre for Development of Advanced Computing (C-DAC)
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        mt: -1.25,
                        fontFamily: "inherit",
                      }}
                    >
                      Full-Stack Developer Intern, Pune, India.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Box id="exprience" sx={{ padding: "20px 0" }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: isMobile ? "28px" : "35px",
                  color: "#333",
                  mt: 10,
                  mb: 6,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily:
                    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                  textShadow: "2px 2px 4px rgba(17, 90, 179, 0.3)",
                }}
              >
                Professional Experience
              </Typography>
              <Box
                id="pe"
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: isMobile ? "20px" : "50px",
                  margin: isMobile ? "0 5%" : "0 10%",
                }}
              >
                {/* <Box id="ex-1">
                  <img
                    src={img1}
                    alt="Office"
                    style={{
                      height: isMobile ? "240px" : "300px",
                      width: "auto",
                      borderRadius: "15px",
                      marginTop: isMobile ? "0" : "60px",
                      boxShadow: "0px 0px 30px #631bb0d6",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Box> */}
           
                <Box id="ex-2">
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: isMobile ? "20px" : "23px",
                      mb: 1,
                      color: "#003366",
                      fontWeight: "bold",
                      fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                      textShadow: "2px 2px 4px rgba(17, 90, 179, 0.3)",
                    }}
                  >
                     C-DAC
                  </Typography>
                  <hr
                    style={{
                      border: "1px solid #1d26419b",
                      color: "#0033cc9b",
                    }}
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      my: 1,
                      fontWeight: "bold",
                      color: "#333",

                      fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                      textShadow: "2px 2px 4px rgba(17, 90, 179, 0.3)",
                    }}
                  >
                    Full-Stack Developer Intern
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555",
                      my: 1,
                      fontSize: isMobile ? "14px" : "18px",
                      fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                    }}
                  >
                    03/2024 - 06/2024 | Pune, India
                  </Typography>

                  <Typography
                    sx={{
                      color: "#555",
                      my: 1,
                      fontSize: isMobile ? "14px" : "16px",
                      fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                    }}
                  >
                    Built PARAM SHAVAK supercomputer sales portal using MERN
                    stack, streamlining procurement operations and reducing page
                    load time by 20%{" "}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#555",
                      my: 1,
                      fontSize: isMobile ? "14px" : "16px",
                      fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                    }}
                  >
                    Implemented automated email system and responsive UI,
                    significantly improving customer engagement across devices
                  </Typography>

                  <Typography
                    sx={{
                      color: "#555",
                      my: 1,
                      fontSize: isMobile ? "14px" : "16px",
                      fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                    }}
                  >
                    Built a fully responsive full-stack website, achieving 99%
                    cross-device compatibility and enhancing the sales process
                    efficiency
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default About;

