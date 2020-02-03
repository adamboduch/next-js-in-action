import React, { Fragment } from "react";

export default function Listing1() {
  return (
    <Fragment>
      <p>First Paragraph</p>
      <p>Second Paragraph</p>
      <span>A span element</span>
      <style jsx>{`
        p:first-of-type {
          font-weight: bold;
        }
        p:last-of-type {
          font-style: italic;
        }
      `}</style>
    </Fragment>
  );
}
