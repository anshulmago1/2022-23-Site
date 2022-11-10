import React from "react";
import Button from "../Components/Button";
import Horizontal from "../Components/Horizontal";
import Page from "../Components/Page";

export default function Forms() {
  return (
    <Page>
      <h1 className="lg:text-xl md:text-base sm:text-sm text-sm">Forms</h1>
      <Horizontal></Horizontal>
      <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl">Teaching</h1>
      <p className="lg:text-xl md:text-base sm:text-sm leading-loose">
        Anyone willing to share their experience in an area of Computer Science
        can sign up to teach lessons! These lessons will count as service hours,
        and must be taught in an{" "}
        <a
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1YjQITcpr_Hzhfqt9G0ayVSU9JxG0gm2MTDS2RlrU0yo/edit?usp=sharing"
          className="underline text-blue-500 hover:text-blue-400 transition-all"
        >
          available time slot.
        </a>
      </p>
      <a target="_blank" href="https://forms.gle/EgDBaALGt618oeue9">
        <Button>Sign Up to Teach</Button>
      </a>
    </Page>
  );
}
