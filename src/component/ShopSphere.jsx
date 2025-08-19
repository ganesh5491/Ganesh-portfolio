
import React,{useState} from "react";
import img1 from "../assets/Shophome.png";
import img2 from "../assets/products.png";
import img3 from "../assets/cart.png";
import img4 from "../assets/address.png";
import img5 from "../assets/ordered.png";
import img6 from "../assets/banners2.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const ShopSphere = () => {
   const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
  
    const imageStyle1 = {
      width: "100%",
      maxWidth: "650px",
      height: "auto",
      borderRadius: "8px",
      margin: "0 auto",
      display: "block",
      marginTop:"30px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      transform: isHovered ? "scale(1.05)" : "scale(1)",
      boxShadow: isHovered ? "0px 0px 25px rgba(99, 27, 176, 0.84)" : "none",
    };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar />

      <img
        src={img6}
        alt="Banner"
        style={{
          width: "120%",
          height: "auto",
          maxHeight: "400px",
          marginRight: "-10%",
        }}
      />

      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          padding: "50px",
          marginLeft: "50px",
        }}
      >
        {/* Introduction Section */}
        <section style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
            ShopSphere - Full-Stack E-Commerce Platform
          </h1>
          <p style={{ color: "gray", marginTop: "8px" }}>
            A modern e-commerce platform with secure user authentication,
            product management, and seamless order processing.
          </p>
          <p>
            <strong>🔗 Live Demo:</strong>{" "}
            <Link to="https://shop-sphere-ganesh.netlify.app/" target="_blank">
              Visit ShopSphere
            </Link>
          </p>

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
              src={img1}
              alt="ShopSphere Homepage"
              style={imageStyle1}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src={img2}
              alt="ShopSphere Product Page"
              style={imageStyle1}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
          <p>
            ShopSphere is a full-stack e-commerce platform designed to provide a
            seamless shopping experience. The platform includes:
          </p>
          <ul>
            <li style={{ padding: "7px" }}>
              Secure user authentication and profile management.
            </li>
            <li style={{ padding: "7px" }}>
              CRUD operations for fetching and filtering products by category.
            </li>
            <li style={{ padding: "7px" }}>
              Add to cart and "Buy Now" functionality with order processing.
            </li>
            <li style={{ padding: "7px" }}>
              A dashboard for managing user addresses and order details.
            </li>
          </ul>
        </section>

        {/* Key Features */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            📖 Key Features
          </h2>
          <ul>
            <li style={{ padding: "7px" }}>
              <strong>User Authentication:</strong> Secure login and
              registration with REST APIs.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Product Management:</strong> Fetch and filter products by
              category using CRUD operations.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Cart & Order Management:</strong> Add products to cart,
              place orders, and track delivery.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Profile Management:</strong> Edit user profiles and manage
              addresses.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Intuitive UI:</strong> Built with React.js for a
              responsive and user-friendly interface.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Scalable Backend:</strong> Node.js for handling APIs and
              MongoDB for data storage.
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
          <div style={{ overflowX: "auto" }}>
            <table
              border="1"
              style={{
                width: "100%",
                maxWidth: "600px",
                borderCollapse: "collapse",
                textAlign: "center",
                margin: "0 auto",
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
                  <td style={{ padding: "8px" }}>
                    <strong>Frontend</strong>
                  </td>
                  <td style={{ padding: "8px" }}>React.js, HTML, CSS</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>
                    <strong>Backend</strong>
                  </td>
                  <td style={{ padding: "8px" }}>Node.js, REST APIs</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>
                    <strong>Database</strong>
                  </td>
                  <td style={{ padding: "8px" }}>MongoDB</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>
                    <strong>Authentication</strong>
                  </td>
                  <td style={{ padding: "8px" }}>JWT, Secure Login</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>
                    <strong>Hosting</strong>
                  </td>
                  <td style={{ padding: "8px" }}>Netlify</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Idea & Planning */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            💡 Idea & Planning
          </h2>
          <p>
            The idea behind ShopSphere was to create a modern e-commerce
            platform that simplifies online shopping. Key features include
            secure user authentication, product filtering, and order processing.
            The technology stack was chosen for scalability and performance,
            with React.js for the frontend, Node.js for the backend, and MongoDB
            for data storage.
          </p>
        </section>

        {/* Development Process */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            🚀 Development Process
          </h2>
          <p>
            The frontend was built using React.js, with React Router for
            navigation and state management for user sessions. The backend was
            developed with Node.js, implementing REST APIs for user
            authentication and product management. MongoDB was used to store
            user and product data efficiently.
          </p>
        </section>

        {/* Testing & Improvements */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            🛠️ Testing & Improvements
          </h2>
          <p>
            Rigorous testing was conducted, including unit testing for APIs and
            UI testing for a smooth user experience. Security measures like
            JWT-based authentication were implemented. Feedback from users
            helped optimize performance and fix UI inconsistencies.
          </p>
        </section>

        {/* Project Benefits */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            ✅ How This Project Helps Others
          </h2>
          <p>
            ShopSphere provides a seamless shopping experience with secure
            authentication, easy product discovery, and efficient order
            processing. It simplifies online shopping for users and provides a
            scalable platform for businesses.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "50px",
              marginTop: "20px",
            }}
          >
            <img
              src={img3}
              alt="Cart"
              style={imageStyle1}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src={img4}
              alt="Address"
              style={imageStyle1}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <img
            src={img5}
            alt="Ordered"
            style={imageStyle1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </section>

        {/* Challenges & Achievements */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            ⚡ Challenges & Achievements
          </h2>
          <h3>🚧 Challenges Faced:</h3>
          <ul>
            <li style={{ padding: "7px" }}>
              <strong>Implementing Secure Authentication:</strong> JWT-based
              authentication for secure login sessions.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Optimizing Backend Performance:</strong> Used Node.js for
              fast and scalable APIs.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Ensuring Smooth User Experience:</strong> Designed a
              responsive UI with React.
            </li>
          </ul>
          <br />
          <h3>🏆 Key Achievements:</h3>
          <ul>
            <li style={{ padding: "7px" }}>
              Successfully deployed a full-stack e-commerce platform.
            </li>
            <li style={{ padding: "7px" }}>
              Designed an interactive and user-friendly shopping experience.
            </li>
            <li style={{ padding: "7px" }}>
              Implemented a scalable backend for seamless data processing.
            </li>
          </ul>
        </section>

        {/* Live Demo & Source Code */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            🔗 Live Demo & Source Code
          </h2>
          <p>
            🌍 <strong>Visit the Website:</strong>{" "}
            <Link to="https://shop-sphere-ganesh.netlify.app/" target="_blank">
              Visit ShopSphere
            </Link>
          </p>
          <p>
            💻 <strong>GitHub Repository:</strong> (link)
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShopSphere;