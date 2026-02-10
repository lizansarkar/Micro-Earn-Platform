import React from 'react'
import MySubmissions from './MySubmissions'
import TaskList from './TaskList'
import TaskDetails from './TaskDetails'
import Withdrawals from './Withdrawals'
import ApprovedSubmissions from './ApprovedSubmissions'

export default function WorkerHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Worker Dashboard</h1>
      <TaskList></TaskList>
      <TaskDetails></TaskDetails>
      <Withdrawals></Withdrawals>
      <ApprovedSubmissions></ApprovedSubmissions>
      <MySubmissions></MySubmissions>
    </div>
  )
}
