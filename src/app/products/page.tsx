"use client";
import Navbar from "@/app/components/Navbar"
import Products from "@/app/products/Products"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Products/>
      <Footer/>
    </main>
  )
}
