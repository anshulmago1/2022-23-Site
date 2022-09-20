import React from "react";

function Projects() {
  return (
    <div className="flex flex-col items-center py-48 px-8 gap-10">
      <h1 className="text-7xl">Projects</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6 md:gap-8">
        <Project name="Memscript" tags={['React', 'JavaScript']} link="https://memscript.netlify.app/" ></Project>
        <Project name="Relayter" tags={['JavaScript', 'CSS']}></Project>
        <Project name="Memscript" tags={['React', 'JavaScript']} link="https://memscript.netlify.app/" ></Project>
        <Project name="Relayter" tags={['JavaScript', 'CSS']}></Project>
        <Project name="Memscript" tags={['React', 'JavaScript']} link="https://memscript.netlify.app/" ></Project>
        <Project name="Relayter" tags={['JavaScript', 'CSS']}></Project>
        <Project name="Memscript" tags={['React', 'JavaScript']} link="https://memscript.netlify.app/" ></Project>
        <Project name="Relayter" tags={['JavaScript', 'CSS']}></Project>
      </div>
    </div>
  );
}

export default Projects;

function Project({ name, link, tags }) {
  const tagItems = tags.map(tag =>
    <div className='bg-indigo-700 px-2 py-1 rounded-3xl text-sm'>{tag}</div>
  );

  return (
    <div>
      <a href={link} target="_blank" className="bg-slate-800 rounded-3xl w-72 h-72 p-8 hover:bg-slate-700 transition flex flex-col gap-2 justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl">
            {name}
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          {tagItems}
        </div>
      </a>
    </div>
  )
}