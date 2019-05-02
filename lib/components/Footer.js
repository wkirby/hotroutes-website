import React from "react";
import cx from "classnames";

export const Footer = ({ className, ...props }) => {
  const classNames = cx("section", className);
  const thisYear = new Date().getFullYear();

  return (
    <footer id="footer" className={classNames} {...props}>
      <div className="container container-narrow">
        <div className="text-center">
          <small>Copyright &copy; {thisYear} SCREAMING_SNAKE_GAMES</small>
        </div>
      </div>
    </footer>
  );
};
