import React from 'react';
import {clsx} from "clsx";
import classes from "./Specialisation.module.scss";

const Specialisation = () => {
    return (
        <div className={clsx(classes.wrapper)}>
            <div className={clsx(classes.container)}>
                <h3 className={clsx(classes.header)}>
                    Наша специализация
                </h3>
                Мы - команда профессионалов, сосредоточенных на обработке металла и изготовлении точных деталей.
                Наш опыт и мастерство позволяют нам удовлетворять самые высокие стандарты качества в этой области.
                Не важно, нужна ли вам одна деталь или большая партия - мы готовы принять вызов и обеспечить вас результатом, который превзойдет ваши ожидания.
                Доверьтесь нам для вашего следующего проекта по металлообработке и убедитесь в нашей способности превратить вашу концепцию в реальность.
            </div>
        </div>
    );
};

export default Specialisation;