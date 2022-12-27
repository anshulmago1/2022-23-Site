import React from "react";
import Button from "../Components/Button";
import Horizontal from "../Components/Horizontal";
import Page from "../Components/Page";

export default function Forms() {
  return (
    <Page>
      <h1 className="md:text-7xl text-5xl font-bold">Teaching</h1>
      <p className="md:text-xl md:leading-8 leading-loose">
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
      <Button>
        <a target="_blank" href="https://forms.gle/EgDBaALGt618oeue9">
          Sign Up to Teach
        </a>
      </Button>
      <h1 className="md:text-7xl text-5xl font-bold mt-10">
        Service Hours
      </h1>
      <p className="md:text-xl md:leading-8 leading-loose">
        When submitting service hours, make sure your forms are scanned clearly.
        As of now, we prefer YES forms, but any type of documentation with name,
        description, date of service, and adult signature will also be accepted.
      </p>
      <Button>
        <a target="_blank" href="https://forms.gle/NpdXKo5cHSdL2C6y5">
          Submit Your Hours
        </a>
      </Button>
    </Page>
  );
}
