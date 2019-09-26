//npm start
import React from 'react';
import avatar from './avatar.jpg';
import AvatarCss from './Avatar.module.css';

const Avatar = () => {
    return (
        <div>
            <img className={AvatarCss.avatar} src={avatar} alt="Аватар" />
        </div>
    );
}

export default Avatar;