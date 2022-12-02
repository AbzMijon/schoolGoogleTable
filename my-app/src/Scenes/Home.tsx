import React, { useEffect, useState } from 'react'
import Card from '../Components/Card.tsx';
import { ICard } from '../types/card';

function Home() {

  const [data, setData] = useState<ICard[]>([]);

  useEffect(() => {
    setData([
      {name: 'Alian', id: 0, text: 'hello world!', price: '3.99$'},
      {name: 'Sanchez', id: 1, text: 'hello world!', price: '2.99$'}, 
      {name: 'Alex', id: 3, text: 'hello world!', price: '6.99$'}
    ])
  }, []);

  return (
    <React.Fragment>
      {data.length &&
        data.map((card:ICard) => (
          <Card name={true} id={card.id} text={card.text} price={card.price} key={card.id}/>
        ))
      }
    </React.Fragment>
  )
}

export default Home