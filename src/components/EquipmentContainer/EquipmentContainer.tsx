import React from 'react';
import {clsx} from "clsx";
import classes from "./EquipmentContainer.module.scss";
import Equipment from "@/components/Equipment/Equipment";

const EquipmentContainer = () => {
    return (
        <div className={clsx(classes.wrapper)}>
            <Equipment/>
            <Equipment/>
            <Equipment/>
            <Equipment/>
        </div>
    );
};

export default EquipmentContainer;