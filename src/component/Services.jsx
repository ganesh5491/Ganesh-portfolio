import React from "react";
import AOS from "aos";
import { useEffect } from "react";
// import img1 from "../assets/mind.avif";
import img1 from "../assets/mind1.jpg";
import Navbar from "./Navbar";
import { useTheme, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  return (
    <>
      <Navbar />
      <div
        id="service"
        style={{
          textAlign: "center",
          marginTop: "100px",

          marginBottom: "-20px",
        }}
      >
        <h1
          style={{
            fontSize: "35px",
            color: "#333",
            marginBottom: "60px",
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Services
        </h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Service Card 1 */}
          <div
            data-aos="zoom-out"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              width: "200px",
              height: "250px",
              boxShadow: "0px 0px 15px #347f9ff5",
              transition: "transform 0.3s ease",
              // transition: "transform 0.1s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={{ fontSize: "40px", color: "#3051c7" }}>📱</div>
            <h2
              style={{
                color: "#12569be1",
                fontSize: "20px",
                margin: "15px 0",
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                textShadow: "2px 2px 4px rgba(116, 29, 203, 0.3)",
              }}
            >
              Mobile App Development
            </h2>
            <p style={{ color: "#333", fontSize: "14px", lineHeight: "1.6" }}>
              I design and build tailored mobile applications that meet specific
              business needs, ensuring both functionality and user satisfaction.
            </p>
          </div>

          {/* Service Card 2 */}
          <div
            data-aos="zoom-out"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              width: "200px",
              height: "250px",
              boxShadow: "0px 0px 15px #347f9ff5",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={{ fontSize: "40px", color: "#3051c7" }}>💻</div>
            <h2
              style={{
                color: "#12569be1",
                fontSize: "20px",
                margin: "15px 0",
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                textShadow: "2px 2px 4px rgba(116, 29, 203, 0.3)",
              }}
            >
              Frontend Development
            </h2>
            <p style={{ color: "#333", fontSize: "14px", lineHeight: "1.6" }}>
              I create visually engaging, responsive interfaces that work
              seamlessly across devices, providing a smooth user experience.
            </p>
          </div>

          {/* Service Card 3 */}
          <div
            data-aos="zoom-out"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              width: "200px",
              height: "250px",
              boxShadow: "0px 0px 15px #347f9ff5",
              transition: "transform 0.1s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={{ fontSize: "40px", color: "#3051c7" }}>🔧</div>
            <h2
              style={{
                color: "#12569be1",
                fontSize: "20px",
                margin: "15px 0",
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                textShadow: "2px 2px 4px rgba(116, 29, 203, 0.3)",
              }}
            >
              Backend Development
            </h2>
            <p style={{ color: "#333", fontSize: "14px", lineHeight: "1.6" }}>
              Developing backend systems that are robust, secure, and scalable,
              tailored to handle growing business needs.
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: "50px",
            margin: "0% ",
            padding: "20px",
          }}
        >
          {/* Get In Touch Section */}
          <section
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row", // Stack vertically on mobile, horizontally on desktop
              alignItems: "center",
              gap: isMobile ? "10px" : "20px", // Reduce gap on mobile
              padding: isMobile ? "30px 20px" : "30px", // Adjust padding for mobile
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              boxShadow: "0px 0px 25px rgba(99, 27, 176, 0.84)", // Glow effect
              margin: isMobile ? "30px 5%" : "50px 10%", // Adjust margin for mobile
              marginTop: "100px",
              height: "auto", // Allow height to adjust based on content
            }}
          >
            <div
              style={{
                maxWidth: "500px",
                textAlign: isMobile ? "center" : "left", // Center text on mobile, left-align on desktop
              }}
            >
              <h4
                style={{
                  color: "#a24ca3",
                  fontSize: isMobile ? "1rem" : "1.2rem", // Adjust font size for mobile
                  marginBottom: "0px",
                }}
              >
                Get In Touch
              </h4>
              <br />
              <h2
                style={{
                  fontSize: isMobile ? "1.8rem" : "2.4rem", // Adjust font size for mobile
                  marginBottom: "10px",
                  width: isMobile ? "100%" : "450px", // Full width on mobile, fixed width on desktop
                  fontFamily:
                    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                LET'S CREATE <br /> SOMETHING AMAZING TOGETHER
              </h2>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row", // Stack buttons vertically on mobile
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    padding: "10px 10px",
                    fontSize: "1rem",
                    backgroundColor: "#a24ca3",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                    width: "170px", // Full width on mobile, fixed width on desktop
                  }}
                >
                  <NavLink
                    id="ab1"
                    to="/project"
                    style={{
                      color: "white",
                      textDecorationLine: "none",
                      fontWeight: "bold",
                    }}
                  >
                    My Last Projects
                  </NavLink>
                </button>
                <button
                  style={{
                    padding: "10px 10px",
                    fontSize: "1rem",
                    backgroundColor: "#a24ca3",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                    width: "130px",
                    marginLeft: isMobile ? "0" : "10px", // Remove margin on mobile
                  }}
                >
                  <NavLink
                    id="ab1"
                    to="/contact"
                    style={{
                      color: "white",
                      textDecorationLine: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Contact Me
                  </NavLink>
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: isMobile ? "20px" : "0", // Add space between text and image on mobile
              }}
            >
              <img
                src={img1}
                alt="Person Pointing"
                style={{
                  width: isMobile ? "80%" : "300px", // Adjust image size for mobile
                  height: "auto",
                  borderRadius: "50%",
                  marginLeft: isMobile ? "0" : "50px", // Remove margin on mobile
                  boxShadow: "0px 0px 50px rgb(116, 26, 146)", // Add shadow
                }}
              />
            </div>
          </section>
        </div>
      </div>
      <br />
    </>
  );
};

export default Services;
