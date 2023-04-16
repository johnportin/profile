import { Inter } from 'next/font/google'
import Card from '../components/Card'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import { lorem } from '../utils/utils'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col max-w-7xl items-center m-auto">
      <Navbar />
      <Hero />
      <section className="flex flex-col md:flex-row mx-16 items-center space-x-8 ">
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
