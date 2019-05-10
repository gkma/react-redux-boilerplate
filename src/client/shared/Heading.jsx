import React from "react";

const Heading = ({ headline, subHeadline }) => {
  return (
    <React.Fragment>
      <h1>{headline}</h1>
      <p>{subHeadline}</p>
    </React.Fragment>
  );
};

export default Heading;
