import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">
          <span>&#10004;</span>
        </div>
        <h2>Success!</h2>
        <p>
          Your order was sent to processing! Check your email box for further
          information.
        </p>
        <button onClick={() => navigate("/catalog")} className="btn-success">
          Go Back to Catalog
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
