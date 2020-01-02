import React, { Fragment } from "react";
import NextLink from "next/link";

export default function Link({ href, text, button, className }) {
  return (
    <Fragment>
      <NextLink href={href}>
        {button ? (
          <button className={className}>{text}</button>
        ) : (
          <a className={className}>{text}</a>
        )}
      </NextLink>
      <style jsx>{`
        a {
          text-decoration: none;
          color: unset;
          transition: color 0.2s ease;
        }
        a:hover {
          color: gray;
        }
        button {
          font-family: inherit;
          font-weight: 500;
        }
      `}</style>
    </Fragment>
  );
}
