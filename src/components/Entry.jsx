import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emojImg}
        </span>
        <span>{props.emojName}</span>
      </dt>
      <dd>{props.emojMeaning}</dd>
    </div>
  );
}

export default Entry;
