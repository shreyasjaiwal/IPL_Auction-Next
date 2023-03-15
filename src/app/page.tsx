import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Form from './Form'
import Footer from './Footer'
import Timeline from './Timeline'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Timeline/>
    <Form/>
    <Footer/>
   </div>
  )
}
