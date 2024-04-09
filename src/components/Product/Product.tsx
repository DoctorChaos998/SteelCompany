import React from 'react';
import {clsx} from "clsx";
import classes from "./Product.module.scss";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";


interface IProduct{
    name: string,
    images: string[],
    productItems: string[],
    breakPoints: number[]
}
const Product = ({name, images, productItems, breakPoints}: IProduct) => {
    return (
        <div className={clsx(classes.wrapper)}>
            <div className={clsx(classes.container)}>
                <ProductCarousel images={images} breakPoints={breakPoints}/>
                <div className={clsx(classes.productDescriptionContainer)}>
                    <h3 className={clsx(classes.header)}>
                        {name}
                    </h3>
                    <ul>
                        {productItems.map(value => <li key={value}>
                            {value}
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Product;