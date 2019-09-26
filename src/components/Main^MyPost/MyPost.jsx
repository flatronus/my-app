//npm start
import React from 'react';
//import avatar from '../../../../images/avatar.jpg';
import MyPostCss from './MyPost.module.css';
import Post from '../Main^MyPost^Post/Post';

const MyPost = () => {
    let postData = [
        {id:1, message:'Привіт', like:2},
        {id:2, message:'Слава Україні!', like:5},
        {id:3, message:'Як справи?', like:23}
    ]

    return (
        <section className={MyPostCss.section}>
            <form>
                <textarea>Введіть текст...</textarea>
                <button>Add Post</button>
            </form>
            <Post message={postData[0].message} like={postData[0].like}/>
            <Post message={postData[1].message} like={postData[1].like}/>
            <Post message={postData[2].message} like={postData[2].like}/>
        </section>
    );
}

export default MyPost;