import React from 'react'

const UserItem = ({user}) => {
  return (
    <div className='card-item'>
            <img src={user.picture.large} alt="" />
            <div className="info">
                <p>{user.name.first} {user.name.last}</p>
                <p>{user.location.country} | {user.location.city}</p>
                <p>{user.email}</p>
            </div>
    </div>
  )
}

export default UserItem

