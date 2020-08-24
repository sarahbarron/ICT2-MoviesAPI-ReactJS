import React from "react";
import "./movieReview.css";

export default ({ review }) => {
  try {
    return (
      <div id="full-review">
        <p id="author">Review By: {review.author} </p>
        <p>{review.content} </p>
      </div>
    );
  } catch (e) {
    console.log("Movie Review Error: ", e);
    return <div className="error-msg">Movie Review unavailable</div>;
  }
};
