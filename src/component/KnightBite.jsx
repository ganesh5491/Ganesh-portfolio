
import React,{useState} from "react";
import img1 from "../assets/kb_banner.jpg";
import img2 from "../assets/video.mp4";
import img3 from "../assets/kb1.png";
import img4 from "../assets/kB2.png";
import img6 from "../assets/kb4.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const KnightBite = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "650px",
    height: "auto",
    borderRadius: "8px",
    marginTop: "70px",
    margin: "0 auto",
    display: "block",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0px 0px 25px rgba(99, 27, 176, 0.84)" : "none",
  };

  const imageStyle1 = {
    width: "100%",
    maxWidth: "550px",
    height: "auto",
    borderRadius: "8px",
    marginTop: "50px",
    margin: "0 auto",
    display: "block",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0px 0px 25px rgba(99, 27, 176, 0.84)" : "none",
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden", textAlign: "center" }}>
      <Navbar />

      {/* Banner Image */}
      <img
        src={img1}
        alt="Knight Bite Banner"
        style={{ width: "100%", height: "auto", maxHeight: "400px" }}
      />

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px",
          textAlign: "center",
        }}
      >
        {/* Introduction Section */}
        <section style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
            Knight Bite Clone - Online Food Delivery Platform
          </h1>
          <p
            style={{
              color: "#666",
              marginTop: "8px",
              maxWidth: "100%",
              overflowX: "hidden",
              textAlign: "center", // Center all text
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center all content horizontally
              justifyContent: "center",
            }}
          >
            A seamless platform for ordering food online, with real-time
            tracking and secure payments.
          </p>
          <p>
            <strong>🔗 Live Demo:</strong>{" "}
            <Link to="https://knight-bite-clone.netlify.app/" target="_blank">
              Knight Bite
            </Link>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              maxWidth: "700px",
            }}
          >
            <video
              src={img2}
              autoPlay
              muted
              playsInline
              alt="Knight Bite Homepage"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "10px 10px 10px 5px rgba(55, 52, 52, 0.1)",
              }}
            />
          </div>
        </section>

        {/* Project Overview */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            🌟 Project Overview
          </h2>
          <div
            style={{
              maxWidth: "100%",
              overflowX: "hidden",
              textAlign: "center", // Center all text
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center all content horizontally
              justifyContent: "center",
            }}
          >
            <p style={{ maxWidth: "700px" }}>
              Knight Bite is an innovative online food delivery platform
              designed to provide users with a seamless and convenient way to
              order food from their favorite restaurants. The platform focuses
              on delivering a user-friendly experience, ensuring fast and
              reliable food delivery services.
            </p>
          </div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ padding: "7px" }}>
              A user-friendly interface for easy navigation and ordering.
            </li>
            <li style={{ padding: "7px" }}>
              Real-time order tracking to keep customers informed about their
              delivery status.
            </li>
            <li style={{ padding: "7px" }}>
              Secure payment gateway for safe and hassle-free transactions.
            </li>
          </ul>
        </section>

        {/* Key Features */}
        <section
          style={{
            marginBottom: "40px",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            📖 Key Features
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ padding: "7px" }}>
              <strong>Comprehensive Menu Management:</strong> Restaurants can
              upload and manage their menus with ease.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>User Authentication & Account Management:</strong> Secure
              login, password recovery, and profile management.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Real-time Order Tracking:</strong> Customers can track
              their orders in real-time.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Secure Payment Integration:</strong> Multiple payment
              options with industry-standard encryption.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Responsive Design:</strong> Works seamlessly across
              devices (desktop, tablet, and mobile).
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Admin Dashboard:</strong> Restaurant owners can manage
              orders, menus, and customer feedback.
            </li>
          </ul>
        </section>

        {/* Technologies Used */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            🖥️ Technologies Used
          </h2>
          <div
            style={{
              overflowX: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <table
              border="1"
              style={{
                width: "100%",
                maxWidth: "600px",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              <thead>
                <tr>
                  <th style={{ padding: "8px" }}>Category</th>
                  <th style={{ padding: "8px" }}>Technology Stack</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "8px" }}>Frontend</td>
                  <td style={{ padding: "8px" }}>
                    React.js, HTML, CSS, JavaScript
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>Backend</td>
                  <td style={{ padding: "8px" }}>Node.js</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>Authentication</td>
                  <td style={{ padding: "8px" }}>JWT (JSON Web Tokens)</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>Hosting</td>
                  <td style={{ padding: "8px" }}>Netlify (Frontend)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Idea & Planning */}
        <section style={{ marginBottom: "40px" }}>
          <div
            style={{
              maxWidth: "100%",
              overflowX: "hidden",
              // textAlign: "center", // Center all text
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center all content horizontally
              justifyContent: "center", // Center all content vertically
              padding: "20px",
            }}
          >
            {/* Project Description */}
            <div style={{ maxWidth: "700px", width: "100%" }}>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                💡 Idea & Planning
              </h2>
              <p style={{ marginBottom: "20px" }}>
                The idea behind Knight Bite was to create a modern, efficient,
                and user-friendly food delivery platform that caters to both
                customers and restaurant owners. During planning, we identified
                key features such as real-time order tracking, secure payments,
                and an intuitive user interface. The technology stack was
                carefully selected to ensure scalability, performance, and a
                seamless user experience.
              </p>

              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                🚀 Development Process
              </h2>
              <p style={{ marginBottom: "20px" }}>
                We built the frontend using React.js to provide a dynamic and
                interactive UI, incorporating React Router for seamless
                navigation. The backend was developed with Node.js and
                Express.js, implementing REST APIs for user authentication and
                order handling. MongoDB was used to store user data, menus, and
                order details efficiently. The frontend was deployed on Netlify,
                while the backend was hosted on AWS for scalability and
                reliability.
              </p>

              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                🛠️ Testing & Improvements
              </h2>
              <p style={{ marginBottom: "20px" }}>
                We conducted rigorous testing, including unit testing for APIs
                and UI testing to ensure a smooth user experience. Security
                measures such as JWT-based authentication were implemented to
                protect user data. Feedback from initial users helped us
                optimize backend performance, reduce page load times, and fix UI
                inconsistencies. The application was continuously improved for
                better performance and usability.
              </p>

              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                ✅ How This Project Helps Others
              </h2>
              <p style={{ marginBottom: "20px" }}>
                Knight Bite provides a streamlined solution for food delivery,
                benefiting both customers and restaurant owners. Customers can
                easily order food and track their deliveries in real-time, while
                restaurant owners can manage their menus and orders efficiently.
                The platform ensures a seamless and secure experience for all
                users.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <img
              src={img3}
              alt="Project Benefits"
              style={imageStyle1}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src={img4}
              alt="Project Benefits"
              style={imageStyle1}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <br />
          <img
            src={img6}
            alt="Project Benefits"
            style={imageStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </section>

        {/* Challenges & Achievements */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            ⚡ Challenges & Achievements
          </h2>
          <h3>🚧 Challenges Faced:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ padding: "7px" }}>
              <strong>Implementing Real-time Order Tracking:</strong> Using
              Socket.IO for real-time updates was challenging but crucial.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Payment Gateway Integration:</strong> Ensuring secure and
              seamless payment processing required careful implementation.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Scalability:</strong> Designing the backend to handle a
              growing number of users and orders was a key focus.
            </li>
          </ul>
          <br />
          <h3>🏆 Key Achievements:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ padding: "7px" }}>
              Successfully deployed a full-stack food delivery platform.
            </li>
            <li style={{ padding: "7px" }}>
              Designed an intuitive and responsive user interface.
            </li>
            <li style={{ padding: "7px" }}>
              Implemented real-time order tracking and secure payment
              processing.
            </li>
          </ul>
        </section>

        {/* Live Demo & Source Code */}
        <section
          style={{
            maxWidth: "100%",
            overflowX: "hidden",
            textAlign: "center", // Center all text
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center all content horizontally
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            🔗 Live Demo & Source Code
          </h2>
          <div style={{ marginBottom: "20px", marginTop: "20px" }}>
            🌍 <strong style={{ color: "#333" }}>Visit the Website:</strong>{" "}
            <Link to="https://knight-bite-clone.netlify.app/" target="_blank">
              Knight Bite
            </Link>
          </div>
          <div>
            💻 <strong style={{ color: "#333" }}>GitHub Repository:</strong>{" "}
            (link)
          </div>
        </section>
      </div>
    </div>
  );
};

export default KnightBite;