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
  "Tailwind CSS": "bg-pink-100 text-pink-800",
  "Next.js": "bg-red-100 text-red-800",
  "Backend Development": "bg-pink-100 text-pink-800",
};

const projects = [
  {
    title: "First Racquet",
    description: "Create a an application for First Raqcuet on IOS, includes hour tracking, direct messaging, and more ",
    skills: ["App Development", "XCode", "UI/UX Design", "Firebase"],
    signupLink: "https://forms.gle/nyzhs2dC4zGnxnEE7",
  },
  {
    title: "DECA",
    description: "Create a website for DECA, includes login system, attendance tracking",
    skills: ["Web Development", "React", "UI/UX Design", "Backend Development"],
    signupLink: "https://forms.gle/nyzhs2dC4zGnxnEE7",
  },
  {
    title: "MSA Website",
    description: "Create a website for the Muslim Student Association to help them reach more students and share information about their events.",
    skills: ["Web Development", "React", "UI/UX Design"],
    signupLink: "https://forms.gle/nyzhs2dC4zGnxnEE7",
  },
  {
    title: "This Website!",
    description: "If you have any ideas to make this site better please let us know!",
    skills: ["Web Development", "Next.js", "UI/UX Design", "Tailwind CSS"],
    signupLink: "https://forms.gle/nyzhs2dC4zGnxnEE7",
  }
];

function ProjectCard({ title, description, skills, signupLink }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200 mb-8">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">{description}</p>
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Skills Needed:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className={`px-3 py-1 rounded-full text-sm ${skillColors[skill] || "bg-gray-100 text-gray-800"}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <a 
          href={signupLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-2 px-4 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
        >
          Sign Up for This Project
        </a>
      </div>
    </div>
  );
}

function CommunityProjects() {
  const projectProposalFormUrl = "https://forms.gle/8KL54YKfW5DQexHG8";

  return (
    <Page>
      <div className="max-w-6xl mx-auto px-4 py-10 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-12">
          Ongoing Projects
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
          Join one of our ongoing community projects and make a difference while improving your coding skills!
        </p>
        <div className="mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2 inline-block">Have a Project Idea?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            If you have an idea for a new community project or need people to work on a CS project, we'd love to hear about it! Click the button below to submit your proposal.
          </p>
          <a 
            href={projectProposalFormUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Propose a New Project
          </a>
        </div>
      </div>
    </Page>
  );
}

export default CommunityProjects;
