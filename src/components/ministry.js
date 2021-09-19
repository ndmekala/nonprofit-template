import * as React from "react";

const Ministry = (props) => {

  return (
    <div className="flex">
    {/* OR GRID ?? Idea: use index % 2 to check if even, order (using something like flex order) conditionally based on whether its even or not. result: alternating back and forth image on one side or other*/}
    <div>
    <img src={props.imgSrc} alt={props.imgAlt}/>
    </div>
    <div>
    <h2 className="text-xl">{props.title}</h2>
    <p>{props.children}</p>
    </div>
    </div>
  );
};

export default Ministry;