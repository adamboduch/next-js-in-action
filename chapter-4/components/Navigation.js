import React, { Fragment } from "react";
import { resolve } from "styled-jsx/css";
import Link from "./Link";

const { className: linkClassName, styles: linkStyles } = resolve`
  a {
    color: #fff;
  }
  a:hover {
    color: #68b5fb;
  }
`;

export default function Navigation() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link href="/" text="Home" className={linkClassName} />
          </li>
          <li>
            <Link href="/messages" text="Messages" className={linkClassName} />
          </li>
          <li>
            <Link href="/friends" text="Friends" className={linkClassName} />
          </li>
        </ul>
      </nav>
      <style jsx>{`
        nav ul {
          display: flex;
          list-style: none;
          margin: unset;
          padding-left: 0;
        }
        nav li {
          margin-right: 1rem;
        }
        nav li:first-child {
          margin-left: auto;
        }
      `}</style>
      {linkStyles}
    </Fragment>
  );
}
