import React from "react";
import { Icon } from "./Icon";
import cx from "classnames";

export const LinkList = ({ links, className, target="_blank", ...props }) => {
  const classNames = cx("list-inline", className);

  return (
    <ul className={classNames} {...props}>
      {links.map((l, i) => {
        return (
          <li className="list-inline-item" key={i}>
            <a href={l.href} target={target}>
              {l.icon && <Icon className={`${l.icon} mr-1`} />}
              {l.label && l.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
