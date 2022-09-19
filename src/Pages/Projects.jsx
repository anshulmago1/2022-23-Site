import React from "react";

function Projects() {
  return (
    <div className="flex flex-col items-center py-40">
      <div className="flex flex-col place-content-center h-96">
        <h1 className="text-9xl my-96">Projects</h1>
      </div>
      <div className="py-40 flex flex-col items-center w-full">
      <Project name="Memscript" link="https://memscript.netlify.app/" ></Project>
      <Project name="Relayter"></Project>
</div>
    </div>
  );
}

export default Projects;

function Project({name, link, ...props}) {
  return (
    <a href={link} target="_blank"className="w-5/6 p-40 m-2 bg-slate-800 rounded-3xl hover:bg-slate-700 transition">
      <h1 className="text-7xl underline text-center">
        {name}
              </h1>
  </a>
  )
}