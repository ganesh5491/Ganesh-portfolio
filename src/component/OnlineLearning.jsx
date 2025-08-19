
// import React from "react";
// import img1 from "../assets/bannerE_Learning.jpg";
// import img2 from "../assets/l11.png"
// import img3 from "../assets/l22.png";
// import img4 from "../assets/l2.png";
// import img5 from "../assets/l3.png";
// import Navbar from "./Navbar";


// const OnlineLearning = () => {
//   return (
//     <div style={{ justifyContent: "center", alignItems: "center" }}>
//       <Navbar />

//       <img src={img1} alt="" style={{ width: "100%" }} />
//       <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "24px" }}>
//         <section style={{ textAlign: "center", marginBottom: "40px" }}>
//           <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
//             Learnify - Online Learning Management System
//           </h1>
//           <p
//             style={{
//               color: "gray",
//               marginTop: "8px",
//               textAlign: "center",
//               marginLeft: "200px",
//             }}
//           >
//             A streamlined platform for managing online courses with seamless
//             lecture access and enhanced instructor-student collaboration.
//           </p>
//           <p>
//             <strong>🔗 Live Demo:</strong>{" "}
//             <a
//               href="https://learnifycom.netlify.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Visit Learnify
//             </a>
//           </p>
//           <div
//             style={{
//               display: "flex",
//               padding: "10px",
//               justifyContent: "space-around",
//               alignItems: "center",
//             }}
//           >
//             <img
//               src={img2}
//               alt="Learnify Homepage"
//               style={{
//                 display: "block",
//                 margin: "16px auto",
//                 width: "100%",
//                 maxWidth: "500px",
//                 borderRadius: "8px",
//                 marginLeft: "-30px",
//                 boxShadow: "10px 10px 10px 5px rgba(55, 52, 52, 0.1)",
//               }}
//             />
//             <img
//               src={img3}
//               alt="Learnify Homepage"
//               style={{
//                 display: "block",
//                 margin: "16px auto",
//                 width: "100%",
//                 height: "250px",
//                 maxWidth: "500px",
//                 borderRadius: "8px",
//                 boxShadow: "10px 10px 10px 5px rgba(55, 52, 52, 0.1)",
//                 marginLeft: "50px",
//               }}
//             />
//           </div>
//         </section>

//         {/* Project Overview */}
//         <section style={{ marginBottom: "40px", marginLeft: "100px" }}>
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               marginBottom: "12px",
//               marginLeft: "-20px",
//             }}
//           >
//             🌟 Project Overview
//           </h2>
//           <p>
//             Learnify is an advanced online Learning Management System (LMS)
//             designed to simplify course management and enhance interaction
//             between students and instructors. The platform provides:
//           </p>

//           <ul>
//             <li style={{ padding: "7px" }}>
//               A structured environment for organizing and accessing courses.
//             </li>
//             <li style={{ padding: "7px" }}>
//               {" "}
//               Seamless communication between instructors and students.
//             </li>
//             <li style={{ padding: "7px" }}>
//               A secure and scalable backend to handle user data and course
//               materials efficiently.
//             </li>
//           </ul>
//         </section>

//         {/* Key Features */}
//         <section style={{ marginBottom: "40px", marginLeft: "80px" }}>
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               marginBottom: "2px",
//             }}
//           >
//             📖 Key Features
//           </h2>
//           <ul>
//             <li style={{ padding: "7px" }}>
//               <strong>Comprehensive Course Management:</strong> Hosts 50+
//               courses with structured modules and lecture access.
//             </li>
//             <li style={{ padding: "7px" }}>
//               <strong>User Authentication & Account Management:</strong> Secure
//               login, password recovery, and profile management.
//             </li>
//             <li style={{ padding: "7px" }}>
//               <strong>Instructor-Student Collaboration:</strong> Instructors
//               manage courses, upload lectures, and interact with students.
//             </li>
//             <li style={{ padding: "7px" }}>
//               <strong>Intuitive UI & Seamless Navigation:</strong> User-friendly
//               interface built with React.js.
//             </li>
//             <li style={{ padding: "7px" }}>
//               <strong>Scalable & Secure Backend:</strong> Spring Boot for high
//               performance and MongoDB for efficient data handling.
//             </li>
//             <li style={{ padding: "7px" }}>
//               <strong>Deployment & Hosting:</strong> Frontend on Netlify and
//               Backend on AWS.
//             </li>
//           </ul>
//         </section>

//         {/* Technologies Used */}
//         <section style={{ marginBottom: "40px", marginLeft: "80px" }}>
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               marginBottom: "30px",
//             }}
//           >
//             🖥️ Technologies Used
//           </h2>
//           <table
//             border="1"
//             style={{
//               width: "50%",
//               borderCollapse: "collapse",
//               textAlign: "center",
//               marginLeft: "190px",
//             }}
//           >
//             <thead>
//               <tr>
//                 <th style={{ padding: "8px" }}>Category</th>
//                 <th style={{ padding: "8px" }}>Technology Stack</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td style={{ padding: "8px" }}>
//                   <strong>Frontend</strong>
//                 </td>
//                 <td style={{ padding: "8px" }}>React.js, HTML, CSS</td>
//               </tr>
//               <tr>
//                 <td style={{ padding: "8px" }}>
//                   <strong>Backend</strong>
//                 </td>
//                 <td style={{ padding: "8px" }}>Spring, Spring Boot</td>
//               </tr>
//               <tr>
//                 <td style={{ padding: "8px" }}>
//                   <strong>Database</strong>
//                 </td>
//                 <td style={{ padding: "8px" }}>MongoDB</td>
//               </tr>
//               <tr>
//                 <td style={{ padding: "8px" }}>
//                   <strong>Version Control</strong>
//                 </td>
//                 <td style={{ padding: "8px" }}>Git</td>
//               </tr>
//               <tr>
//                 <td style={{ padding: "8px" }}>
//                   <strong>Hosting</strong>
//                 </td>
//                 <td style={{ padding: "8px" }}>Netlify</td>
//               </tr>
//             </tbody>
//           </table>
//         </section>

//         {/* Idea & Planning */}
//         <section style={{ marginBottom: "40px", marginLeft: "100px" }}>
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               marginBottom: "12px",
//               marginLeft: "-20px",
//             }}
//           >
//             💡Idea & Planning
//           </h2>
//           <p style={{ width: "1200px" }}>
//             The idea behind Learnify was to create an accessible and
//             feature-rich learning management system (LMS) that allows
//             instructors to manage courses and students to access lectures
//             seamlessly. During planning, we identified key features such as
//             secure authentication, course management, and lecture access. The
//             technology stack was carefully selected to ensure scalability and
//             performance, using React.js for the frontend, Spring Boot for
//             backend security, MongoDB for efficient data handling, and
//             Netlify/AWS for deployment.
//           </p>
//           {/* <img
//             src="/path-to-planning-image.jpg"
//             alt="Planning Process"
//             style={{
//               display: "block",
//               marginTop: "16px",
//               width: "100%",
//               maxWidth: "400px",
//             }}
//           /> */}
//         </section>

//         {/* Development Process */}
//         <section style={{ marginBottom: "40px", marginLeft: "100px" }}>
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               marginBottom: "12px",
//               marginLeft: "-20px",
//             }}
//           >
//             🚀 Development Process
//           </h2>
//           <p>
//             We built the frontend using React.js to provide a dynamic and
//             interactive UI, incorporating React Router for seamless navigation
//             and state management for user sessions. The backend was developed
//             with Spring Boot, implementing REST APIs for user authentication and
//             course handling. MongoDB was used to store course and user data
//             efficiently. The frontend was deployed on Netlify, while the backend
//             was hosted on AWS for scalability and reliability.
//           </p>
//           {/* <img
//             src="/path-to-development-image.jpg"
//             alt="Development Process"
//             style={{
//               display: "block",
//               marginTop: "16px",
//               width: "100%",
//               maxWidth: "400px",
//             }}
//           /> */}
//         </section>

//         {/* Testing & Improvements */}
//         <section style={{ marginBottom: "40px", marginLeft: "100px" }}>
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               marginBottom: "12px",
//               marginLeft: "-20px",
//             }}
//           >
//             🛠️ Testing & Improvements
//           </h2>
//           <p>
//             We conducted rigorous testing, including unit testing for APIs and
//             UI testing to ensure a smooth user experience. Security measures
//             such as JWT-based authentication were implemented to protect user
//             data. Feedback from initial users helped us optimize backend
//             performance, reduce page load times, and fix UI inconsistencies. The
//             application was continuously improved for better performance and
//             usability.
//           </p>
//           {/* <img
//             src="/path-to-testing-image.jpg"
//             alt="Testing and Improvements"
//             style={{
//               display: "block",
//               marginTop: "16px",
//               width: "100%",
//               maxWidth: "400px",
//             }}
//           /> */}
//         </section>

//         {/* Project Benefits */}
//         <section style={{ marginBottom: "40px", marginLeft: "100px" }}>
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               marginBottom: "12px",
//               marginLeft: "-20px",
//             }}
//           >
//             ✅ How This Project Helps Others
//           </h2>
//           <p style={{ width: "100%" }}>
//             Learnify provides a streamlined way for educators to manage courses
//             and for students to access high-quality lectures anytime. It
//             simplifies user management, improves learning accessibility, and
//             ensures an engaging experience. By using scalable technologies, this
//             LMS can accommodate a growing number of students and instructors
//             efficiently.
//           </p>

//           <img
//             src={img5}
//             alt="Project Benefits"
//             style={{
//               display: "block",
//               marginTop: "16px",
//               width: "110%",
//               height: "270px",
//               marginLeft: "-100px",
//             }}
//           />
//         </section>
//         {/* Challenges & Achievements */}
//         <section style={{ marginBottom: "40px" }}>
//           <h2
//             style={{
//               fontSize: "25px",
//               fontWeight: "bold",
//               marginBottom: "10px",
//             }}
//           >
//             ⚡ Challenges & Achievements
//           </h2>
//           <h3>🚧 Challenges Faced:</h3>
//           <ul>
//             <li style={{ padding: "7px" }}>
//               <strong>Implementing Secure Authentication:</strong> JWT-based
//               authentication for secure login sessions.
//             </li>
//             <li style={{ padding: "7px" }}>
//               <strong>Optimizing Backend Performance:</strong> Used Spring Boot
//               for fast and scalable APIs.
//             </li>
//             <li style={{ padding: "7px" }}>
//               <strong>Ensuring Smooth User Experience:</strong> Designed a
//               responsive UI with React.
//             </li>
//           </ul>
//           <br />
//           <h3>
//             🏆<b> Key Achievements:</b>
//           </h3>
//           <ul>
//             <li style={{ padding: "7px" }}>
//               Successfully deployed a full-stack Learning Management System.
//             </li>
//             <li style={{ padding: "7px" }}>
//               Designed an interactive, easy-to-use course management platform.
//             </li>
//             <li style={{ padding: "7px" }}>
//               Implemented a scalable backend for seamless data processing.
//             </li>
//           </ul>
//         </section>
//         <img
//           src={img4}
//           alt="Project Benefits"
//           style={{
//             display: "block",
//             marginTop: "16px",
//             width: "100%",
//           }}
//         />
//         {/* Live Demo & Source Code */}
//         <section style={{ marginBottom: "40px" }}>
//           <h2
//             style={{
//               fontSize: "25px",
//               fontWeight: "bold",
//               marginBottom: "12px",
//             }}
//           >
//             🔗 Live Demo & Source Code
//           </h2>
//           <p style={{ marginLeft: "25px" }}>
//             🌍 <strong>Visit the Website:</strong>{" "}
//             <a
//               href="https://learnifycom.netlify.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learnify
//             </a>
//           </p>
//           <p style={{ marginLeft: "25px" }}>
//             💻 <strong>GitHub Repository:</strong> (link)
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default OnlineLearning;
import React from "react";
import img1 from "../assets/bannerE_Learning.jpg";
import img2 from "../assets/l11.png";
import img3 from "../assets/l22.png";
import img4 from "../assets/l2.png";
import img5 from "../assets/l3.png";
import Navbar from "./Navbar";

const OnlineLearning = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar />

      <img
        src={img1}
        alt="Banner"
        style={{ width: "100%", height: "auto", maxHeight: "400px" }}
      />

      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          padding: "24px",
          marginLeft: "30px",
        }}
      >
        {/* Introduction Section */}
        <section style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
            Learnify - Online Learning Management System
          </h1>
          <p
            style={{
              color: "gray",
              maxWidth: "100%",
              overflowX: "hidden",
              textAlign: "center", // Center all text
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center all content horizontally
              justifyContent: "center", // Center all content vertically
              padding: "10px",
            }}
          >
            A streamlined platform for managing online courses with seamless
            lecture access and enhanced instructor-student collaboration.
          </p>
          <p>
            <strong>🔗 Live Demo:</strong>{" "}
            <a
              href="https://learnifycom.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Learnify
            </a>
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
              src={img2}
              alt="Learnify Homepage"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "8px",
                boxShadow: "10px 10px 10px 5px rgba(55, 52, 52, 0.1)",
              }}
            />
            <img
              src={img3}
              alt="Learnify Homepage"
              style={{
                width: "100%",
                maxWidth: "500px",
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
          <p>
            Learnify is an advanced online Learning Management System (LMS)
            designed to simplify course management and enhance interaction
            between students and instructors. The platform provides:
          </p>
          <ul>
            <li style={{ padding: "7px" }}>
              A structured environment for organizing and accessing courses.
            </li>
            <li style={{ padding: "7px" }}>
              Seamless communication between instructors and students.
            </li>
            <li style={{ padding: "7px" }}>
              A secure and scalable backend to handle user data and course
              materials efficiently.
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
              <strong>Comprehensive Course Management:</strong> Hosts 50+
              courses with structured modules and lecture access.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>User Authentication & Account Management:</strong> Secure
              login, password recovery, and profile management.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Instructor-Student Collaboration:</strong> Instructors
              manage courses, upload lectures, and interact with students.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Intuitive UI & Seamless Navigation:</strong> User-friendly
              interface built with React.js.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Scalable & Secure Backend:</strong> Spring Boot for high
              performance and MongoDB for efficient data handling.
            </li>
            <li style={{ padding: "7px" }}>
              <strong>Deployment & Hosting:</strong> Frontend on Netlify and
              Backend on AWS.
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
                  <td style={{ padding: "8px" }}>Spring, Spring Boot</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>
                    <strong>Database</strong>
                  </td>
                  <td style={{ padding: "8px" }}>MongoDB</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>
                    <strong>Version Control</strong>
                  </td>
                  <td style={{ padding: "8px" }}>Git</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>
                    <strong>Hosting</strong>
                  </td>
                  <td style={{ padding: "8px" }}>Netlify </td>
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
            The idea behind Learnify was to create an accessible and
            feature-rich learning management system (LMS) that allows
            instructors to manage courses and students to access lectures
            seamlessly. During planning, we identified key features such as
            secure authentication, course management, and lecture access. The
            technology stack was carefully selected to ensure scalability and
            performance, using React.js for the frontend, Spring Boot for
            backend security, MongoDB for efficient data handling, and
            Netlify/AWS for deployment.
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
            We built the frontend using React.js to provide a dynamic and
            interactive UI, incorporating React Router for seamless navigation
            and state management for user sessions. The backend was developed
            with Spring Boot, implementing REST APIs for user authentication and
            course handling. MongoDB was used to store course and user data
            efficiently. The frontend was deployed on Netlify, while the backend
            was hosted on AWS for scalability and reliability.
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
            We conducted rigorous testing, including unit testing for APIs and
            UI testing to ensure a smooth user experience. Security measures
            such as JWT-based authentication were implemented to protect user
            data. Feedback from initial users helped us optimize backend
            performance, reduce page load times, and fix UI inconsistencies. The
            application was continuously improved for better performance and
            usability.
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
            Learnify provides a streamlined way for educators to manage courses
            and for students to access high-quality lectures anytime. It
            simplifies user management, improves learning accessibility, and
            ensures an engaging experience. By using scalable technologies, this
            LMS can accommodate a growing number of students and instructors
            efficiently.
          </p>

          <img
            src={img5}
            alt="Project Benefits"
            style={{
              width: "100%",
              maxWidth: "700px",
              borderRadius: "8px",
              boxShadow: "10px 10px 10px 5px rgba(55, 52, 52, 0.1)",
              margin: "20px auto",
              display: "block",
            }}
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
              <strong>Optimizing Backend Performance:</strong> Used Spring Boot
              for fast and scalable APIs.
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
              Successfully deployed a full-stack Learning Management System.
            </li>
            <li style={{ padding: "7px" }}>
              Designed an interactive, easy-to-use course management platform.
            </li>
            <li style={{ padding: "7px" }}>
              Implemented a scalable backend for seamless data processing.
            </li>
          </ul>
        </section>

        <img
          src={img4}
          alt="Project Benefits"
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "8px",
            boxShadow: "10px 10px 10px 5px rgba(55, 52, 52, 0.1)",
            margin: "20px auto",
            display: "block",
          }}
        />

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
            <a
              href="https://learnifycom.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learnify
            </a>
          </p>
          <p>
            💻 <strong>GitHub Repository:</strong> (link)
          </p>
        </section>
      </div>
    </div>
  );
};

export default OnlineLearning;