import React from "react";
import Navbar from "../_organisms/Navbar";
import Footer from "../_organisms/Footer"; // Replace with the actual path to the Navbar component

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
