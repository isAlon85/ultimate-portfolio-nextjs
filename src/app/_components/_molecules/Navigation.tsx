import React from "react";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center">
      <ul className="flex gap-4">
        <li>
          <a href="#contact" className="hover:underline">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
