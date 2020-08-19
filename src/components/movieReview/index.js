import React from "react";
import "./movieReview.css";

export default ({ review }) => {
  return (
    <div id="full-review">
      <p id="author">Review By: {review.author} </p>
      <p>{review.content} </p>
    </div>
  );
};
