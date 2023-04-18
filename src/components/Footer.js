import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-row">
      <p className="text-3xl pl-4">Contact</p>
      <FaGithub />
      <FaLinkedin />
    </footer>
  );
}
