'use client'
import React, {useState} from 'react';
import {clsx} from "clsx";
import classes from "./ProductCarousel.module.scss";
import Image from "next/image";

const ProductCarousel = ({images, breakPoints}: {images: string[], breakPoints: number[]}) => {
    const [currentImageId, setCurrentImageId] = useState(0);
    const [currentBreakPoint, setCurrentBreakPoint] = useState(0);

    return (
        <div className={clsx(classes.container)}>
            <div className={clsx(classes.mainImage)}>
                <Image src={images[currentImageId]} alt={'Product image'} fill={true}/>
            </div>
            <div className={clsx(classes.carouselWrapper)}>
                <button className={clsx(classes.button)} onClick={() => {
                    setCurrentBreakPoint(Math.max(0, currentBreakPoint - 1));
                }}>
                    <span className={clsx("material-symbols-outlined", classes.icon)}>
                        chevron_left
                    </span>
                </button>
                <div className={clsx(classes.carouselContainer)}>
                    <div className={clsx(classes.carousel)} style={{transform: `translateX(${breakPoints[currentBreakPoint]}px)`}}>
                        {images.map((image, index) => <div
                            className={clsx(classes.carouselItem, (index === currentImageId) && classes.activeCarouselItem)}
                            key={image}
                            onClick={() => setCurrentImageId(index)}
                        >
                            <Image src={image} alt={'Product image'} fill={true}/>
                        </div>)}
                    </div>
                </div>
                <button className={clsx(classes.button)} onClick={() => {
                    setCurrentBreakPoint(Math.min(breakPoints.length - 1, currentBreakPoint + 1));
                }}>
                    <span className={clsx("material-symbols-outlined", classes.icon)}>
                        chevron_right
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ProductCarousel;