import { Inter } from 'next/font/google'
import Card from '../components/Card'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import { lorem } from '../utils/utils'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-7xl px-8 md:px-16 ">
      <Navbar />
      <Hero />
      <section className="
        flex flex-col w-full
        gap-auto place-items-center
        md:items-end
        md:grid md:grid-cols-2 md:gap-16
        ">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <About />
    </div>
  )
}
