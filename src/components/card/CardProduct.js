import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProduct = ({
  CardImage,
  CardTitle,
  CardText,
  ButtonText = "Add to Cart",
  ButtonTexts = "Buy Now",
  count,
  setCount,
}) => {
  const addProductOnCart = () => {
    setCount(count + 1);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={CardImage} className="img" />
      <Card.Body>
        <Card.Title>{CardTitle}</Card.Title>
        <Card.Text>{CardText}</Card.Text>
        <div className="button-container">
          <Button variant="primary" onClick={addProductOnCart}>
            {ButtonText}
          </Button>
          <Button variant="warning" style={{ color: "white" }}>
            {ButtonTexts}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
