import React from 'react';
//import imagelogo from '../../imagelogo.png';
import DialogsCss from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <section className={DialogsCss.section}>
            <div className={DialogsCss.dialogs}>
                <article className={DialogsCss.dialog + ' ' + DialogsCss.active}>
                    Dmytro
                </article>
                <article className={DialogsCss.dialog}>
                    Vasylyna
                </article>
                <article className={DialogsCss.dialog}>
                    Ivan
                </article>
                <article className={DialogsCss.dialog}>
                    Slavko
                </article>
                <article className={DialogsCss.dialog}>
                    Petro
                </article>
            </div>

            <div className={DialogsCss.messages}>
                <article className={DialogsCss.message}>
                    Div.mess
                </article>
                <article className={DialogsCss.message}>
                    Hi
                </article>
                <article className={DialogsCss.message}>
                    Vay
                </article>
            </div>
        </section>
    );
}

export default Dialogs;