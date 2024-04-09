import React from 'react';
import {clsx} from "clsx";
import classes from "./Equipment.module.scss";
import Image from "next/image";
import lazer from "./n.gif"

const Equipment = () => {
    return (
        <div className={clsx(classes.container)}>
            <Image src={lazer} alt={'text'} height={300} width={600}/>
            <div className={clsx(classes.textContainer)}>
                <p className={clsx(classes.name)}>
                    Электроэрозионный проволочно-вырезной станок
                </p>
                <div>
                    Описание
                </div>
            </div>
        </div>
    );
};

export default Equipment;