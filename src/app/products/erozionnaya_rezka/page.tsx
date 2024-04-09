import React from 'react';
import Product from "@/components/Product/Product";

const images = [
    '/images/erozionnayaRezka1.jpg',
    '/images/erozionnayaRezka2.jpg',
    '/images/erozionnayaRezka3.jpg',
    '/images/erozionnayaRezka4.jpg',
    '/images/erozionnayaRezka5.jpg',
    '/images/erozionnayaRezka6.jpg'
];

const productItems = [
    'резка любого профиля',
    'изготовление пуансонов и матриц',
    'резка зубьев шестерен',
    'нарезка внутренних шлицев любого профиля',
    'резка шпонпазов',
    'резка твердосплавных изделий'
];

const breakPoints = [0, -70];
const Page = () => {
    return (
        <Product name={'Эрозионная резка'} images={images} productItems={productItems} breakPoints={breakPoints}/>
    );
};

export default Page;