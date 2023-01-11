import React from "react";
import PizzaCss from "./Pizza.module.css";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  pizza: Pizza;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  return (
    <li className={PizzaCss.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <h2>{pizza.price}</h2>
    </li>
  );
};

export default Pizza;
