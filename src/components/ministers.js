import * as React from "react";

const Ministers = (props) => {

  return (
    <div className="my-4 flex flex-wrap">
      {props.children}
    </div>
  );
};

export default Ministers;