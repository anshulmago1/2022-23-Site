import React from 'react';
import Page from '../Components/Page';

const skillColors = {
  "Web Development": "bg-blue-100 text-blue-800",
  "React": "bg-cyan-100 text-cyan-800",
  "UI/UX Design": "bg-purple-100 text-purple-800",
  "Mobile Development": "bg-green-100 text-green-800",
  "React Native": "bg-teal-100 text-teal-800",
  "Backend Development": "bg-indigo-100 text-indigo-800",
  "JavaScript": "bg-yellow-100 text-yellow-800",
  "Database Management": "bg-red-100 text-red-800",
  "Full-stack Development": "bg-pink-100 text-pink-800",
  "Data Visualization": "bg-orange-100 text-orange-800",
  "API Integration": "bg-lime-100 text-lime-800",
};

const projects = [
  {
    title: "MSA Website",
    description: "Create a website for the Muslim Student Association to help them reach more students and share information about their events.",
    skills: ["Web Development", "React", "UI/UX Design"],
    signupLink: "https://forms.gle/exampleMSASignupForm",
  },
  {
    title: "Tutoring App",
    description: "Develop a mobile app to connect student tutors with those seeking academic help in various subjects.",
    skills: ["Mobile Development", "React Native", "Backend Development"],
    signupLink: "https://forms.gle/exampleTutoringAppSignupForm",
  },
  {
    title: "School Event Tracker",
    description: "Build a web application to help students keep track of school events, clubs, and activities.",
    skills: ["Web Development", "JavaScript", "Database Management"],
    signupLink: "https://forms.gle/exampleEventTrackerSignupForm",
  },
  {
    title: "Eco-Friendly Campus Initiative",
    description: "Create a platform to track and encourage eco-friendly practices among students and staff on campus.",
    skills: ["Full-stack Development", "Data Visualization", "API Integration"],
    signupLink: "https://forms.gle/exampleEcoFriendlySignupForm",
  },
];

function ProjectCard({ title, description, skills, signupLink }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] border border-gray-200">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Skills Needed:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className={`px-2 py-1 rounded-full text-sm ${skillColors[skill] || "bg-gray-100 text-gray-800"}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <a 
          href={signupLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-900 transition-colors duration-300"
        >
          Sign Up for This Project
        </a>
      </div>
    </div>
  );
}

function CommunityProjects() {
  const projectProposalFormUrl = "https://forms.gle/exampleProjectProposalForm";

  return (
    <Page>
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="md:text-6xl text-5xl font-bold mb-8 text-center text-gray-900 leading-tight">
          Community Projects
        </h1>
        <p className="md:text-xl text-lg mb-12 text-center text-gray-600">
          Join one of our ongoing community projects and make a difference while improving your coding skills!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Have a Project Idea?</h2>
          <p className="text-gray-600 mb-8">
            If you have an idea for a new community project, we'd love to hear about it! Click the button below to submit your proposal.
          </p>
          <a 
            href={projectProposalFormUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors duration-300 text-lg"
          >
            Propose a New Project
          </a>
        </div>
      </div>
    </Page>
  );
}

export default CommunityProjects;