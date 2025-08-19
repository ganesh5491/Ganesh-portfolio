


// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import img1 from "../assets/E_larning_Project.jpg";
// import img2 from "../assets/news.png";
// import img3 from "../assets/banners3.jpg";
// import img4 from "../assets/kb_logo.jpg";
// import img5 from "../assets/plogo.png";
// import Navbar from "./Navbar";
// import AOS from "aos";
// import styled, { createGlobalStyle } from "styled-components";

// const projects = [
//   {
//     id: 1,
//     title: "Learnify",
//     img: img1,
//     projectUrl: "OnlineLearning",
//     description:
//       "An e-learning platform designed to provide interactive courses.",
//     languages: ["HTML", "CSS", "Javascript", "React.js", "Spring", "MongoDB"],
//   },
//   {
//     id: 2,
//     title: "ShopSphere",
//     img: img3,
//     projectUrl: "ShopSphere",
//     description: "An e-commerce platform with a focus on user experience.",
//     languages: [
//       "HTML",
//       "CSS",
//       "Javascript",
//       "React.js",
//       "Node.js",
//       "REST APIs",
//     ],
//   },
//   {
//     id: 3,
//     title: "News Article Sentiment",
//     img: img2,
//     projectUrl: "NewsSentimentAnalysis",
//     description:
//       "News Article Sentiment Analysis is sentiment of news articles using AI.",
//     languages: ["Python", "HTML", "CSS", "Javascript", "API"],
//   },
//   {
//     id: 4,
//     title: "KnightBite Clone",
//     img: img4,
//     projectUrl: "KnightBite",
//     description:
//       "A seamless platform for ordering food online, with real-time tracking and secure payments.",
//     languages: [
//       "HTML",
//       "CSS",
//       "Javascript",
//       "React.js",
//       "Node.js",
//       "REST APIs",
//     ],
//   },
//   // {
//   //   id: 5,
//   //   title: "Portfolio",
//   //   img: img5,
//   //   projectUrl: "KnightBite",
//   //   description:
//   //     "A personal portfolio website showcasing my skills, projects and experience",
//   //   languages: ["HTML", "CSS", "JavaScript", "React.js"],
//   // },
// ];

// const GlobalStyles = createGlobalStyle`
//   .section-title {
//     font-size: 2rem;
//     color: #333;
//     margin: 70px 0 20px;
//     font-weight: 600;
//   }

//   .description {
//     font-size: 0.9rem;
//     color: #666;
//     margin: 10px 0;
//   }

//   .tags-container {
//     display: flex;
//     justify-content: center;
//     gap: 8px;
//     flex-wrap: wrap;
//     margin-top: 10px;
//   }

//   .modal-backdrop {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(0, 0, 0, 0.5);
//     padding: 16px;
//     z-index: 1000;
//   }

//   .btn-primary {
//     background-color: #007bff;
//     color: white;
//     border: none;
//   }

//   .btn-secondary {
//     border: 1px solid #ccc;
//     background-color: transparent;
//   }

//   .swiper-button-prev,
//   .swiper-button-next {
//     position: absolute;
//     top: 50%;
//     width: 40px;
//     height: 40px;
//     background: #631bb0;
//     border-radius: 50%;
//     color: white;
//     transform: translateY(-50%);
//     z-index: 10;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//   }

//   .swiper-button-prev::after,
//   .swiper-button-next::after {
//     font-family: swiper-icons;
//     font-size: 1.2rem;
//     font-weight: bold;
//   }

//   .swiper-button-prev {
//     left: 20px;
//   }

//   .swiper-button-next {
//     right: 20px;
//   }

//   .swiper-pagination-bullet-active {
//     background: #631bb0 !important;
//   }

//   @media (max-width: 768px) {
//     .swiper-button-prev,
//     .swiper-button-next {
//       display: none;
//     }

//     .section-title {
//       font-size: 1.75rem;
//       margin-top: 50px;
//     }
//   }
// `;

// const ProjectsContainer = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 30px;
//   min-height: 100vh;
//   background-color: #f4f4f9;
//   position: relative;
//   justify-content: center;

//   .swiper {
//     width: 100%;
//     padding: 50px 0;
//   }

//   @media (max-width: 768px) {
//     padding: 30px;
//     margin-top: 20px;
//   }
// `;

// const MobileProjectsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 40px;
//   width: 100%;
//   padding: 20px;
//   max-width: 600px;
// `;

// const ProjectCard = styled(motion.div)`
//   width: 290px;
//   background: #fff;
//   border-radius: 12px;
//   box-shadow: 0px 0px 25px rgba(99, 27, 176, 0.84);
//   cursor: pointer;
//   padding: 20px;
//   text-align: center;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     width: 100%;
//     max-width: 400px;
//     margin: 0;
//   }

//   h5 {
//     font-size: 1.25rem;
//     font-weight: bold;
//     margin: 10px 0;
//     color: #333;
//   }

//   img {
//     height: 200px;
//     width: 100%;
//     object-fit: cover;
//     border-radius: 8px;
//   }
// `;

// const LanguageTag = styled.span`
//   padding: 0.25rem 0.75rem;
//   background-color: #dbeafe;
//   color: #2563eb;
//   border-radius: 9999px;
//   font-size: 0.8rem;
//   margin: 2px;
// `;

// const ModalContent = styled(motion.div)`
//   background: white;
//   border-radius: 12px;
//   padding: 24px;
//   width: 90%;
//   max-width: 400px;
//   text-align: center;

//   h3 {
//     font-size: 1.5rem;
//     font-weight: bold;
//     margin-bottom: 16px;
//     color: #333;
//   }

//   button {
//     padding: 8px 16px;
//     border-radius: 6px;
//     cursor: pointer;
//     font-size: 0.9rem;
//     font-weight: 500;
//     margin: 0 8px;
//   }
// `;

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <GlobalStyles />
//       <ProjectsContainer>
//         {!isMobile ? (
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             slidesPerView={1}
//             centeredSlides={true}
//             loop={true}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             navigation={{
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev",
//             }}
//             pagination={{ clickable: true }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             {projects.map((project) => (
//               <SwiperSlide key={project.id}>
//                 <ProjectCard
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0px 0px 30px rgba(99, 27, 176, 0.84)",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   data-aos="fade-right"
//                 >
//                   <div onClick={() => setSelectedProject(project)}>
//                     <img src={project.img} alt="Project" />
//                     <h5>{project.title}</h5>
//                     <p className="description">{project.description}</p>
//                     <div className="tags-container">
//                       {project.languages.map((language, index) => (
//                         <LanguageTag key={index}>{language}</LanguageTag>
//                       ))}
//                     </div>
//                   </div>
//                 </ProjectCard>
//               </SwiperSlide>
//             ))}
//             <div className="swiper-button-prev"></div>
//             <div className="swiper-button-next"></div>
//           </Swiper>
//         ) : (
//           <MobileProjectsContainer>
//             {projects.map((project) => (
//               <ProjectCard
//                 key={project.id}
//                 whileHover={{ scale: 1.02 }}
//                 data-aos="fade-up"
//               >
//                 <div onClick={() => setSelectedProject(project)}>
//                   <img src={project.img} alt="Project" />
//                   <h5>{project.title}</h5>
//                   <p className="description">{project.description}</p>
//                   <div className="tags-container">
//                     {project.languages.map((language, index) => (
//                       <LanguageTag key={index}>{language}</LanguageTag>
//                     ))}
//                   </div>
//                 </div>
//               </ProjectCard>
//             ))}
//           </MobileProjectsContainer>
//         )}

//         <AnimatePresence>
//           {selectedProject && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="modal-backdrop"
//               onClick={() => setSelectedProject(null)}
//             >
//               <ModalContent
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <h3>{selectedProject.title}</h3>
//                 <img
//                   src={selectedProject.img}
//                   alt="Project"
//                   style={{
//                     height: "200px",
//                     width: "100%",
//                     objectFit: "cover",
//                     borderRadius: "8px",
//                   }}
//                 />
//                 <p className="description">{selectedProject.description}</p>
//                 <div>
//                   <button
//                     className="btn-primary"
//                     onClick={() =>
//                       window.open(selectedProject.projectUrl)
//                     }
//                   >
//                     Show More
//                   </button>
//                   <button
//                     className="btn-secondary"
//                     onClick={() => setSelectedProject(null)}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </ModalContent>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </ProjectsContainer>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // For internal navigation
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled, { createGlobalStyle } from "styled-components";
import AOS from "aos";
import Navbar from "./Navbar";

// Import project images
import img1 from "../assets/E_larning_Project.jpg";
import img2 from "../assets/news.png";
import img3 from "../assets/banners3.jpg";
import img4 from "../assets/kb_logo.jpg";

// Project data
const projects = [
  {
    id: 1,
    title: "Learnify",
    img: img1,
    projectUrl: "OnlineLearning",
    description:
      "An e-learning platform designed to provide interactive courses.",
    languages: ["HTML", "CSS", "Javascript", "React.js", "Spring", "MongoDB"],
  },
  {
    id: 2,
    title: "ShopSphere",
    img: img3,
    projectUrl: "ShopSphere",
    description: "An e-commerce platform with a focus on user experience.",
    languages: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    id: 3,
    title: "News Article Sentiment",
    img: img2,
    projectUrl: "NewsSentimentAnalysis",
    description: "News Article Sentiment Analysis using AI.",
    languages: ["Python", "HTML", "CSS", "Javascript", "API"],
  },
  {
    id: 4,
    title: "KnightBite Clone",
    img: img4,
    projectUrl: "KnightBite",
    description:
      "A seamless platform for ordering food online, with real-time tracking and secure payments.",
    languages: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Node.js",
      "REST APIs",
    ],
  },
];

// Global styles
const GlobalStyles = createGlobalStyle`
  .section-title {
    font-size: 2rem;
    color: #333;
    margin: 70px 0 20px;
    font-weight: 600;
  }

  .description {
    font-size: 0.9rem;
    color: #666;
    margin: 10px 0;
  }

  .tags-container {
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 16px;
    z-index: 1000;
  }

  .btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
  }

  .btn-secondary {
    border: 1px solid #ccc;
    background-color: transparent;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    background: #631bb0;
    border-radius: 50%;
    color: white;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-family: swiper-icons;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .swiper-button-prev {
    left: 20px;
  }

  .swiper-button-next {
    right: 20px;
  }

  .swiper-pagination-bullet-active {
    background: #631bb0 !important;
  }

  @media (max-width: 768px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }

    .section-title {
      font-size: 1.75rem;
      margin-top: 50px;
    }
  }
`;

// Styled components
const ProjectsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  min-height: 100vh;
  background-color: #f4f4f9;
  position: relative;
  justify-content: center;

  .swiper {
    width: 100%;
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    padding: 30px;
    margin-top: 20px;
  }
`;

const MobileProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding: 20px;
  max-width: 600px;
`;

const ProjectCard = styled(motion.div)`
  width: 290px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 25px rgba(99, 27, 176, 0.84);
  cursor: pointer;
  padding: 20px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    margin: 0;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 10px 0;
    color: #333;
  }

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const LanguageTag = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: #dbeafe;
  color: #2563eb;
  border-radius: 9999px;
  font-size: 0.8rem;
  margin: 2px;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
    color: #333;
  }

  button {
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0 8px;
  }
`;

// Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // For internal navigation

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <GlobalStyles />
      <ProjectsContainer>
        {!isMobile ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 30px rgba(99, 27, 176, 0.84)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  data-aos="fade-right"
                >
                  <div onClick={() => setSelectedProject(project)}>
                    <img src={project.img} alt="Project" />
                    <h5>{project.title}</h5>
                    <p className="description">{project.description}</p>
                    <div className="tags-container">
                      {project.languages.map((language, index) => (
                        <LanguageTag key={index}>{language}</LanguageTag>
                      ))}
                    </div>
                  </div>
                </ProjectCard>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        ) : (
          <MobileProjectsContainer>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                whileHover={{ scale: 1.02 }}
                data-aos="fade-up"
              >
                <div onClick={() => setSelectedProject(project)}>
                  <img src={project.img} alt="Project" />
                  <h5>{project.title}</h5>
                  <p className="description">{project.description}</p>
                  <div className="tags-container">
                    {project.languages.map((language, index) => (
                      <LanguageTag key={index}>{language}</LanguageTag>
                    ))}
                  </div>
                </div>
              </ProjectCard>
            ))}
          </MobileProjectsContainer>
        )}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-backdrop"
              onClick={() => setSelectedProject(null)}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3>{selectedProject.title}</h3>
                <img
                  src={selectedProject.img}
                  alt="Project"
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <p className="description">{selectedProject.description}</p>
                <div>
                  <button
                    className="btn-primary"
                    onClick={() => navigate(`/${selectedProject.projectUrl}`)} // Navigate internally
                  >
                    Show More
                  </button>
                  <button
                    className="btn-secondary"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </ModalContent>
            </motion.div>
          )}
        </AnimatePresence>
      </ProjectsContainer>
    </>
  );
};

export default Projects;