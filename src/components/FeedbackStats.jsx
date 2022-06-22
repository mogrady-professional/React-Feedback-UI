import PropTypes from "prop-types";
import React from "react";

function FeedbackStats({ feedback }) {
  //  Calculate the average rating
  const average = Math.round(
    feedback.reduce((total, { rating }) => total + rating, 0) / feedback.length
  );

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
