import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import ProfilePicture from '../images/profile.jpg'
import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-row">
        <div className="flex flex-col">
          <h2>Hi, I'm John, a software developer and mathematician.</h2>
          <p>{lorem.generateWords(50)}</p>
        </div>
        <Image src={ ProfilePicture } alt="Profile Picture" width={ 200 } height={ 200 } />
      </section>
    </div>
  )
}
