import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faBuilding,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ThemeToggle from "./ThemeToggle";
import { getFormattedEcuadorTime } from "../utils/dateTime";
import Container from "./Container";
import generalInfo from "../data/info.json";
import type { IMyInfo } from "../utils/types";

const myInfo = generalInfo as IMyInfo;

const MyInfo = ({ className }: { className: string }) => (
  <div className={`flex flex-col gap-2 p-4 ${className}`}>
    <span>
      <FontAwesomeIcon icon={faBuilding} className="pr-2" />
      {myInfo.jobCompany}
    </span>
    <span>
      <FontAwesomeIcon icon={faMapPin} className="pr-2" />
      {myInfo.location}
    </span>
    <span>
      <FontAwesomeIcon icon={faClock} className="pr-2" />
      {getFormattedEcuadorTime()}
    </span>
    <span>
      <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
      <a href={`mailto:${myInfo.email}`}>{myInfo.email}</a>
    </span>
    <span>
      <FontAwesomeIcon icon={faGithub} className="pr-2" />
      <a href={myInfo.github} target="_blank">
        {myInfo.githubAccount}
      </a>
    </span>
    <span>
      <FontAwesomeIcon icon={faLinkedin} className="pr-2" />
      <a href={myInfo.linkedin} target="_blank">
        LinkedIn Profile
      </a>
    </span>
  </div>
);

const SideBar = () => {
  return (
    <Container className="">
      <div className="flex justify-between items-center gap-8 p-4">
        <div>
          <h1 className="text-2xl font-bold">{myInfo.name}</h1>
          <h2 className="text-lg text-gray-500 dark:text-gray-400 font-bold">
            {myInfo.job}
          </h2>
        </div>
        <ThemeToggle />
      </div>
      <div className="hidden sm:flex xl:hidden">
        <div className="w-1/2">
          <img
            src={myInfo.photo}
            alt="Marcelo Esparza"
            className="w-full rounded-bl-lg"
          />
        </div>
        <MyInfo className="w-1/2 text-2xl gap-6" />
      </div>
      <div className="block sm:hidden xl:block">
        <img src={myInfo.photo} alt="Marcelo Esparza" className="w-full" />
      </div>
      <MyInfo className="flex flex-col sm:hidden xl:flex xl:flex-col" />
      <div className="p-4 block sm:hidden xl:block">
        <p className="text-center text-greenFav font-bold">
          Always willing to learn new stuff!
        </p>
      </div>
    </Container>
  );
};

export default SideBar;
