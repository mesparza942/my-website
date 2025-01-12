import Title from "./Title";
import Container from "./Container";
import TmrwLogo from "../assets/tmrw_logo.jpeg";
import TruelogicLogo from "../assets/truelogic_logo.jpeg";
import RaiinmakerLogo from "../assets/raiinmaker_logo.jpeg";
import XometryLogo from "../assets/xometry_logo.jpeg";
import DreamCodeLogo from "../assets/dreamcode_logo.jpeg";

const Content = () => {
  return (
    <Container className="w-full p-4">
      <Title label="About Me" />
      <p className="py-2">
        I am a results-driven Senior Software Engineer with 7 years of
        experience building scalable web applications and delivering technical
        solutions. My expertise lies in JavaScript and its ecosystem, with a
        strong focus on React.js for creating responsive and maintainable web
        applications. I am also experienced with Vue.js and backend technologies
        like Node.js and TypeScript. I thrive in agile environments,
        collaborating closely with cross-functional teams, and continuously
        adopting emerging technologies. With a full-stack perspective, I ensure
        seamless and impactful digital experiences from concept to deployment.
      </p>
      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          <Title label="Main Skills" />
          <ul>
            <li>⭑ JavaScript (ES6+), TypeScript</li>
            <li>⭑ React.js, Vue.js, Next.js, Node.js,</li>
            <li>⭑ Tailwind CSS, Styled Components, Storybook</li>
            <li>⭑ REST APIs, GraphQL</li>
            <li>⭑ PostgreSQL, MySQL, Prisma</li>
            <li>⭑ Docker</li>
            <li>⭑ Coralogix, Datadog, CloudWatch, Quantum Metric</li>
            <li>⭑ Monorepo, Microfrontends, Microservice Architectures</li>
          </ul>
          <Title label="Courses" />
          <ul>
            <li>⭑ SOLID Principles - Udemy</li>
            <li>⭑ Version Control with Git - DataCamp</li>
            <li>⭑ UX Design - UXPA</li>
            <li>⭑ Digital Marketing & Web Analytics - Google</li>
          </ul>
        </div>
        <div>
          <Title label="Projects" />
          <p>calendar-app</p>
          <p>picoyplaca</p>
          <p>react-floating-icons</p>
          <Title label="Code Excercises" />
          <p>
            <a
              href="https://codesandbox.io/p/sandbox/react-sortable-tree-demo-lwbsx"
              target="_blank"
            >
              React sortable tree component
            </a>
          </p>
        </div>
      </div>
      <Title label="Companies I have worked for" />
      <div className="grid grid-cols-3 gap-4 py-2">
        <div className="flex items-center gap-2">
          <img className="w-16 h-16" src={TmrwLogo} alt="TMRW Logo" />
          <div className="flex flex-col">
            <span className="text-lg font-bold">TMRW Life Sciences</span>
            <span className="text-sm">1 year</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-16 h-16" src={TruelogicLogo} alt="Truelogic Logo" />
          <div className="flex flex-col">
            <span className="text-lg font-bold">Truelogic Software</span>
            <span className="text-sm">4 Years</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-16 h-16"
            src={RaiinmakerLogo}
            alt="Raiinmaker Logo"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold">Raiinmaker</span>
            <span className="text-sm">5 months</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-16 h-16" src={XometryLogo} alt="Xometry Logo" />
          <div className="flex flex-col">
            <span className="text-lg font-bold">Xometry</span>
            <span className="text-sm">3 Years</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-16 h-16" src={DreamCodeLogo} alt="DreamCode Logo" />
          <div className="flex flex-col">
            <span className="text-lg font-bold">DreamCode</span>
            <span className="text-sm">3 Years</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Content;
