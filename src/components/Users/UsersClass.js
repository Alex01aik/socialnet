import React from 'react';
import './Users.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    
    componentDidMount() {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {  
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return(
            <div>
                {this.props.users.map(user => 
                    <div key={user.id}>
                        <span>
                            <div>
                                <img className="avatar" src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar"/>
                            </div>
                            <div>
                                {user.followed
                                ?<button onClick={()=>this.props.unfollow(user.id)}>Follow</button>
                                :<button onClick={()=>this.props.follow(user.id)}>Unfollow</button>}
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
}

export default Users;