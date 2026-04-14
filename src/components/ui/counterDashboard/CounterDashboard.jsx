import React from 'react'

function CounterDashboard() {
  return (
    <div className="stats stats-vertical md:stats-horizontal md:gap-24 shadow-lg text-center">
        <div className="stat">
            <div className="stat-value">0</div>
            <div className="stat-title">Total Friends</div>
        </div>

        <div className="stat">
            <div className="stat-value">0</div>
            <div className="stat-title">On Track</div>
        </div>

        <div className="stat">
            <div className="stat-value">0</div>
            <div className="stat-title">Need Attention</div>
        </div>

        <div className="stat">
            <div className="stat-value">0</div>
            <div className="stat-title">Interactions This Month</div>
        </div>
    </div>
  )
}

export default CounterDashboard