'use client'
import React, { useState } from 'react'
import CounterDashboard from './counterDashboard/CounterDashboard'
import FriendsCards from './friends/FriendsCards'

function MainBody({friendsPromise}) {
    const [count, setCount] = useState(0);
    const [onTrack, setOnTrack] = useState(0)
    const [active, setActive] = useState(0)
    return (
        <>
            <CounterDashboard {...{count, onTrack, active}} />
            <FriendsCards {...{friendsPromise, setCount, setOnTrack, setActive}} />
        </>
    )
}

export default MainBody