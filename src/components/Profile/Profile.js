import React from 'react';
import UserPostsContainer from '../UserPosts/UserPostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {


    return(
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <UserPostsContainer />
        </div>
    )
}

export default Profile;