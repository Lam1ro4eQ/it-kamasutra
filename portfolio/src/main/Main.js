import React from "react";
import style from './Main.module.css';
import containerStyle from '../common/styles/Container.module.css'


function Main() {
    return (
        <div className={style.main}>
            <div className={containerStyle.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Jefferey Aaron</h1>
                    <p>Frontend Deweloper</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>

        </div>
    );
}

export default Main;