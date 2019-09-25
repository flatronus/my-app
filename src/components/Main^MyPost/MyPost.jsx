//npm start
import React from 'react';
//import avatar from '../../../../images/avatar.jpg';
import MyPostCss from './MyPost.module.css';
import Post from '../Main^MyPost^Post/Post';

const MyPost = () => {
    return (
        <section className={MyPostCss.section}>
            <form>
                <textarea>Введіть текст...</textarea>
                <button>Add Post</button>
            </form>
            <Post message='Привіт' like='2'/>
            <Post message='Слава Україні!' like='5'/>
            <Post message='Як справи?' like='23'/>
        </section>
    );
}

export default MyPost;