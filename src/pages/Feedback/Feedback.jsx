import { useState } from "react";
import "./Feedback.css";

const FeedbackPage = () => {
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (feedback.trim() !== "") {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFeedback("");
        }, 3000);
      }
    };
  
    return (
      <div className="feedback-wrapper">hii
        {/* <div className="feedback-container">
          <h2>Give Your Feedback</h2>
          <p>We value your opinion! Let us know how we can improve.</p>
          <form onSubmit={handleSubmit}>
            <textarea
              className="feedback-input"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
            ></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
          {submitted && <p className="success-message">Thanks for your feedback!</p>}
        </div> */}
      </div>
    );
  };
  
  export default FeedbackPage;
