import React from "react";
import { Section } from "./Section";
import cx from "classnames";

export const Footer = ({ className, ...props }) => {
  const classNames = cx('footer', className);
  const thisYear = new Date().getFullYear();

  return (
    <footer id="footer" className={classNames} {...props}>
      <Section className="text-center">
        <small>Copyright &copy; {thisYear} SCREAMING_SNAKE_GAMES</small>
      </Section>
    </footer>
  );
};
