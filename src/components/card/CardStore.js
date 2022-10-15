import React, { useState } from "react";
import CardProduct from "../../components/card/CardProduct";
import DummyData from "../../DummyData.json";
import Badge from "react-bootstrap/Badge";
import CartImg from "../lib/assets/cart-1956912-1650878.png";

const CardStore = () => {
  console.log(DummyData);

  const [count, setCount] = useState(
    localStorage.getItem("count") === null
      ? 0
      : parseInt(localStorage.getItem("count"))
  );

  React.useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  return (
    <div className="Card-Container">
      {DummyData.map((el, i) => {
        return (
          <div key={i}>
            <CardProduct
              CardImage={el.CardImage}
              CardTitle={el.CardTitle}
              CardText={el.CardText}
              count={count}
              setCount={setCount}
            />
          </div>
        );
      })}
      <div className="Badge-container">
        <img src={CartImg} alt="Cart" width="50px" height="50px" />
        <Badge bg="primary" className="Badge">
          {count}
        </Badge>
      </div>
    </div>
  );
};

export default CardStore;
// ButtonText = "Add to Cart";
// ButtonTexts = "Buy Now";
