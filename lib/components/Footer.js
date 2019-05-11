import React from "react";
import { Section } from "./Section";
import cx from "classnames";
import { LinkList } from "./LinkList";

export const Footer = ({ className, ...props }) => {
  const classNames = cx("footer", className);
  const thisYear = new Date().getFullYear();

  const footerLinks = [
    {
      href: "/tos",
      label: "Terms of Service"
    },
    {
      href: "/privacy",
      label: "Privacy Policy"
    }
  ];

  return (
    <footer id="footer" className={classNames} {...props}>
      <Section className="has-background has-overlay text-center small text-white" style={{ backgroundImage: 'url(/static/img/field.png)' }}>
        <p>Copyright &copy; {thisYear} SCREAMING_SNAKE_GAMES</p>
        <LinkList links={footerLinks} target='_self' />
      </Section>
    </footer >
  );
};
