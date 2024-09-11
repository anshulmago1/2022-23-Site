import React from "react";
import Page from "../Components/Page";

function ClubInfo() {
  return (
    <Page>
      <div className="max-w-6xl mx-auto px-4 py-10 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-12">
          About CSNHS
        </h1>
        

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2 inline-block">What is CSNHS?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 shadow-lg p-5 bg-white rounded-lg">
            The Computer Science National Honor Society (CSNHS) is an organization that recognizes students who display qualities of scholarship, leadership, character, and generosity in relation to computer science. CSNHS strives to promote learning and understanding of computer science, service to the community, and leadership for other students.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-purple-500 pb-2 inline-block">What We Do</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our members help throughout the community through various activities and events. Students participate in many activities such as:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Host events and run contests",
              "Tutor students",
              "Provide technology-related assistance in the community",
              "Host various lessons and talks on computer science topics"
            ].map((activity, index) => (
              <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <span className="text-purple-500 mr-2 text-xl">•</span>
                <span className="text-base text-gray-800">{activity}</span>
              </li>
            ))}
          </ul>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-500 pb-2 inline-block">Points System</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            CSNHS uses a points system to encourage active participation. Members must earn at least 12 points per semester to remain active. Points can be earned through various activities:
          </p>
          <ul className="space-y-3">
            {[
              "Paying dues (5 points)",
              "Volunteer hours related to computer science (includes web development) (1 point per hour)",
              "Participating in the any CSNHS event (2 points)",
              "Attending a CSNHS meeting (1 point)",
              "Teaching a lesson (5 points)"
            ].map((item, index) => (
              <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <span className="text-green-500 mr-2 text-xl">•</span>
                <span className="text-base text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-red-500 pb-2 inline-block">Requirements</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Anyone can join CSNHS or the Web Dev team. However, in order to graduate with a CSNHS cord you must:
          </p>
          <ul className="space-y-3">
            {[
              "Earn at least 12 points per semester (see Points System above)",
              "Pay dues",
              "Have 2 computer science credits completed with an A or above",
              "Have no more than 1 unexcused meeting for the year"
            ].map((requirement, index) => (
              <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-base text-gray-800">{requirement}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </Page>
  );
}

export default ClubInfo;
