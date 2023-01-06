import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Herosection from '../components/Herosection'
import Footer from '../components/Footer'
import Footer2 from '../components/Footer2'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Responsive footer </title>
        <link rel="icon" href="WADAF.jpg" />
      </Head>
      {/* <h1 className="text-6xl font-bold text-indigo-500 underline">
      Hello world!        </h1>
       */}
      <Herosection />
      <Footer2 />
    </div>
    
  )
}
