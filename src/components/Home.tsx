import React from "react";
import { Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import { Spacer } from "./Spacer";
import { PaginationDesktop } from "./PaginationDesktop";

import styles from "../../public/css/Home.module.css";


export const Home: React.FC = () => {
  const { cars } = useCars();

  const onClickLeft = () => {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth + 24) ?? 0;
    let scrollSize = cardList?.scrollWidth ?? 0;
    let scrollPosition = cardList?.scrollLeft ?? 0;

    console.log({ scrollSize, scrollPosition, cardSize});

    if (scrollPosition >= cardSize) {
      cardList?.scrollTo({ left: scrollPosition - cardSize })
    }
  }
  const onClickRight = () => {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth + 24) ?? 0;
    let scrollSize = cardList?.scrollWidth ?? 0;
    let scrollPosition = cardList?.scrollLeft ?? 0;
    console.log({ scrollSize, scrollPosition, cardSize});

    if (scrollPosition >= cardSize) {
      cardList?.scrollTo({ left: scrollPosition - cardSize })
    }
  }


  return (
    <div className={styles.homeWrapper}>
      <Spacer></Spacer>
      <Text variant="cook">All Recharge Models</Text>
      <Spacer></Spacer>
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>

      <PaginationDesktop onClickLeft={onClickLeft} onClickRight={onClickRight}/>
    </div>
  );
};
