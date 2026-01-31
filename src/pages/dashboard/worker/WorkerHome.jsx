import React from 'react'
import MySubmissions from './MySubmissions'

export default function WorkerHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Worker Dashboard</h1>
      <MySubmissions></MySubmissions>
    </div>
  )
}
