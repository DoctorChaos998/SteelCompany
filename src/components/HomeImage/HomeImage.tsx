import React from 'react';
import {clsx} from "clsx";
import classes from "./HomeImage.module.scss";
import Image from "next/image";
import Link from "next/link";

const HomeImage = () => {
    return (
        <div className={clsx(classes.imageContainer)}>
            <Image src={'/images/homeImage.jpg'} alt={'Home image'} className={clsx(classes.image)} fill={true}></Image>
            <div className={clsx(classes.textContainer)}>
                <h2>
                    SteelCompany
                </h2>
                <p className={clsx(classes.text)}>
                    Компания которая специализируется на металлообработке и производстве высокачественных металлических
                    деталей
                </p>
                <div className={clsx(classes.linksContainer)}>
                    <Link href={'/products'} className={clsx(classes.link)}>Продукция</Link>
                    <Link href={'/contacts'} className={clsx(classes.link)}>Контакты</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeImage;