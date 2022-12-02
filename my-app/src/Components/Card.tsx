import React, { FC, useState } from 'react'
import { ICard } from '../types/card';

interface CardProps {
    name: string,
    id: number | string,
    text: string,
    price: string | number;
}

const Card: FC<CardProps> = ({name, id, text, price}) => {

    const clickHandler = (e:React.MouseEvent<HTMLParagraphElement>) => {
        console.log('clicked!');
    }
    
    const [value, setValue] = useState<boolean>(false)
    return (
        <p onClick={clickHandler}>{name} with price: {price} have a text: ${text}</p>
    )
}

export default Card