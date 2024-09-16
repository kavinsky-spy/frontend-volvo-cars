import React from "react";
import { IconButton, View } from "vcc-ui";

import styles from '../../public/css/components/PaginationDesktop.module.css'

interface PaginationDesktop {
    onClickLeft: () => void;
    onClickRight: () => void;
}

export function PaginationDesktop({ onClickLeft, onClickRight }: PaginationDesktop) {
    return (
            <div className={styles.btnWrapper}>


                <IconButton variant="outline" bleed={true} aria-label="left" iconName="navigation-chevronback" onClick={onClickLeft} />
                <IconButton variant="outline" bleed={true} aria-label="right" iconName="navigation-chevronforward" onClick={onClickRight} />
            </div>
    );
}
