import React from "react";
import { Block, Button, Flex, Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import { Spacer } from "./Spacer";

import styles from "../../public/css/Home.module.css";


export const HelloWorld: React.FC = () => {
  const { cars } = useCars();
  return (
    <div className={styles.homeWrapper}>
      <Spacer></Spacer>
      <Text variant="cook">All Recharge Models</Text>
      <Spacer></Spacer>
      <div className={styles.cardsWrapper}>
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
    </div>
  );
};
