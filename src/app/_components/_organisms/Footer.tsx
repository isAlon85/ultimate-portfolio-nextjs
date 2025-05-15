import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Israel Alonso Niño. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
