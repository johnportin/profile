import { lorem } from '../utils/utils'

export default function About() {
    return (
        <section>
            <h1 className='text-2xl'>About Me</h1>
            <p>{ lorem.generateSentences(5) }</p>
            <p>{ lorem.generateSentences(5) }</p>
      </section>
    )
}