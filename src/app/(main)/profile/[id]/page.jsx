'use client'
import React, { use, useEffect, useState } from 'react'

const friendsP = async () => {
  const res = await fetch('http://localhost:3000/friends.json');
  return res.json()
}

function ProfileId({params}) {
    
    const name = use(params);
    console.log(name.id)
    let names = '';
    for (let i = 0; i < name.id.length; i++){
      console.log(name.id[i]);
      if (name.id[i] === '%' ){
        names += ' ';
        i+=2
      }
      else{
        names += name.id[i];
      }
    }
    console.log(names);

    /* useEffect(() => {
      const friendsP = async () => {
        const res = await fetch('http://localhost:3000/friends.json');
        const friends = await res.json();
        setData(friends)
      }
      friendsP()
    }) */

    const friendsPromise = friendsP();
    console.log(friendsPromise)
    const friends = use(friendsPromise);
    console.log(friends)
    return (
      <div>

      </div>
    )
}

export default ProfileId