import FacebookIcon from "../assets/facebook_icon.svg";
import RemindIcon from "../assets/remind_icon.svg";

function Footer() {
  return (
    <footer className="text-slate-500 transition-all stroke-slate-500 p-6 text-sm flex flex-col gap-2">
      <div className=" flex sm:flex-row flex-col sm:gap-4 gap-2">
        <a href="#" className="flex items-center " target="_blank">
          <span>Join Our Club</span>
        </a>
        <a
          href="https://www.facebook.com/groups/chscsnhs"
          target="_blank"
          className="flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-slate-500"
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

          <span>Clements CSNHS</span>
        </a>
      </div>
      <div className="border-b border-slate-500"></div>
      <div className="">
        Copyright &copy;2022 Clements Computer Science National Honor Society.
        All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
