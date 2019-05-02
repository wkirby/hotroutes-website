import React from "react";
import cx from "classnames";

export const ImageGrid = ({ images, className, ...props }) => {
  const classNames = cx("images", className);

  return (
    <div className={classNames} {...props}>
      {images.map((image, i) => {
        const imgSrc = typeof image === "string" ? image : image.src;
        return (
          <div className="screenshot" key={i}>
            <img src={imgSrc} className="img-fluid rounded" />
          </div>
        );
      })}
    </div>
  );
};
