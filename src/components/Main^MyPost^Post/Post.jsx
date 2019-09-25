//npm start
import React from 'react';
import avatar from './avatar.jpg';
import PostCss from './Post.module.css';

const Post = (props) => {
    return (
        <article className={PostCss.article}>
            <img src={avatar} alt="Аватар" />
            <p>{props.message}</p>
            <span>Like {props.like}</span>
        </article>
    );
}

export default Post;