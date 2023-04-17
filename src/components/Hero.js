import Typewriter from 'typewriter-effect'
import ProfilePicture from '../images/profile.jpg'
import Image from 'next/image'
import { lorem } from '../utils/utils'

export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row w-full items-center md:px-8 justify-between mb-8">
            <div className="flex flex-col">
                <h2 className='text-2xl'>Hi, Im John, a 
                    <Typewriter
                    options={{
                        strings: ['Web Developer', 'Software Engineer', 'Mathematician', 'Problem Solver'],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: 'text-blue-500',
                    }}
                    />
                </h2>
                {/* <p>{lorem.generateWords(50)}</p> */}
            </div>
            <Image className="h-full w-48 lg:w-64 shrink-0 rounded-full" src={ ProfilePicture } alt="Profile Picture" />
      </section>
    )
}