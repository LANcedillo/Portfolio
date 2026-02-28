import { LinkedInIcon, GitHubIcon,PortfolioIcon } from "./icons/SocialMedia";
interface FooterProps {
  iconClass: string;
  size: number;
}
export const Footer = ({ iconClass, size }: FooterProps) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-12">
        <div className="flex justify-center gap-4 mb-4">
            <a href="https://www.linkedin.com/in/luis-angel-cedillo-52700b199" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
                <LinkedInIcon className={iconClass} size={size} />
            </a>
            <a href="https://github.com/LANcedillo" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
                <GitHubIcon className={iconClass} size={size} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
                <PortfolioIcon className={iconClass} size={size} />
            </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Luis Ángel Cedillo. Construido con React + TypeScript.
        </p>
    </footer>
  );
}