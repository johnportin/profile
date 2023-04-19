import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex justify-between items-center h-24 max-w-7xl mx-auto  w-full uppercase">
      <h1 className="w-full text-3xl font">John Portin</h1>
      <ul className="hidden md:flex items-center text-xl">
        <Link
          className="hover:transform hover:scale-125 duration-200"
          href="#home"
          scroll={false}
        >
          <li className="p-4">Home</li>
        </Link>

        <Link
          className="hover:transform hover:scale-125 duration-200"
          href="#projects"
          scroll={false}
        >
          <li className="p-4">Projects</li>
        </Link>

        <Link
          className="hover:transform hover:scale-125 duration-200"
          href="#about"
          scroll={false}
        >
          <li className="p-4">About</li>
        </Link>

        <li className="hover:transform hover:scale-125 duration-200 p-4">
          <a href="https://www.github.com/johnportin" target="_blank">
            <FiGithub />
          </a>
        </li>
        <li className="hover:transform hover:scale-125 duration-200 p-4">
          <a
            className="hover:transform hover:scale-125 duration-200"
            href="https://www.linkedin.com/in/johnportin/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </li>
      </ul>
      <div onClick={toggleMenu} className="black md:hidden">
        {open ? <></> : <AiOutlineMenu className="text-2xl" />}
      </div>
      <div
        className={
          open
            ? "fixed left-0 top-0 w-[60%] max-w-xs h-full border-r-gray-900 bg-gray-100  ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div onClick={toggleMenu} className="black p-4">
          {open ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <AiOutlineMenu className="text-2xl" />
          )}
        </div>
        {/* <h1 className='w-full text-3xl font'>John Portin</h1>    */}
        <ul className="pt-4 uppercase">
          <Link href="#home" scroll={false}>
            <li className="p-4">Home</li>
          </Link>

          <Link href="#projects" scroll={false}>
            <li className="p-4">Projects</li>
          </Link>

          <li className="p-4">
            <Link href="#about" scroll={false}>
              About
            </Link>
          </li>
          <li className="p-4">
            <a href="https://www.github.com/johnportin" target="_blank">
              <FiGithub />
            </a>
          </li>
          <li className="p-4">
            <a href="https://www.linkedin.com/in/johnportin/" target="_blank">
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
