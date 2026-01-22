import React from 'react'
import Loading from '../../components/common/Loading'
import Hero from './Hero'
import BestWorkers from './BestWorkers'
import Testimonials from './Testimonials'
import PlatformStats from './PlatformStats'
import Leaderboard from './Leaderboard'
import RewardMilestones from './RewardMilestones'

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <BestWorkers></BestWorkers>
      <Testimonials></Testimonials>
      <PlatformStats></PlatformStats>
      <Leaderboard></Leaderboard>
      <RewardMilestones></RewardMilestones>
    </div>
  )
}
