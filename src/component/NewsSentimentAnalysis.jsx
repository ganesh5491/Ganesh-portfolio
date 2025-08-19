
import React, { useState } from "react";
import img1 from "../assets/newsbanner1.jpg"; // Replace with relevant image
import Navbar from "./Navbar";
import img2 from "../assets/news.png";
import img3 from "../assets/newshome.png";
import img4 from "../assets/NewsArc.png";
import img5 from "../assets/cicle.png";

const NewsSentimentAnalysis = () => {
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
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0px 0px 25px rgba(99, 27, 176, 0.84)" : "none",
  };
 const imageStyle2 = {
   width: "50%",
   maxWidth: "350px",
   height: "auto",
   borderRadius: "8px",
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
        alt=""
        style={{
          width: "100%",
        }}
      />

      {/* Title Section */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <div style={{ marginTop: "-220px", marginLeft: "-100%" }}>
          <h2 style={{ fontSize: "40px" }}>News Article</h2>
          <h2
            style={{ marginLeft: "10px", fontSize: "40px", marginTop: "-20px" }}
          >
            Sentiment
          </h2>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px" }}>
          {/* Introduction Section */}
          <section style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
              News Article Sentiment Analysis
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
              A sentiment analysis tool for news articles, providing insights
              into public sentiment and enhancing decision-making processes.
            </p>
            <p>
              <strong>🔗 Live Demo:</strong>{" "}
              <a
                href="https://news-sentiment-analysis.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit News Sentiment Analysis
              </a>
            </p>
          </section>

          {/* Image Grid Section */}
          <img
            src={img3}
            alt="News Homepage"
            style={imageStyle1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div
            style={{
              marginTop: "50px",
            }}
          >
            <br />

            <img
              src={img4}
              alt="News Arc"
              style={imageStyle1}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div
            style={{
              marginTop: "50px",
            }}
          >
            <img
              src={img5}
              alt="News"
              style={imageStyle2}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          {/* Project Overview */}
          <section style={{ marginBottom: "40px", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              🌟 Project Overview
            </h2>
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
              This project involves sentiment analysis on 300+ news articles
              using advanced text mining techniques. The tool allows users to
              search for news articles based on a keyword and view the sentiment
              (positive, negative, or neutral) of each article. The results are
              displayed in a structured format, including the headline,
              publication date, and sentiment polarity.
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ padding: "7px" }}>
                Collect live and historical news data from 82,792+ sources using
                the NewsData.io API.
              </li>
              <li style={{ padding: "7px" }}>
                Perform sentiment analysis on the collected news articles.
              </li>
              <li style={{ padding: "7px" }}>
                Generate structured reports to enhance decision-making
                processes.
              </li>
            </ul>
          </section>

          {/* Key Features */}
          <section style={{ marginBottom: "40px", textAlign: "center" }}>
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
                <strong>Live and Historical News Data:</strong> Access news
                articles from the past 6 years.
              </li>
              <li style={{ padding: "7px" }}>
                <strong>Sentiment Analysis:</strong> Analyze the sentiment of
                news articles (positive, negative, neutral).
              </li>
              <li style={{ padding: "7px" }}>
                <strong>Structured Reports:</strong> Generate reports with
                sentiment distribution and key insights.
              </li>
              <li style={{ padding: "7px" }}>
                <strong>User-Friendly Interface:</strong> Easy-to-use interface
                for searching and viewing news sentiment.
              </li>
              <li style={{ padding: "7px" }}>
                <strong>Scalable Backend:</strong> Efficiently handle large
                volumes of news data.
              </li>
            </ul>
          </section>

          {/* Technologies Used */}
          <section style={{ marginBottom: "40px", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "30px",
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
                    <td style={{ padding: "8px" }}>HTML, CSS, JavaScript</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px" }}>Backend</td>
                    <td style={{ padding: "8px" }}>
                      Python (Text Mining, Sentiment Analysis)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px" }}>API</td>
                    <td style={{ padding: "8px" }}>NewsData.io API</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px" }}>Data Handling</td>
                    <td style={{ padding: "8px" }}>JSON</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Development Process */}
          <section style={{ marginBottom: "40px", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              🚀 Development Process
            </h2>
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
              The frontend was built using React.js, providing a dynamic and
              interactive UI. State management techniques were utilized to
              ensure seamless user interactions. The backend, developed with
              Python, handled text mining and sentiment analysis using NLP
              techniques. The NewsData.io API was integrated to fetch live and
              historical news data. The application was deployed on Netlify
              (frontend) and AWS (backend) for scalability and reliability.
            </p>
          </section>

          {/* Testing & Improvements */}
          <section style={{ marginBottom: "40px", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              🛠️ Testing & Improvements
            </h2>
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
              The application underwent rigorous testing, including unit testing
              for sentiment analysis algorithms and UI responsiveness. Security
              measures such as input validation and API authentication were
              implemented to prevent vulnerabilities. Performance optimizations
              were carried out to handle large volumes of news data efficiently.
              User feedback was incorporated to enhance usability and improve
              the accuracy of sentiment classification.
            </p>
          </section>

          {/* Project Benefits */}
          <section style={{ marginBottom: "40px", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              ✅ How This Project Helps Others
            </h2>
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
              This sentiment analysis tool provides valuable insights into
              public sentiment, helping organizations make informed decisions.
              It enhances content strategy sessions by providing a clear
              understanding of the sentiment surrounding specific topics or
              keywords.
            </p>
          </section>

          {/* Challenges & Achievements */}
          <section style={{ marginBottom: "40px", textAlign: "center" }}>
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
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ padding: "7px" }}>
                <strong>Handling Large Volumes of Data:</strong> Efficiently
                processing and analyzing 300+ news articles.
              </li>
              <li style={{ padding: "7px" }}>
                <strong>Accurate Sentiment Analysis:</strong> Ensuring the
                sentiment analysis model provides accurate results.
              </li>
              <li style={{ padding: "7px" }}>
                <strong>Real-Time Data Integration:</strong> Integrating live
                news data from the NewsData.io API.
              </li>
            </ul>
            <br />
            <h3>🏆 Key Achievements:</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ padding: "7px" }}>
                Successfully analyzed 300+ news articles and generated
                structured reports.
              </li>
              <li style={{ padding: "7px" }}>
                Improved team efficiency by 20% in content strategy sessions.
              </li>
              <li style={{ padding: "7px" }}>
                Developed a scalable and user-friendly sentiment analysis tool.
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
              <a
                href="https://knight-bite.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                News Sentiment Analysis{" "}
              </a>
            </div>
            <div>
              💻 <strong style={{ color: "#333" }}>GitHub Repository:</strong>{" "}
              (link)
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NewsSentimentAnalysis;