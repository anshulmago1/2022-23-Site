import React from 'react';
import Page from '../Components/Page';

const resources = [
  {
    title: "HTML Crash Course For Absolute Beginners",
    description: "Learn the basics of HTML5 and web development in this crash course.",
    link: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    imageUrl: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
    skills: ["HTML", "Web Development"]
  },
  {
    title: "CSS Crash Course For Absolute Beginners",
    description: "Get to know all the basics of CSS in this comprehensive tutorial.",
    link: "https://www.youtube.com/watch?v=yfoY53QXEnI",
    imageUrl: "https://img.youtube.com/vi/yfoY53QXEnI/hqdefault.jpg",
    skills: ["CSS", "Web Development"]
  },
  {
    title: "JavaScript Crash Course For Beginners",
    description: "Learn JavaScript in this complete course for beginners.",
    link: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
    imageUrl: "https://img.youtube.com/vi/hdI2bqOjy3c/hqdefault.jpg",
    skills: ["JavaScript", "Web Development"]
  },
  {
    title: "React JS Crash Course",
    description: "Learn the basics of React in this comprehensive crash course.",
    link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    imageUrl: "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
    skills: ["React", "JavaScript", "Web Development"]
  },
];

function getSkillColor(skill) {
  const skillColors = {
    'HTML': 'bg-red-200 text-red-800',
    'CSS': 'bg-blue-200 text-blue-800',
    'JavaScript': 'bg-yellow-200 text-yellow-800',
    'React': 'bg-cyan-200 text-cyan-800',
    'Web Development': 'bg-green-200 text-green-800',
    'Python': 'bg-purple-200 text-purple-800',
    'Java': 'bg-orange-200 text-orange-800',
    'C++': 'bg-pink-200 text-pink-800',
    'Node.js': 'bg-lime-200 text-lime-800',
    'Database': 'bg-indigo-200 text-indigo-800',
  };
  return skillColors[skill] || 'bg-gray-200 text-gray-800';
}

function ResourceCard({ title, description, link, imageUrl, skills }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] h-full border border-gray-200">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className={`px-2 py-1 rounded-full text-sm font-medium ${getSkillColor(skill)}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

function Resources() {
  return (
    <Page>
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="md:text-6xl text-5xl font-bold mb-8 text-center text-gray-900 leading-tight">
          Web Development Resources
        </h1>
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">What is Web Development?</h2>
          <p className="md:text-xl text-lg mb-4 text-gray-600">
            Web development is the process of building and maintaining websites and web applications. It encompasses everything from creating simple static web pages to developing complex web-based software.
          </p>
          <p className="md:text-xl text-lg mb-4 text-gray-600">
            Web development typically involves three main components:
          </p>
          <ul className="list-disc list-inside md:text-xl text-lg mb-4 text-gray-600">
            <li>Front-end (Client-side): HTML, CSS, and JavaScript</li>
            <li>Back-end (Server-side): Languages like Python, Ruby, PHP, Java, or Node.js</li>
            <li>Databases: SQL or NoSQL databases to store and manage data</li>
          </ul>
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Recommended Tutorials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Getting Started with Web Development</h2>
          <ol className="list-decimal list-inside md:text-xl text-lg mb-4 text-gray-600">
            <li>Learn HTML to structure your web content</li>
            <li>Study CSS to style and layout your web pages</li>
            <li>Master JavaScript to add interactivity and dynamic behavior</li>
            <li>Explore front-end frameworks like React, Vue, or Angular</li>
            <li>Learn a back-end language and framework (e.g., Node.js with Express)</li>
            <li>Understand databases and how to integrate them into your applications</li>
            <li>Practice by building projects and contributing to open-source</li>
          </ol>
        </div>
      </div>
    </Page>
  );
}

export default Resources;