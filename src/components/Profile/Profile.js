import React from 'react';
import UserPostsContainer from '../UserPosts/UserPostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo profile={props.profile} />
            <UserPostsContainer />
        </div>
    )
}

export default Profile;