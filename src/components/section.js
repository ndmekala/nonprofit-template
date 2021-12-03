import * as React from "react";

const Section = (props) => {

// needs margin (+ big pics) but off to a good start
// needs a real alt

  return (
    <div className="my-4 flex flex-wrap">
      <div className="w-full sm:w-1/4">
        <img src={props.imgSrc} className="w-full"/>
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

export default Section;