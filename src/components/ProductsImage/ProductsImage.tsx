import React from 'react';
import {clsx} from "clsx";
import classes from "./ProductsImage.module.scss";
import Image from "next/image";

const ProductsImage = () => {
    return (
        <div className={clsx(classes.imageContainer)}>
            <Image src={'/images/productsImage.jpg'} alt={'Products image'} className={clsx(classes.image)} fill={true}></Image>
            <div className={clsx(classes.textContainer)}>
                <h2>
                    Наша продукция
                </h2>
                <p className={clsx(classes.text)}>
                    Внеочередной ебейший текст
                </p>
            </div>
        </div>
    );
};

export default ProductsImage;