import React from 'react';
import './Users.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {

    let getUsers = () => {
        alert("request is running");
        if(props.users.length === 0){

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger;   
                props.setUsers(response.data.items);
            });
        }
    }

  
    return(
        <div>

            <button onClick={getUsers}>Get Users</button>
  
            {props.users.map(user => 
                <div key={user.id}>
                    <span>
                        <div>
                            <img className="avatar" src={user.photo.small != null ? user.photo.small : userPhoto} alt="avatar"/>
                        </div>
                        <div>
                            {user.followed
                            ?<button onClick={()=>props.unfollow(user.id)}>Follow</button>
                            :<button onClick={()=>props.follow(user.id)}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    )
}

export default Users;