import React from "react";
import Button from "../Components/Button";
import Page from "../Components/Page";

export default function Forms() {
  return (
    <Page>
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-blue-900">Teaching</h2>
        <p className="text-xl mb-8 text-gray-700">
          Anyone willing to share their experience in an area of Computer Science
          can sign up to teach lessons! These lessons will count as service hours,
          and must be taught in an{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/spreadsheets/d/1YjQITcpr_Hzhfqt9G0ayVSU9JxG0gm2MTDS2RlrU0yo/edit?usp=sharing"
            className="underline text-blue-500 hover:text-blue-400 transition-all"
          >
            available time slot.
          </a>
        </p>
        <Button href="https://forms.gle/EgDBaALGt618oeue9" target="_blank">
          Sign Up to Teach
        </Button>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-8 text-blue-900">Service Hours</h2>
        <p className="text-xl mb-8 text-gray-700">
          When submitting service hours, make sure your forms are scanned clearly.
          As of now, we prefer YES forms, but any type of documentation with name,
          description, date of service, and adult signature will also be accepted.
        </p>
        <Button href="https://forms.gle/NpdXKo5cHSdL2C6y5" target="_blank">
          Submit Your Hours
        </Button>
      </section>
    </Page>
  );
}
