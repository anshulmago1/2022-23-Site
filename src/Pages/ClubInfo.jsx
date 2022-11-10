import React from "react";
import Button from "../Components/Button";
import Horizontal from "../Components/Horizontal";
import Page from "../Components/Page";

function ClubInfo() {
  return (
    <Page>
      <h1 className="lg:text-xl md:text-base sm:text-sm text-sm">
        Club Information
      </h1>
      <Horizontal></Horizontal>
      <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl">
        What is CSNHS?
      </h1>
      <p className="lg:text-xl md:text-base sm:text-sm leading-loose">
        Computer Science National Honor Society is a club focused on teaching a
        variety of topics in computer science, along with helping the community
        with tech-related events and projects. We strive to provide students
        with a chance to learn valuable skills and to help others.
      </p>
      <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl">
        Why should I join?
      </h1>
      <p className="lg:text-xl md:text-base sm:text-sm leading-loose">
        If you are interested in software development, game design, or pretty
        much any field of computer science, our club is a great way to find ways
        to learn and apply these skills in the real world through our
        volunteering opportunities. The concepts and topics we teach are
        valuable tools if you plan on becoming a software developer or just want
        to build games and projects of your own.
      </p>
      <Button>Sign Up</Button>
    </Page>
  );
}

export default ClubInfo;
