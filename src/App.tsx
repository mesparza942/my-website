import SideBar from "./components/SideBar";
import Content from "./components/Content";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import Container from "./components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import WelcomeAnimated from "./components/WelcomeAnimated";

function App() {
  return (
    <div className="bg-gray-400 dark:bg-[#0D1117] h-full w-full lg:p-20 transition-colors duration-500 ease-in-out">
      <WelcomeAnimated />
      <div className="flex flex-col lg:flex-row items-start h-full gap-4">
        <div className="flex flex-col gap-4 min-w-80 w-1/5">
          <SideBar />
          <Container className="p-8 flex justify-center">
            <Button
              btnText="Hire me"
              btnType="link"
              href="mailto:maresparzam@gmail.com"
              icon={
                <FontAwesomeIcon
                  icon={faEnvelopeCircleCheck}
                  className="pl-2"
                />
              }
            />
          </Container>
        </div>
        <div className="flex flex-col gap-4">
          <SearchBar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
