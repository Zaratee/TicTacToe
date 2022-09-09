import React from 'react'
import './dashboard.scss'

function Dashboard() {
  return (
    <div className='dashboard_container'>
      <div className='dashboard_btn'>Player VS Player</div>
      <div className='dashboard_btn'>Player VS Computer </div>
      <div className='dashboard_btn'>Configuration</div>
      <div className='dashboard_btn'>Credits</div>
    </div>
  )
}

export default Dashboard