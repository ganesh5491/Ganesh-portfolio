import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  FaLinkedin,
  FaGithub,
  FaSun,
  FaMoon,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useTheme, useMediaQuery } from "@mui/material";

const ContactPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen size is mobile

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_c7j0sj7", "template_f6a89yj", data, "EeguqoXTRD_ixns4S")
      .then(() => {
        toast.success("Message Sent Successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
        reset();
        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
        console.error("Failed to send message:", error);
      });
  };

  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/place/Punjagutta,+Hyderabad,+Telangana/@17.4261075,78.4410938,15z/data=!3m1!4b1!4m6!3m5!1s0x3bcb90ca21c29fcb:0xa02313f9052ee76f!8m2!3d17.4254486!4d78.450544!16zL20vMGQ4NzB5?hl=en&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "10px" : "20px", // Adjust padding for mobile
          background: darkMode
            ? "linear-gradient(135deg, #1e1e2f, #2a2a40)"
            : "linear-gradient(135deg, #f8f9fa, #e9ecef)",
          transition: "background 0.5s ease",
        }}
      >
        <button
          onClick={toggleDarkMode}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: darkMode ? "#FFD700" : "#343a40",
          }}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <br />
        <br />
        <h2
          style={{
            fontSize: isMobile ? "24px" : "32px", // Adjust font size for mobile
            fontWeight: "bold",
            marginBottom: isMobile ? "20px" : "50px", // Adjust margin for mobile
            color: darkMode ? "#ffffff" : "#343a40",
          }}
          data-aos="fade-up"
        >
          Contact Me
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row", // Stack vertically on mobile
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "900px",
            width: "100%",
            background: darkMode ? "#2a2a40" : "#ffffff",
            padding: isMobile ? "20px" : "30px", // Adjust padding for mobile
            borderRadius: "15px",
            boxShadow: darkMode
              ? "0px 0px 15px rgba(255, 255, 255, 0.1)"
              : "0px 0px 15px rgba(0, 0, 0, 0.1)",
            gap: isMobile ? "20px" : "10px", // Adjust gap for mobile
            height: isMobile ? "auto" : "500px", // Allow height to adjust on mobile
          }}
          data-aos="fade-up"
        >
          {/* Contact Form */}
          <div style={{ flex: 1, width: isMobile ? "100%" : "auto" }}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: isMobile ? "100%" : "90%", // Full width on mobile
                padding: isMobile ? "20px" : "50px 20px", // Adjust padding for mobile
                borderRadius: "20px",
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                style={{
                  width: isMobile ? "85%" : "450px",
                  padding: "12px",
                  fontSize: "16px",
                  border: `2px solid ${darkMode ? "#007BFF" : "#007BFF"}`,
                  background: "transparent",
                  outline: "none",
                  borderRadius: "8px",
                  color: darkMode ? "#ffffff" : "#495057",
                }}
                data-aos="fade-right"
              />
              {errors.name && (
                <p style={{ color: "#dc3545", fontSize: "14px" }}>
                  {errors.name.message}
                </p>
              )}

              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: "Email is required" })}
                style={{
                  width: isMobile ? "85%" : "450px",
                  padding: "12px",
                  fontSize: "16px",
                  border: `2px solid ${darkMode ? "#007BFF" : "#007BFF"}`,
                  background: "transparent",
                  outline: "none",
                  borderRadius: "8px",
                  color: darkMode ? "#ffffff" : "#495057",
                }}
                data-aos="fade-left"
              />
              {errors.email && (
                <p style={{ color: "#dc3545", fontSize: "14px" }}>
                  {errors.email.message}
                </p>
              )}

              {/* New Field: Name of Organization */}
              <input
                type="text"
                placeholder="Name of Organization"
                {...register("organization", {
                  required: "Organization name is required",
                })}
                style={{
                  width: isMobile ? "85%" : "450px",
                  padding: "12px",
                  fontSize: "16px",
                  border: `2px solid ${darkMode ? "#007BFF" : "#007BFF"}`,
                  background: "transparent",
                  outline: "none",
                  borderRadius: "8px",
                  color: darkMode ? "#ffffff" : "#495057",
                }}
                data-aos="fade-right"
              />
              {errors.organization && (
                <p style={{ color: "#dc3545", fontSize: "14px" }}>
                  {errors.organization.message}
                </p>
              )}

              {/* New Field: What Services Are You Looking For */}
              <input
                placeholder="What Services Are You Looking For"
                {...register("services", {
                  required: "Services description is required",
                })}
                style={{
                  width: isMobile ? "85%" : "450px",
                  padding: "12px",
                  fontSize: "16px",
                  border: `2px solid ${darkMode ? "#007BFF" : "#007BFF"}`,
                  background: "transparent",
                  outline: "none",
                  height: "20px",
                  borderRadius: "8px",
                  color: darkMode ? "#ffffff" : "#495057",
                }}
                data-aos="fade-up"
              />
              {errors.services && (
                <p style={{ color: "#dc3545", fontSize: "14px" }}>
                  {errors.services.message}
                </p>
              )}

              <textarea
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
                style={{
                  width: isMobile ? "85%" : "450px",
                  padding: "12px",
                  fontSize: "16px",
                  border: `2px solid ${darkMode ? "#007BFF" : "#007BFF"}`,
                  background: "transparent",
                  outline: "none",
                  height: "100px",
                  borderRadius: "8px",
                  color: darkMode ? "#ffffff" : "#495057",
                }}
                data-aos="fade-up"
              ></textarea>
              {errors.message && (
                <p style={{ color: "#dc3545", fontSize: "14px" }}>
                  {errors.message.message}
                </p>
              )}

              <button
                type="submit"
                style={{
                  width: "200px",
                  padding: "12px",
                  margin: "auto",
                  background: "#007BFF",
                  color: "white",
                  fontSize: "16px",
                  border: "none",
                  cursor: "pointer",
                  transition: "0.3s",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "#0056b3",
                  },
                }}
                data-aos="flip-right"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            style={{
              flex: 1,
              textAlign: isMobile ? "center" : "left",
              fontSize: "16px",
              padding: isMobile ? "20px" : "30px",
              color: darkMode ? "#ffffff" : "#000000",
              borderRadius: "15px",
              marginLeft: isMobile ? "0" : "20px",
              width: isMobile ? "100%" : "30%",
            }}
            data-aos="fade-left"
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Get in Touch
            </h3>

            {/* Email */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "15px",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <FaEnvelope size={24} color="#007BFF" />
              <a
                href="mailto:ganeshkale030303@gmail.com"
                style={{
                  color: darkMode ? "#ffffff" : "#000000",
                  textDecoration: "none",
                }}
              >
                ganeshkale030303@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "15px",
                justifyContent: isMobile ? "center" : "flex-start", // Center on mobile
              }}
            >
              <FaPhone size={24} color="#007BFF" />
              <a
                href="tel:+919028441589"
                style={{
                  color: darkMode ? "#ffffff" : "#000000",
                  textDecoration: "none",
                }}
              >
                +91 9028441589
              </a>
            </div>

            {/* Location */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "15px",
                justifyContent: isMobile ? "center" : "flex-start", // Center on mobile
              }}
            >
              <FaMapMarkerAlt size={24} color="#007BFF" />
              <span style={{ color: darkMode ? "#ffffff" : "#000000" }}>
                Pune, Maharashtra, India
              </span>
            </div>

            {/* Social Media Links */}
            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: isMobile ? "center" : "flex-start", // Center on mobile
                marginTop: "20px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/ganesh-kale-70a50a248/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} color="#007BFF" />
              </a>
              <a
                href="https://github.com/ganesh5491?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} color="#007BFF" />
              </a>
            </div>

            {/* Google Map Embed */}
            <div
              style={{
                marginTop: "20px",
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: darkMode
                  ? "0 4px 10px rgba(255, 255, 255, 0.2)"
                  : "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
              onClick={handleLocationClick}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160985676!2d73.72287968840236!3d18.52489046387527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719140100000!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
