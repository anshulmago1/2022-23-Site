import React from "react";
import Button from "../Components/Button";
import ParticleBackground from '../Components/ParticleBackground';

function Home() {
  const scrollToGetInvolved = (e) => {
    e.preventDefault();
    const getInvolvedSection = document.getElementById('get-involved');
    if (getInvolvedSection) {
      getInvolvedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white h-[85vh] flex flex-col justify-center items-center relative overflow-hidden">
        <ParticleBackground />
        <div className="text-center relative z-20">
          <h1 className="text-6xl font-bold mb-4">
            Clements <span className="text-blue-200">CSNHS</span>
          </h1>
          <p className="text-2xl text-blue-100 mb-8">Computer Science National Honor Society</p>
          <Button href="#get-involved" onClick={scrollToGetInvolved}>Get Involved</Button>
        </div>
      </header>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard 
            icon="👥"
            title="Community"
            description="Join a community of computer science enthusiasts."
            borderColor="border-blue-500"
          />
          <FeatureCard 
            icon="💻"
            title="Coding"
            description="Enhance your coding skills through projects and workshops."
            borderColor="border-purple-500"
          />
          <FeatureCard 
            icon="🛠️"
            title="Growth"
            description="Build your portfolio by building projects hands-on."
            borderColor="border-green-500"
          />
        </div>
      </section>

      <section id="get-involved" className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-4 border-indigo-500 pb-2 inline-block">Join Clements CSNHS</h2>
          <p className="text-xl mb-12 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            To be a member of Clements CSNHS, please sign up below. We look forward to having you join our community!
          </p>
          <Button href="https://forms.gle/kKTFyBWu25kgd6mS7" target="_blank">Interest Form</Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, borderColor }) {
  return (
    <div className="bg-gray-100 p-8 rounded-lg text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className={`text-2xl font-semibold mb-4 text-gray-800 border-b-4 ${borderColor} pb-2 inline-block`}>{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default Home;
