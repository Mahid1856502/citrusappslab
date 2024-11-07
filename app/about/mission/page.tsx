import Engage from '@/app/_components/Engage'
import Hero from '@/app/_components/Hero'
import Offers from '@/app/_components/Offers'
import Testimonials from '@/app/_components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Engage title="" heading="Take the steps towards software success" info="At NetNexus Global, we pride ourselves on a seamless and effective process designed to deliver top-quality adaptive software development solutions. Here’s a breakdown of how we engage with our clients before the project kick-off."/>
      <Offers/>
      <Testimonials/>
    </div>
  )
}

export default page
