import React from "react";
import Page from "../Components/Page";
import Button from "../Components/Button";

function ClubInfo() {
  return (
    <Page>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-12">
          About CSNHS
        </h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">What is CSNHS?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The Computer Science National Honor Society (CSNHS) is a prestigious organization dedicated to promoting excellence and fostering passion in the field of computer science. Our club focuses on:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mb-6 space-y-2">
            <li>Teaching a variety of cutting-edge computer science topics</li>
            <li>Engaging in community service through tech-related events and projects</li>
            <li>Providing students with opportunities to develop valuable skills</li>
            <li>Creating a supportive network of like-minded CS enthusiasts</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Join CSNHS?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Skill Development</h3>
              <p className="text-gray-600">
                Enhance your coding abilities through hands-on projects, workshops, and collaborative learning experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Networking</h3>
              <p className="text-gray-600">
                Connect with peers, mentors, and industry professionals who share your passion for computer science.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Leadership Opportunities</h3>
              <p className="text-gray-600">
                Take on leadership roles within the club and develop essential soft skills for your future career.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">College Preparation</h3>
              <p className="text-gray-600">
                Strengthen your college applications and prepare for a successful future in computer science and technology.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Join Us Today!</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Whether you're a seasoned coder or just starting your journey in computer science, CSNHS welcomes all passionate and dedicated students. Join us to expand your knowledge, make lasting connections, and contribute to the exciting world of technology!
          </p>
          <div className="text-center">
            <Button href="https://forms.gle/VoA1pXD9LJwhRDBe7">
              Apply Now
            </Button>
          </div>
        </section>
      </div>
    </Page>
  );
}

export default ClubInfo;
