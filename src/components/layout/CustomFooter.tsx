import {faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../ui/Link";
import { faCircleUser} from "@fortawesome/free-solid-svg-icons";

export default function CustomFooter() {
  return (
    <div className="w-full mt-30 bg-[var(--primary)] text-[var(--white)] py-6 min-h-[150px] shadow-lg border-t-2 border-[var(--secondary)] overflow-hidden glowblue">
      <div className="container mx-auto grid gap-6 md:grid-cols-3 items-center text-center md:text-left">
        <div className="space-y-1 text-[var(--background)]">
          <p className="font-semibold">Contact</p>
          <p>theoma.dev@gmail.com</p>
        </div>

        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/TheoMa76"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Lien vers le GitHub de Théo Maerten"
            icone={<FontAwesomeIcon icon={faGithub} />}
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/th%C3%A9o-maerten-a8161725a/"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Lien vers le LinkedIn de Théo Maerten"
            icone={<FontAwesomeIcon icon={faLinkedin} />}
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.malt.fr/profile/theomaerten"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Lien vers le compte Malt de Théo Maerten"
            icone={<FontAwesomeIcon icon={faCircleUser} />}
          >
            Malt
          </Link>
        </div>

        <div className="text-md md:text-right text-[var(--background)]">
          © {new Date().getFullYear()} Théo Maerten. Tous droits réservés.
        </div>
      </div>
    </div>
  );
}
