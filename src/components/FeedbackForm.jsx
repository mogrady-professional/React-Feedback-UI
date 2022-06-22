import { useState } from "react";
import Card from "./shared/Card";
import React from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  // This validation will check input value (not state as state won't be the updated value until the next render of the component)
  // target.value is the value of the input field
  const handleTextChange = ({ target: { value } }) => {
    //  get value
    // Check if the text is empty
    if (value === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length <= 10) {
      // Check if the text is less than 10 characters
      setMessage("Please enter at least 10 characters");
      setBtnDisabled(true);
    } else {
      // If the text is more than 10 characters, enable the button
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the text is empty
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      handleAdd(newFeedback);
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button version="primary" type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
