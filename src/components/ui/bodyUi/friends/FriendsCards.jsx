'use client'
import React, { use, useEffect } from 'react'
import Cards from './card/Cards.jsx';

function FriendsCards({friendsPromise, setCount, setOnTrack, setActive}) {
    const friends = use(friendsPromise);
    console.log(friends)

    useEffect(() => {
        const onTracks = friends.filter(item => item.status === 'On-Track')
        const actives = friends.filter(item => item.status === 'Active')

        setCount(friends.length)
        setOnTrack(onTracks.length)
        setActive(actives.length)
    })

    return (
        <div className='grid place-items-center place-content-between gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {friends.map(friend => {
                return (
                    <Cards key={friend.id} friend={friend} />
                )
            })}
        </div>
    )
}

export default FriendsCards