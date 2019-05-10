import React from "react";

import QuestionField from "../QuestionField";

import questions from "../../static/questions";
import "./style.css";

const FormBody = ({ pageStatus }) => {
  const { prompts: promptsArray } = questions.filter(
    q => q.page === pageStatus
  )[0];

  return (
    <div className="form-body g-form">
      {promptsArray.map((p, i) => (
        <QuestionField prompt={p} pageNum={pageStatus} questionNum={i + 1} />
      ))}
    </div>
  );
};

export default FormBody;
