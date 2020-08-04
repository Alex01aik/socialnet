import UserPosts from './UserPosts';
import { connect } from 'react-redux';
import { addPostAC, updatePostAC } from '../../redux/profileReducer';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profileReducer.newPostText,
        posts: state.profileReducer.posts
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostAC(newPostText));
        },
        updatePost: (newText) => {
            dispatch(updatePostAC(newText));
        }

    }

}

const UserPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserPosts);

export default UserPostsContainer;