import React, { Fragment } from "react";

export default function FormField({ children }) {
  return (
    <Fragment>
      <div>{children}</div>
      <style jsx>{`
        div {
          width: 300px;
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
      `}</style>
    </Fragment>
  );
}
