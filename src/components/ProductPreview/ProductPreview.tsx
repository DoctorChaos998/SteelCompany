import React from 'react';
import classes from "./ProductPreview.module.scss";
import {clsx} from "clsx";
import Image from "next/image";
import Link from "next/link";

const ProductPreview = ({productName, productLink, productImage}: {productName: string, productLink: string, productImage: string}) => {
    return (
        <Link href={productLink} className={clsx(classes.container)}>
            <Image src={productImage} alt={'image'} height={300} width={300}/>
            <p className={clsx(classes.productName)}>
                {productName}
            </p>
        </Link>
    );
};

export default ProductPreview;