import React from "react";
import Image from "./Image";

const Content = (props) => {
  return (
    <>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.titleDesc}</p>
        <Image imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
        <p>{props.text}</p>
      </div>
    </>
  );
};
export default Content;