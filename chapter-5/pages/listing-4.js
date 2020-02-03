import React, { Fragment } from "react";

export default function Listing4() {
  return (
    <Fragment>
      <p className="bold">Outter Paragraph</p>
      <div>
        <p>Second Paragraph</p>
      </div>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }
      `}</style>
    </Fragment>
  );
}
