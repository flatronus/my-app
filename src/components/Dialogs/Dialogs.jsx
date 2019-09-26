import React from 'react';
//import imagelogo from '../../imagelogo.png';
import DialogsCss from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    return (
        <article className={DialogsCss.dialog + ' ' + DialogsCss.active}>
            <NavLink to={"dialogs/" + props.id}>{props.name}</NavLink>
        </article>
    )
}

const Message = (props) => {
    return (
        <article className={DialogsCss.message}>
                    {props.message}
                </article>
    )
}


const Dialogs = (props) => {
    let dialogsData = [
        {id:1, name:'Dmytro'},
        {id:2, name:'Vasylyna'},
        {id:3, name:'Ivan'},
        {id:4, name:'Slavko'},
        {id:5, name:'Petro'},
    ]
    let messagesData = [
        {id:1, message:'Div.mess'},
        {id:2, message:'Hi'},
        {id:3, message:'fdgfhdug'},
        {id:4, message:'Sddddds'},
        {id:5, message:'fooooooo'},
    ]
    return (
        <section className={DialogsCss.section}>
            <div className={DialogsCss.dialogs}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>

            <div className={DialogsCss.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </section>
    );
}

export default Dialogs;