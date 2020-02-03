import React, { Fragment } from "react";

export default function Listing3() {
  return (
    <Fragment>
      <div>
        <p>First Paragraph</p>
        <p>Second Paragraph</p>
      </div>
      <span>A span element</span>
      <style jsx>{`
        div > p:first-of-type {
          font-weight: bold;
        }
        div > p:last-of-type {
          font-style: italic;
        }
      `}</style>
    </Fragment>
  );
}
