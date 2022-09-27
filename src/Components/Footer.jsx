import FacebookIcon from "../assets/facebook_icon.svg";
import RemindIcon from "../assets/remind_icon.svg";

function Footer() {
  return (
      <footer className="p-6 text-sm flex flex-col gap-2">
        <div className="flex sm:flex-row flex-col sm:gap-4 gap-2">
          <a href="#" className="flex items-center hover:text-blue-400 transition-all" target="_blank">
            <span>Join Our Club</span>
          </a>
          <a href="https://www.facebook.com/groups/chscsnhs" target="_blank" className="flex items-center hover:text-blue-400 transition-all gap-1">
            <img src={FacebookIcon} alt="Facebook" className="w-6" />
            <span>Clements CSNHS</span>
          </a>
          <a href="https://www.remind.com/join/chscsnhs" target="_blank" className="flex items-center hover:text-blue-400 transition-all">
            <img src={RemindIcon} alt="Remind" className="w-7" />
            <span>@chscsnhs</span>
          </a>
        </div>
        <div className="border-b border-white"></div>
        <div className="">
          Copyright &copy;2022 Clements Computer Science National Honor Society. All rights reserved.
        </div>
      </footer>
  );
}

export default Footer;
