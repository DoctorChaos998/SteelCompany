import React from 'react';
import {clsx} from "clsx";
import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={clsx(classes.footer)}>
            <div className={clsx(classes.componentWrapper)}>
                <div className={clsx(classes.componentHeader)}>
                    <span className="material-symbols-outlined">
                        pin_drop
                    </span>
                    <h3>
                        Типо адрес
                    </h3>
                </div>
                <p>
                    Адрес 1
                </p>
            </div>
            <div className={clsx(classes.componentWrapper)}>
                <div className={clsx(classes.componentHeader)}>
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                    <h3>
                        Типо почта
                    </h3>
                </div>
                <p>
                    example@gmail.com
                </p>
            </div>
            <div className={clsx(classes.componentWrapper)}>
                <div className={clsx(classes.componentHeader)}>
                    <span className="material-symbols-outlined">
                        call
                    </span>
                    <h3>
                        Типо телефон
                    </h3>
                </div>
                <p>
                    phone
                </p>
            </div>
        </footer>
    );
};

export default Footer;