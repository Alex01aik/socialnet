import React from 'react';

const Post = (props) => {
    return(
    <div className="post">
        <img
            className="avatar"
            alt="avatar"
            src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
        />
        <p>{props.message}</p>
    </div>
    )
}

export default Post;