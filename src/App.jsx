import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./index.css";
import "./App.css";

// Lazy-loaded components
const Hackathon = lazy(() => import("./Hackathon/src/App"));
const MainApp = lazy(() => import("./components/Home Page/MainApp"));
const Jobs = lazy(() => import("./components/jobs/Frontend/src/App"));
const Courses = lazy(() => import("./components/Courses/src/App"));
import HRDashboard from "./components/dashboard/HR Dashboard/App";
const StudentDashboard = lazy(() =>
  import("./components/dashboard/Student Dashboard/App")
);
const Blog = lazy(() => import("./components/pages/blogs/Blog"));
const BlogPost = lazy(() =>
  import("./components/pages/blogs/components/BlogPost")
);

const LoadingAnimation = () => (
  <div className="loading-animation">
    <img src="/Animation - 1736152825520.gif" alt="Loading animation" />
    <p>Loading...</p>
  </div>
);

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <Router>
      {showLoading ? (
        <LoadingAnimation />
      ) : (
        <Suspense fallback={<LoadingAnimation />}>
          <Routes>
            <Route path="/hackathon/*" element={<HackathonWithDelay />} />
            <Route path="/*" element={<MainApp />} />
            <Route path="/job/*" element={<Jobs />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/student dashboard/*" element={<StudentDashboard />} />
            <Route path="/courses/*" element={<Courses />} />
            <Route path="/hrdashboard/*" element={<HRDashboard />} />
          </Routes>
        </Suspense>
      )}
    </Router>
  );
}

// Custom component to handle delay and lazy loading for Hackathon
const HackathonWithDelay = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Ensure loading animation stays for 1.5 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return isLoading ? <LoadingAnimation /> : <Hackathon />;
};

export default App;
