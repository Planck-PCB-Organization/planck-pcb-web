import Section from "../../../components/Section";
import Card from "../../../components/Card";
import './Products.scss';

const cards = [
  {
    id: 1,
    title: "PCB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ipsa porro dolorem. Maiores tempora magni numquam suscipit qui.",
  },
  {
    id: 2,
    title: "3d Baskı",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ipsa porro dolorem. Maiores tempora magni numquam suscipit qui.",
  },
  {
    id: 2,
    title: "3d Baskı",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ipsa porro dolorem. Maiores tempora magni numquam suscipit qui.",
  },
];

const Products = () => {
  return (
    <Section className="card-list-container" id="section-3">
      {cards.map((card) => (
        <Card key={card.id}>
          <img
              alt="carousel"
              src={`/1.jpg`}
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>{card.title}</h1>
          <br></br>
          <br></br>
          <p>{card.description}</p>


        </Card>
      ))}
    </Section>
  );
};

export default Products;
