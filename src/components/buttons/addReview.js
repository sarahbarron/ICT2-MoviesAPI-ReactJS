import React from "react";
import { Link } from "react-router-dom";

const ReviewButton = ({ movie }) => {
  try {
    return (
      <Link
        className="btn w-100 btn-warning "
        to={{
          pathname: `/reviews/form`,
          state: {
            movie: movie,
          },
        }}
      >
        Write a Review
      </Link>
    );
  } catch (e) {
    console.log("Review Button Error: ", e);
    return <div className="error-msg">Button unavailable</div>;
  }
};

export default ReviewButton;
