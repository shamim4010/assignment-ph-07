import React, { useState } from 'react'
import FriendsProfile from './friendsprofile/FriendsProfile.jsx';

function Data({names, friendsPromise}) {
    const [timelineData, setTimelineData] = useState([]);
    return (
        <div>
            <FriendsProfile {...{names, friendsPromise, setTimelineData}}/>
            {console.log(timelineData)}
        </div>
    )
}

export default Data