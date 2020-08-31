import React from 'react';

const Post = (props) => {
    return(
    <div className="post">
        <img
            className="avatar"
            alt="avatar"
            src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        />
        <p>{props.message}</p>
    </div>
    )
}

export default Post;