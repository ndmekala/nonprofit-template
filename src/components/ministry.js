import * as React from "react";

const Ministry = (props) => {

// needs margin (+ big pics) but off to a good start

  return (
    <div className="my-4 flex flex-wrap">
      <div className="w-full sm:w-1/4">
        <img src={props.imgSrc} alt={props.title + ' image'} className="w-full"/>
      </div>
      <div className="p-4 w-full sm:w-3/4">
        <h2 className="text-xl">
          {props.title}
        </h2>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Ministry;