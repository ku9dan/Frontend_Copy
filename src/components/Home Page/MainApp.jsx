import React, { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import Footer from "../common/Footer";
import ExploreJobs from "./Explore-Jobs";
import StatisticsSection from "./StatisticsSection";
import CourseCard from "./CourseCard";
import CourseSection from "./CourseSection";
import FreeTraining from "./FreeTraining";
import Hero from "./Hero";
import NavigationBar from "../common/NavigationBar";
import Partners from "./Partners";
import Explore from "./Explore";
// Lazy-loaded components
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));

function MainApp() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Modal control functions
  const openLoginModal = () => {
    setIsRegisterModalOpen(false); // Close register modal if open
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => {
    setIsLoginModalOpen(false); // Close login modal if open
    setIsRegisterModalOpen(true);
  };
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  return (
    <>
      <NavigationBar openLoginModal={openLoginModal} />
      <Suspense
        fallback={
          <div>
            <img src="/Animation - 1736152825520" alt="loading animation" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Suspense>

      {/* Modal for Login */}
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        contentLabel="Login Modal"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "unset",
            zIndex: "1000",
            display: "unset",
            justifyContent: "unset",
            alignItems: "unset",
          },
          content: {
            position: "unset",
            top: "unset",
            left: "unset",
            right: "unset",
            bottom: "unset",
            border: "none",
            background: "unset",
            overflow: "unset",
            WebkitOverflowScrolling: "unset",
            borderRadius: "unset",
            outline: "none",
            padding: "unset",
          },
        }}
      >
        <Suspense fallback={<div>Loading Login...</div>}>
          <Login
            openRegisterModal={openRegisterModal}
            closeLoginModal={closeLoginModal}
          />
        </Suspense>
      </Modal>

      {/* Modal for Register */}
      <Modal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
        contentLabel="Register Modal"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "unset",
            zIndex: "1000",
            display: "unset",
            justifyContent: "unset",
            alignItems: "unset",
          },
          content: {
            position: "unset",
            top: "unset",
            left: "unset",
            right: "unset",
            bottom: "unset",
            border: "none",
            background: "unset",
            overflow: "unset",
            WebkitOverflowScrolling: "unset",
            borderRadius: "unset",
            outline: "none",
            padding: "unset",
          },
        }}
      >
        <Suspense fallback={<div>Loading Register...</div>}>
          <Register 
          closeRegisterModal={closeRegisterModal}
          openLoginModal={openLoginModal} />
        </Suspense>
      </Modal>

      <Partners />
      <FreeTraining />
      <Explore />
      <CourseCard />
      <CourseSection />
      <StatisticsSection />
      <ExploreJobs />
      <Footer />
    </>
  );
}

export default MainApp;

// import React, { useState, Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import Modal from "react-modal";
// import Footer from "../common/Footer";
// import ExploreJobs from "./Explore-Jobs";
// import StatisticsSection from "./StatisticsSection";
// import CourseCard from "./CourseCard";
// import CourseSection from "./CourseSection";
// import FreeTraining from "./FreeTraining";
// import Hero from "./Hero";
// import NavigationBar from "../common/NavigationBar";
// import Partners from "./Partners";
// import Explore from "./Explore";
// // Lazy-loaded components
// const Login = lazy(() => import("./Login"));
// const Register = lazy(() => import("./Register"));

// function MainApp() {
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

//   // Modal control functions
//   const openLoginModal = () => {
//     setIsRegisterModalOpen(false); // Close register modal if open
//     setIsLoginModalOpen(true);
//   };
//   const closeLoginModal = () => setIsLoginModalOpen(false);

//   const openRegisterModal = () => {
//     setIsLoginModalOpen(false); // Close login modal if open
//     setIsRegisterModalOpen(true);
//   };
//   const closeRegisterModal = () => setIsRegisterModalOpen(false);

//   return (
//     <>
//       <NavigationBar openLoginModal={openLoginModal} />
//       <Suspense
//         fallback={
//           <div className="flex justify-center items-center h-screen">
//             <img src="/Animation - 1736152825520" alt="loading animation" className="w-20 h-20" />
//           </div>
//         }
//       >
//         <Routes>
//           <Route path="/" element={<Hero />} />
//         </Routes>
//       </Suspense>

//       {/* Modal for Login */}
//       <Modal
//         isOpen={isLoginModalOpen}
//         onRequestClose={closeLoginModal}
//         contentLabel="Login Modal"
//         ariaHideApp={false}
//         className="fixed inset-0 flex items-center justify-center z-50"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50"
//       >
//         <Suspense fallback={<div className="text-center">Loading Login...</div>}>
//           <Login
//             openRegisterModal={openRegisterModal}
//             closeLoginModal={closeLoginModal}
//           />
//         </Suspense>
//       </Modal>

//       {/* Modal for Register */}
//       <Modal
//         isOpen={isRegisterModalOpen}
//         onRequestClose={closeRegisterModal}
//         contentLabel="Register Modal"
//         ariaHideApp={false}
//         className="fixed inset-0 flex items-center justify-center z-50"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50"
//       >
//         <Suspense fallback={<div className="text-center">Loading Register...</div>}>
//           <Register closeRegisterModal={closeRegisterModal} />
//         </Suspense>
//       </Modal>

//       <Partners />
//       <FreeTraining />
//       <Explore />
//       <CourseCard />
//       <CourseSection />
//       <StatisticsSection />
//       <ExploreJobs />
//       <Footer />
//     </>
//   );
// }

// export default MainApp;
