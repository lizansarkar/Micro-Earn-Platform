import React from 'react'
import Loading from '../../components/common/Loading'
import Hero from './Hero'
import BestWorkers from './BestWorkers'
import Testimonials from './Testimonials'

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <BestWorkers></BestWorkers>
      <Testimonials></Testimonials>
    </div>
  )
}
