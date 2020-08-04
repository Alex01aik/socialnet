import React from 'react';
import './Profile.css';
import UserPostsContainer from '../UserPosts/UserPostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
    return(
        <div>
            <ProfileInfo />
            <UserPostsContainer />
        </div>
    )
}

export default Profile;