"use client";

import Navbar from "@/app/components/Navbar"
import About from "@/app/about/About"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Footer/>
    </main>
  )
}
