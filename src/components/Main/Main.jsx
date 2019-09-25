//npm start
import React from 'react';
import img_main from './img_main.jpg';
import MainCss from './Main.module.css';

import MyPost from '../Main^MyPost/MyPost';

const Main = () => {
    return (
        <main className={MainCss.main}>
            <div>
                <img src={img_main} alt="Картинка2" height="150" />
            </div>
            <div>ava+description</div>
            <MyPost />
            <div>new post</div>
            Main content
        </main>
    );
}

export default Main;