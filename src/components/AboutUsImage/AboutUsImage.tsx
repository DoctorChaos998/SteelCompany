import React from 'react';
import {clsx} from "clsx";
import classes from "./AboutUsImage.module.scss";
import metalworking from './metalworking.jpg'
import Image from "next/image";

const AboutUsImage = () => {
    return (
        <div className={clsx(classes.imageContainer)}>
            <Image src={'/images/aboutUsImage.jpg'} alt={'Image about us'} className={clsx(classes.image)} fill={true}></Image>
            <div className={clsx(classes.textContainer)}>
                <h2>
                    SteelCompany
                </h2>
                <p className={clsx(classes.text)}>
                    Наша компания - это профессиональный партнёр в сфере металлообработки и изготовления точных деталей.
                    Мы обладаем многолетним опытом и экспертизой, которые позволяют нам уверенно стоять на рынке и соответствовать самым высоким стандартам качества.
                </p>
            </div>
        </div>
    );
};

export default AboutUsImage;