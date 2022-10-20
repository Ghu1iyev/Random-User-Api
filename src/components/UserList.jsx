import React from "react";
import axios from "axios";
import { useState, useEffect  } from "react";
import UserItem from "./UserItem";

const UserList = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true)

  const fetchUser = async () => {
    const res = await 
    axios.get("https://randomuser.me/api/?results=5")
    .finally(() => setIsloading(false))
    setUsers(res.data.results)
};


useEffect(() => {
    fetchUser();
}, []);

  return(
    <div className="list-item">
        {
            isLoading && <h1 className="loading">Loading...</h1>
        }
        <ul>
            {
                users.map((user, id) => (
                    <li key={id}><UserItem user={user} /></li>
                ))
            }
        </ul>
    </div>
  );
};

export default UserList;
