import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  const news = useLoaderData();
  const {
    _id,
    author,
    category_id,
    details,
    image_url,
    rating,
    title,
    total_view,
  } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">Category News</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
