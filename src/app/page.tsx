import LogoElement from "@/components/ui/LogoElement";
import PortfolioProjects from "@/components/ui/PortFolioProjects";
import Textblock from "@/components/ui/Textblock";
import { faCss3, faJava, faReact, faSymfony } from "@fortawesome/free-brands-svg-icons";
import { faGolang } from "@fortawesome/free-brands-svg-icons/faGolang";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <Textblock title={"Ma stack technique"}>
      <div className="flex md:space-x-4 flex-col md:flex-row justify-center items-center gap-15">
        <LogoElement logo={<FontAwesomeIcon icon={faSymfony} />} text="Symfony" />
        <LogoElement logo={<FontAwesomeIcon icon={faReact} />} text="React.js / Next.js " />
        <LogoElement logo={<FontAwesomeIcon icon={faJava} />} text="Java / Spring" />
        <LogoElement logo={<FontAwesomeIcon icon={faCss3} />} text="CSS / Tailwind CSS" />
        <LogoElement logo={<FontAwesomeIcon icon={faGolang} />} text="Go" />
      </div>
      <PortfolioProjects />
    </Textblock>
  );
}