import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h1>This is Terms nad condition page</h1>
      <>
        Go Back to <Link to="/register">Register</Link>
      </>
    </div>
  );
};

export default TermsAndCondition;
