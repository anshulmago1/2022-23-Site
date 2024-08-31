import React from "react";
import Button from "../Components/Button";
import Page from "../Components/Page";

export default function Forms() {
  return (
    <Page>
      <div className="max-w-6xl mx-auto px-4 py-8 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
          CSNHS Forms
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-green-500 pb-2 inline-block">Web Development Team</h2>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              This year, we are creating a web development team to produce websites for various clubs and organizations. Experience working with languages such as HTML, CSS, and JavaScript are recommended, although we also have tasks that can be completed by people unfamiliar with them.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Joining our Web Dev team will be a great way to earn volunteer hours from the comfort of your own home, and can teach you many practical skills that will be useful later on.
            </p>
            <Button href="https://forms.gle/nyzhs2dC4zGnxnEE7" target="_blank">
              Join Web Dev Team
            </Button>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 pb-2 inline-block">Teaching</h2>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <p className="text-base text-gray-700 leading-relaxed mb-4">
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
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-purple-500 pb-2 inline-block">Service Hours</h2>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              When submitting service hours, make sure your forms are scanned clearly.
              As of now, we prefer YES forms, but any type of documentation with name,
              description, date of service, and adult signature will also be accepted.
            </p>
            <Button href="https://forms.gle/NpdXKo5cHSdL2C6y5" target="_blank">
              Submit Your Hours
            </Button>
          </div>
        </section>

        
      </div>
    </Page>
  );
}
