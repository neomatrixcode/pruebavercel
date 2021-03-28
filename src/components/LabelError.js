import React from "react";

const Labelerror = (props) => {
  let namefield = props.children.props.name || "";
  return (
    <>
      {props.children}
      <p className="text-red-500 text-xs italic font-bold">
        {props.error[namefield]?.message}
      </p>
    </>
  );
};

export default Labelerror;
