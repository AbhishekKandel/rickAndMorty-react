import React from "react";

const Image = ({ url, imageName }) => {
  return <img className="image" src={url} alt={imageName} />;
};

export default Image;
