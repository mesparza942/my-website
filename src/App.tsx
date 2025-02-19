import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Button from "./components/Button";
import Container from "./components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import WelcomeAnimated from "./components/WelcomeAnimated";

function App() {
  return (
    <div className="bg-white dark:bg-[#0D1117] h-full w-full p-0 pt-4 sm:pt-10 xl:p-20 transition-colors duration-500 ease-in-out">
      <WelcomeAnimated />
      <div className="flex flex-col items-center p-8 xl:p-0 xl:flex-row xl:items-start xl:h-full gap-4">
        <div className="flex flex-col gap-4 xl:w-1/5 xl:min-w-80">
          <SideBar />
          <Container className="p-0 justify-center fixed bottom-3 right-2 flex !rounded-full xl:!rounded-lg xl:static xl:p-8">
            <Button
              btnText="Let's Talk"
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
        <div className="flex flex-col w-full gap-4">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
