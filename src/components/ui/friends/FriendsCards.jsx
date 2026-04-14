'use client'
import React, { use } from 'react'
import Cards from './card/Cards.jsx';

function FriendsCards({friendsPromise}) {
    const friends = use(friendsPromise);
    console.log(friends)
    return (
        <div className='grid grid-cols-4 place-items-center place-content-between gap-8'>
            {friends.map(friend => {
                return (
                    <Cards key={friend.id} friend={friend} />
                )
            })}
        </div>
    )
}

export default FriendsCards