import React from "react";
import Button from "../Components/Button";
import Page from "../Components/Page";

function ClubInfo() {
  return (
    <Page>
      <h1 className="md:text-7xl text-5xl font-bold">
        What is CSNHS?
      </h1>
      <p className="md:text-xl md:leading-8 leading-loose">
        Computer Science National Honor Society is a club focused on teaching a
        variety of topics in computer science, along with helping the community
        with tech-related events and projects. We strive to provide students
        with a chance to learn valuable skills and to help others.
      </p>
      <h1 className="md:text-7xl text-5xl font-bold mt-10">
        Why should I join?
      </h1>
      <p className="md:text-xl md:leading-8 leading-loose">
        If you are interested in software development, game design, or pretty
        much any field of computer science, our club is a great way to find ways
        to learn and apply these skills in the real world through our
        volunteering opportunities. The concepts and topics we teach are
        valuable tools if you plan on becoming a software developer or just want
        to build games and projects of your own.
      </p>
      <Button>
        <a target="_blank" href="https://forms.gle/VoA1pXD9LJwhRDBe7">
          Sign Up
        </a>
      </Button>
    </Page>
  );
}

export default ClubInfo;
