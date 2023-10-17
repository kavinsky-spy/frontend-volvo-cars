import { Block, Card, CardContent, Spacer, Text } from "vcc-ui"
import { Car } from "../types/car.interface"

interface CardProps {
    car: Car
}

export function CarCard({ car }: CardProps) {
    return (
        <Card href={"/learn/" + car.id}>
            <CardContent>
                <Text variant="bates">{car?.bodyType}</Text>
                <Block>
                    <Text variant="amundsen">{car?.modelName}</Text>
                    <Text variant="bates" subStyle="inline-link">{car?.modelType}</Text>
                </Block>


                <Spacer />
                <Text>This is a link that will take you somewhere</Text>
            </CardContent>
        </Card>
    )
}