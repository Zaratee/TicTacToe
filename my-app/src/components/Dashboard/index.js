import React from 'react'
import './dashboard.scss'

function Dashboard(props) {

  const { setRoute } = props

  return (
    <div className='dashboard_container'>
      <div className='dashboard_btn' onClick={() => setRoute('P2P')}>Player VS Player</div>
      <div className='dashboard_btn' onClick={() => setRoute('P2C')}>Player VS Computer </div>
      <div className='dashboard_btn' onClick={() => setRoute('CONFIG')}>Configuration</div>
      <div className='dashboard_btn' onClick={() => setRoute('CREDITS')}>Credits</div>
    </div>
  )
}

export default Dashboard