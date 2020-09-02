import React from 'react';
import userPhoto from '../../assets/images/user.png';
import './Users.css';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
        
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span key={page} className={props.currentPage === page ? "selectedPage" : ""}
                        onClick={(e) => {props.onPageChanged(page)}}>{page}</span>
                })}
            </div>
            {props.users.map(user => 
                <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img className="avatar" src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                            ?<button disabled={props.followingInProgress.some(id => id === user.id)} 
                                onClick={ () => {props.follow(user.id);
                            }}>Follow</button>
                            :<button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={ () => { props.unfollow(user.id);
                            }}>Unfollow</button>}
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