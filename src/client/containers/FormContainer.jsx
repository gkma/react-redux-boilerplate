import React, { useState } from "react";

// !-- IMPORT COMPONENTS --! //
import FormHeader from "../components/FormHeader";
import FormBody from "../components/FormBody";

const FormContainer = () => {
  const [pageStatus, setPageStatus] = useState(1);
  const [formStatus, setFormStatus] = useState({
    1: false,
    2: false,
    3: false
  });

  return (
    <div className="form-container">
      <FormHeader pageStatus={pageStatus} />
      <FormBody pageStatus={pageStatus} />
    </div>
  );
};

export default FormContainer;
