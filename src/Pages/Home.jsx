import React from "react";
import Button from "../Components/Button";

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white h-[85vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-4">
            Clements <span className="text-blue-200">CSNHS</span>
          </h1>
          <p className="text-2xl text-blue-100 mb-8">Computer Science National Honor Society</p>
          <Button href="#get-involved">Get Involved</Button>
        </div>
      </header>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard 
            icon="👥"
            title="Community"
            description="Join a vibrant community of passionate CS enthusiasts."
          />
          <FeatureCard 
            icon="💻"
            title="Coding"
            description="Enhance your coding skills through projects and workshops."
          />
          <FeatureCard 
            icon="🎓"
            title="Growth"
            description="Prepare for your future in computer science and technology."
          />
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-900">Join Our Community</h2>
          <p className="text-xl mb-12 text-gray-700">
            Be part of a supportive network of students passionate about computer science. 
            Learn, grow, and make lasting connections.
          </p>
          <Button>Get Involved</Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-100 p-8 rounded-lg text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default Home;