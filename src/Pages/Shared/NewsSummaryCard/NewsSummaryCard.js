import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const {
    author,
    details,
    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
    _id,
  } = news;
  return (
    <div>
      <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex ">
            <Image
              src={author?.img}
              style={{ width: "60px", height: "60px" }}
              roundedCircle
            ></Image>
            <div className="ms-3">
              <p className="mb-0">{author?.name}</p>
              <p>{author?.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-3"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="bottom" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`/news/${_id}`}>read more</Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between justify-center align-items-center">
          <div className="d-flex align-items-center">
            <FaStar className="text-warning"></FaStar>
            <p className="mb-0 ms-2">{rating.number}</p>
          </div>
          <div className="d-flex align-items-center">
            <FaRegEye></FaRegEye>
            <p className="mb-0 ms-2">{total_view}</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
