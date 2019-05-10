import React from "react";

import "./style.css";

const QuestionField = ({ pageNum, prompt, questionNum }) => {
  const { ask, options } = prompt;

  return (
    <div className="question-block">
      <div className="question-line">
        <span className="question-ask">{ask}</span>
        <select
          className="answer-select"
          name={`page-${pageNum}-ques-${questionNum}`}
        >
          <option value="null">Select One</option>
          {options.map(o => (
            <option value={o}>{o}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default QuestionField;
