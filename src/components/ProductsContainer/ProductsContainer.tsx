import React from 'react';
import {clsx} from "clsx";
import classes from "./ProductsContainer.module.scss";
import ProductPreview from "@/components/ProductPreview/ProductPreview";


const ProductsContainer = () => {
    return (
        <section className={clsx(classes.container)}>
            <ProductPreview productName={'Эрозионная резка'} productLink={'/products/erozionnaya_rezka'} productImage={'/images/erozionnayaRezka1.jpg'}/>
            <ProductPreview productName={'Тонколистовой металл'} productLink={'/products/erozionnaya_rezka'} productImage={'/images/erozionnayaRezka1.jpg'}/>
            <ProductPreview productName={'Фрезерная обработка'} productLink={'/products/erozionnaya_rezka'} productImage={'/images/erozionnayaRezka1.jpg'}/>
            <ProductPreview productName={'Токарная обработка'} productLink={'/products/erozionnaya_rezka'} productImage={'/images/erozionnayaRezka1.jpg'}/>
        </section>
    );
};

export default ProductsContainer;