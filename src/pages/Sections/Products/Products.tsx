import React from "react";
import Section from "../../../components/Section";
import Card from "../../../components/Card";

const cards = [
  {
    id: 1,
    title: "PCB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ipsa porro dolorem. Maiores tempora magni numquam suscipit qui.",
  },
  {
    id: 2,
    title: "PCB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ipsa porro dolorem. Maiores tempora magni numquam suscipit qui.",
  },
  {
    id: 3,
    title: "PCB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ipsa porro dolorem. Maiores tempora magni numquam suscipit qui.",
  },
];

const Products = () => {
  return (
    <Section id="section-3">
      {cards.map((card) => (
        <Card key={card.id}>
          <h1>{card.title}</h1>
          <p>{card.description}</p>
        </Card>
      ))}
    </Section>
  );
};

export default Products;
