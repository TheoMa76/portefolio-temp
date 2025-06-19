import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../ui/Link";

export default function CustomFooter() {
  return (
    <>
        <div className="flex justify-center bg-[var(--primary)] min-h-1/4 space-x-4 mb-4 text-[var(--secondary)] w-full">
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
        </div>
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Théo Maerten. Tous droits réservés.
      </p>
    </>
  );
}