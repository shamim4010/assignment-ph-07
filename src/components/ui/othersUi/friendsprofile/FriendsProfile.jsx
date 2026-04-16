import React, { use } from 'react'
import Card from './friendsProfileCards/Card';

function FriendsProfile({names, friendsPromise}) {
    const friends = use(friendsPromise);
    console.log(friends)
    console.log(names)

    const filterFriends = friends.filter(item => names === item.name);
    return (
        <div>
            {filterFriends.map(friend => {
                return (
                   <Card key={friend.id} {...{friend}} /> 
                )
            })}
        </div>
    )
}

export default FriendsProfile