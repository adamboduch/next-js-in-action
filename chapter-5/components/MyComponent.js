import React, { Fragment } from "react";

export default function MyComponent() {
  return (
    <Fragment>
      <p>My Component</p>
      <style jsx>{`
        p {
          font-style: italic;
        }
      `}</style>
    </Fragment>
  );
}
