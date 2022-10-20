import React from 'react'

const UserItem = ({user}) => {
  return (
    <div className='card-item'>
            <img src={user.picture.large} alt="" />
            <div className="info">
                <h2>{user.name.first} {user.name.last}</h2>
                <p>{user.location.country} | {user.location.city}</p>
                <p>{user.email}</p>
            </div>
    </div>
  )
}

export default UserItem

