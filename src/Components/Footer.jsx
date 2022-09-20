import FacebookIcon from "../assets/facebook_icon.svg";
import RemindIcon from "../assets/remind_icon.svg";

function Footer() {
  return (
      <footer className="p-6 text-sm">
        <div className="flex items-center mb-2">
          <div className="mr-8">
            <a href="#" className="hover:text-blue-400 transition-all">Join Our Club</a>
          </div>
          <a href="https://www.facebook.com/groups/chscsnhs" className="flex items-center mr-8 hover:text-blue-400 transition-all">
            <img src={FacebookIcon} alt="Facebook" className="w-6 mr-2" />
            <span>Clements CSNHS</span>
          </a>
          <a href="https://www.remind.com/join/chscsnhs" className="flex items-center hover:text-blue-400 transition-all">
            <img src={RemindIcon} alt="Remind" className="w-7 mr-1" />
            <span>@chscsnhs</span>
          </a>
        </div>
        <div className="border-b border-white"></div>
        <div className="mt-2">
          Copyright &copy;2022 Clements Computer Science National Honor Society. All rights reserved.
        </div>
      </footer>
  );
}

export default Footer;
