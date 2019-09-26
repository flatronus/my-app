//npm start
import React from 'react';
import PostCss from './Post.module.css';
import Avatar from '../Main^MyPost^Post^Avatar/Avatar';

const Post = (props) => {
    return (
        <article className={PostCss.article}>
            <Avatar />
            <p>{props.message}</p>
            <span>Like {props.like}</span>
        </article>
    );
}

export default Post;