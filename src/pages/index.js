import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Image from 'next/image'
import ProfilePicture from '../images/profile.jpg'
import { lorem } from '../utils/utils'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <section className="flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col">
          <h2>Hi, Im John, a software developer and mathematician.</h2>
          <p>{lorem.generateWords(50)}</p>
        </div>
        <Image className="h-full w-48 lg:w-96 shrink-0" src={ ProfilePicture } alt="Profile Picture" />
      </section>
      <section className="bg-gray-100">
        <Card />
        <Card />
      </section>
      <section>
        <h1>About Me</h1>
        <p>{ lorem.generateSentences(5) }</p>
        <p>{ lorem.generateSentences(5) }</p>
      </section>
    </div>
  )
}
