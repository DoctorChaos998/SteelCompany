import React from 'react';
import { clsx } from 'clsx';
import classes from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
    return (
        <header className={clsx(classes.headerContainer)}>
            <Link href={'/'} className={clsx(classes.header)}>
                <h1>
                    SteelCompany
                </h1>
            </Link>
            <nav className={clsx(classes.linksContainer)}>
                <Link href={'/company'} className={clsx(classes.link)}>
                    О нас
                </Link>
                <Link href={'/products'} className={clsx(classes.link)}>
                    Продукция
                </Link>
                <Link href={'/equipment'} className={clsx(classes.link)}>
                    Оборудование
                </Link>
                <Link href={'/contacts'} className={clsx(classes.link)}>
                    Контакты
                </Link>
            </nav>
        </header>
    );
};

export default Header;