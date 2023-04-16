import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => { setOpen(!open); }

    return (
        <nav className="flex justify-between items-center h-24 max-w-7xl mx-auto px-16 w-full">
            <h1 className='w-full text-3xl font'>John Portin</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Projects</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={toggleMenu} className='black md:hidden'>
                {open ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl"/>}
            </div>
            <div className={ open
                ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-gray-100  ease-in-out duration-500'
                : 'fixed left-[-100%]' }>
                {/* <h1 className='w-full text-3xl font'>John Portin</h1>    */}
                <ul className='pt-24 uppercase'>
                    <li className="p-4 border-b border-blue-300">Home</li>
                    <li className="p-4 border-b border-blue-300">Projects</li>
                    <li className="p-4 border-b border-blue-300">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </nav>

    )
}