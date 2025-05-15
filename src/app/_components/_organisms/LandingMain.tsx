import React from "react";
import LandingSectionAbout from "../_molecules/LandingSectionAbout";
import LandingSectionExperience from "../_molecules/LandingSectionExperience";
import LandingSectionStack from "../_molecules/LandingSectionStack";
import LandingSectionProjects from "../_molecules/LandingSectionProjects";
import LandingSectionEducation from "../_molecules/LandingSectionEducation";

export default function LandingMain() {
  return (
    <main className="flex-grow w-full">
      <LandingSectionAbout />
      <LandingSectionExperience />
      <LandingSectionStack />
      <LandingSectionProjects />
      <LandingSectionEducation />
    </main>
  );
}
