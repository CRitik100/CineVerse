import { Link } from "react-router-dom";
import FacebookIcon from "../../icons/FacebookIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import YouTubeIcon from "../../icons/YouTubeIcon";
import XIcon from "../../icons/XIcon";

const Footer = () => {
  return (
    <div className="bg-black text-white text-lg relative z-50 p-11 flex justify-center">
      <div className="flex flex-col gap-5 w-full max-w-2xl">
        <div id="socialMediaLink">
          <ul className="flex gap-5">
            <li id="fb">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </li>
            <li id="ig">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </li>
            <li id="x">
              <a
                href="https://www.x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon />
              </a>
            </li>
            <li id="yt">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </a>
            </li>
          </ul>
        </div>
        <div id="Imp Links">
          <ul className="grid grid-cols-4 gap-y-3 text-gray-400 text-sm">
            <li>About</li>
            <li>Support</li>
            <li>Database</li>
            <li>Releases</li>
            <li>Trending</li>
            <li>AI</li>
            <li>Watchlist</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookies</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="text-xs text-gray-400">
          © 2026 Cenverse, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
