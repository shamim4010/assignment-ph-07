'use client'
import React, { useState } from 'react'
import CounterDashboard from './counterDashboard/CounterDashboard'
import FriendsCards from './friends/FriendsCards'

function MainBody({friendsPromise}) {
    const [count, setCount] = useState(0);
    const [onTrack, setOnTrack] = useState(0)
    const [almostDue, setAlmostDue] = useState(0)
    return (
        <>
            <CounterDashboard {...{count, onTrack, almostDue}} />
            <h2 className="text-3xl w-full p-8">Your Friends</h2>
            <FriendsCards {...{friendsPromise, setCount, setOnTrack, setAlmostDue}} />
        </>
    )
}

export default MainBody