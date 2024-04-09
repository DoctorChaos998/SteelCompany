'use client'
import React, {useState} from 'react';
import {clsx} from "clsx";
import classes from "./AboutUsAccordion.module.scss";
const accordionHeaders = ['header1', "header2", "header3", "header4"];
const AboutUsAccordion = () => {
    const [currentOpenIndex, setCurrentOpenIndex] = useState(-1);

    const accordionClickHandler = (index: number) => {
        setCurrentOpenIndex(index === currentOpenIndex?-1:index);
    }

    return (
        <section className={clsx(classes.wrapper)}>
            <div className={clsx(classes.container)}>
                <h4 className={clsx(classes.header)}>Часто задаваемые вопросы</h4>
                {accordionHeaders.map((header, index) =>
                    <div className={clsx(classes.accordionItemContainer)} onClick={() => accordionClickHandler(index)} key={header}>
                        <div className={clsx(classes.accordionHeader)}>
                            <p className={clsx(classes.accordionTextHeader)}>
                                {header}
                            </p>
                            <span className={clsx(["material-symbols-outlined", classes.icon])}>
                            add
                        </span>
                        </div>
                        <div className={clsx([classes.accordionItem, (index === currentOpenIndex) && classes.accordionItemOpen])}>
                            <span>
                                sometextsometextsometextsometextsometextsometextsometextsometextsometextsometext
                            </span>
                        </div>
                    </div>)}
            </div>
        </section>
    );
};

export default AboutUsAccordion;