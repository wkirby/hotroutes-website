import React from "react";
import cx from "classnames";
export const Section = ({ className, children, ...props }) => {
  const classes = cx(
    "section",
    "d-flex flex-row justify-content-center align-items-center",
    className
  );
  return (
    <section className={classes} {...props}>
      <div className="section-body">
        {children}
      </div>
    </section>
  );
};
