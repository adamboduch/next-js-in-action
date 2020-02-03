import React, { useState, Fragment } from "react";

function FirstComponent({ visible, setVisible }) {
  return (
    <Fragment>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Remove" : "Show"}
      </button>
      <style jsx>{`
        button {
          width: 75px;
        }
      `}</style>
    </Fragment>
  );
}

function SecondComponent() {
  return (
    <Fragment>
      <p>Second Component</p>
      <style jsx>{`
        p {
          font-style: italic;
        }
      `}</style>
    </Fragment>
  );
}

export default function MyPage() {
  const [visible, setVisible] = useState(true);

  return (
    <Fragment>
      <FirstComponent {...{ visible, setVisible }} />
      {visible && <SecondComponent />}
    </Fragment>
  );
}
