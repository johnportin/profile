import Image from 'next/image'
import { lorem } from '../utils/utils'
import ProjectPlaceholder from '../images/project-placeholder.jpg'

export default function Card() {
    return (
        <div className='w-64 md:w-96' >
            <h1 className='text-xl '>Project Title</h1>
            <div className="lg:h-8 lg:w-8 bg-red-100">
                <Image src={ProjectPlaceholder} alt="Project Image"/>
            </div>
            <p>{lorem.generateSentences(5)}</p>
        </div>
    )
}