import { Flex, Link, Spacer, Text } from "vcc-ui"
import { Car } from "../types/car.interface"
import Image from "next/image"

import styles from "./../../public/css/components/CarCard.module.css";

interface CardProps {
    car: Car
}

export function CarCard({ car }: CardProps) {
    return (
        <div className={styles.cardWrapper}>

            <Text variant="bates">{car?.bodyType}</Text>
            <Flex extend={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                margin: 0
            }}>


                <Text variant="amundsen" extend={{ margin: 0, padding: 0 }}>{car?.modelName}</Text>
                <Text variant="bates" subStyle="inline-link">{car?.modelType}</Text>

            </Flex>


            <Spacer />
            <Image src={car.imageUrl} alt={car.modelName} width="250" height="200"></Image>
            <Spacer />

            <Flex extend={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>


                <Link href="https:www.volvocars.com/" arrow="right">
                    SHOP
                </Link>
                <Link href="https:www.volvocars.com/" arrow="right">
                    LEARN
                </Link>

            </Flex>

        </div>
    )
}