import React from 'react';
import ProductsImage from "@/components/ProductsImage/ProductsImage";
import ProductPreview from "@/components/ProductPreview/ProductPreview";
import ProductsContainer from "@/components/ProductsContainer/ProductsContainer";

const Page = () => {
    return (
        <>
            <ProductsImage/>
            <ProductsContainer/>
        </>
    );
};

export default Page;