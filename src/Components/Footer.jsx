function Footer() {
  return (
    <footer className="text-slate-500 stroke-slate-500 text-sm flex absolute bottom-5 mr-10">
      <div className="flex md:flex-row flex-col md:gap-4 gap-2 max-w-screen-2xl">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd653LDz2Ot0di4BVwhlAkEFEmV6sNnBbYQiCbVLNqr4LE4wA/viewform" className="hover:text-slate-400 transition-all" target="_blank">
          <span>Join Our Club</span>
        </a>
        <a
          href="https://www.facebook.com/groups/chscsnhs"
          target="_blank"
          className="flex items-center gap-1 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-slate-500 group-hover:stroke-slate-400 transition-all"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>

          <span className="group-hover:text-slate-400 transition-all">Clements CSNHS</span>
        </a>
        <p>
          Copyright &copy;2022 Clements Computer Science National Honor Society.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
