import Image from 'next/image'
import { lorem } from '../utils/utils'
import ProjectPlaceholder from '../images/project-placeholder.jpg'

export default function Card() {
    return (
        <div className='flex flex-col md:self-start md:items-start md:justify-start w-full' >
            <h1 className='text-xl '>Project Title</h1>
            <div className="">
                <Image src={ProjectPlaceholder} alt="Project Image"/>
            </div>
            <p>{lorem.generateSentences(5)}</p>
        </div>
    )
}