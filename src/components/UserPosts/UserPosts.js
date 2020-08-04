import React from 'react';
import Post from '../Post/Post';

const UserPosts = (props) => {

    let addNewPost = () => {
        props.addPost()
    }

    let onPostChange = (event) => {
        props.updatePost(event.target.value);
    }

    return(
        <div className="posts">
                <textarea onChange={onPostChange} value={props.newPostText}></textarea>
                <button onClick={addNewPost}>Add post</button>
                <h4>My posts</h4>
                {props.posts.map( post => {
                    return(
                        <Post
                            key={post.id}
                            message={post.text}
                        />
                    )
                })}
            </div>
    )
}

export default UserPosts;