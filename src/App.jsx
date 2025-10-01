// src/App.js
import React, { Suspense, lazy } from "react";
import HeadingComponent from "./components/Header";
import BodySection from "./components/Body";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));

const AppLayout = () => (
  <>
    <HeadingComponent />
    <BodySection />
    <Footer />
  </>
);

export default AppLayout;

// Optional: export About separately if needed elsewhere
export { About };
