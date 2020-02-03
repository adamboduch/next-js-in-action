import React, { Fragment } from "react";

export default function Listing2() {
  return (
    <Fragment>
      <p>First Paragraph</p>
      <p>Second Paragraph</p>
      <span>A span element</span>
      <style jsx>{`
        p:first-of-type {
          letter-spacing: 1.1em;
        }
        p:last-of-type {
          text-decoration: line-through;
        }
      `}</style>
    </Fragment>
  );
}
