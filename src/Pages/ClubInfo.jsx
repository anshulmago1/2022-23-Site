import React from "react";
import Button from "../Components/Button";

function ClubInfo() {
  return (
    <div className="flex flex-col items-center">
      <div className="z-10 max-w-7xl py-48 px-8">
        <div className="w-full max-h-screen flex flex-col">
          <h1 className="text-7xl">What is CSNHS?</h1>
          <p className="py-10 text-xl">
            Computer Science National Honor Society is a club focused on teaching a variety of topics in computer science,
            along with helping the community with tech-related events and projects.
            We strive to provide students with a chance to learn valuable skills and to help others.
          </p>
          <h1 className="text-7xl">Why should I join?</h1>
          <p className="py-10 text-xl">
            If you are interested in software development, game design, or pretty much any field of computer science,
            our club is a great way to find ways to learn and apply these skills in the real world through our volunteering opportunities.
            The concepts and topics we teach are valuable tools if you plan on becoming a software developer or just want to build games and projects of your own.
          </p>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default ClubInfo;
