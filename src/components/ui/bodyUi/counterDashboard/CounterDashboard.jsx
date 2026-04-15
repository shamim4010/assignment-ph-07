import React from 'react'

function CounterDashboard({count, onTrack, active}) {
  return (
    <div className="stats stats-vertical md:stats-horizontal md:gap-24 shadow-lg text-center">
        <div className="stat">
            <div className="stat-value">{count}</div>
            <div className="stat-title">Total Friends</div>
        </div>

        <div className="stat">
            <div className="stat-value">{onTrack}</div>
            <div className="stat-title">On Track</div>
        </div>

        <div className="stat">
            <div className="stat-value">{active}</div>
            <div className="stat-title">Active</div>
        </div>

        <div className="stat">
            <div className="stat-value">0</div>
            <div className="stat-title">Interactions This Month</div>
        </div>
    </div>
  )
}

export default CounterDashboard