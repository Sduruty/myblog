import React from "react";

const Image = (props) => {
  return (
    <>
      <div className="content-img">
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
    </>
  );
};

export default Image;