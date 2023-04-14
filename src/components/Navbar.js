import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
    return (
        <div>
            <nav className="flex flex-row">
                <FaGithub />
                <FaLinkedin />
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>

    )
}