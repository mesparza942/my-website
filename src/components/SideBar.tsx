import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faBuilding,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ThemeToggle from "./ThemeToggle";
import Photo from "../assets/mesparza.jpg";
import { getFormattedLocalTime } from "../utils/dateTime";
import Container from "./Container";

const SideBar = () => {
  return (
    <Container className="w-1/5 min-w-80">
      <div className="flex justify-between items-center gap-8 p-4">
        <div>
          <h1 className="text-2xl font-bold">Marcelo Esparza</h1>
          <h2 className="text-lg text-gray-500 dark:text-gray-400 font-bold">
            Software Engineer
          </h2>
        </div>
        <ThemeToggle />
      </div>
      <div>
        <img src={Photo} alt="Marcelo Esparza" className="w-full" />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <span>
          <FontAwesomeIcon icon={faBuilding} className="pr-2" />
          TMRW Life Sciences
        </span>
        <span>
          <FontAwesomeIcon icon={faMapPin} className="pr-2" />
          Quito - Ecuador
        </span>
        <span>
          <FontAwesomeIcon icon={faClock} className="pr-2" />
          {getFormattedLocalTime()}
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
          <a href="mailto:maresparzam@gmail.com">maresparzam@gmail.com</a>
        </span>
        <span>
          <FontAwesomeIcon icon={faGithub} className="pr-2" />
          <a href="https://github.com/mesparza942" target="_blank">
            mesparza942
          </a>
        </span>
        <span>
          <FontAwesomeIcon icon={faLinkedin} className="pr-2" />
          <a
            href="https://www.linkedin.com/in/marcelo-esparza-20506a156/"
            target="_blank"
          >
            LinkedIn Profile
          </a>
        </span>
      </div>
      <div className="p-4">
        <p className="text-center text-greenFav">
          Always willing to learn new stuff!
        </p>
      </div>
    </Container>
  );
};

export default SideBar;
