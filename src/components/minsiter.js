import * as React from "react";

const Minister = (props) => {

// needs margin (+ big pics) but off to a good start

  return (
    <div className="my-4">
        <h2>{props.title}</h2>
        <img src={props.imgSrc} className="w-full"/>
    </div>
  );
};

export default Minister;