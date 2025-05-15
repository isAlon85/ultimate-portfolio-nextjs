import React from "react";
import Navigation from "../_molecules/Navigation";

export default function Navbar() {
  return (
    <header className="w-full flex justify-between items-center gap-0.5 bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">Israel Alonso</h1>
      <Navigation />
    </header>
  );
}
