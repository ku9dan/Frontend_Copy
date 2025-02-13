import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
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
  return (
    <>
      <NavigationBar />
      <Suspense
        fallback={
          <div>
            <img src="/Animation - 1736152825520" alt="loading animation" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>

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
