import React from "react";
import cx from "classnames";
import ImageZoom from "react-medium-image-zoom";

class ZoomImage extends React.Component {
  render() {
    const { src, alt, className, style } = this.props;

    return (
      <ImageZoom
        image={{
          src,
          alt,
          className,
          style
        }}
      />
    );
  }
}

export const ImageGrid = ({ images, className, ...props }) => {
  const classNames = cx("image-grid", className);

  return (
    <div className={classNames} {...props}>
      {images.map((image, i) => {
        const imgSrc = typeof image === "string" ? image : image.src;
        return (
          <div className="screenshot" key={i}>
            <ZoomImage src={imgSrc} className="img-fluid rounded" />
          </div>
        );
      })}
    </div>
  );
};
