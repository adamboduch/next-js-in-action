import React from "react";

export default function Listing5() {
  return (
    <div className="root">
      <p>Outer Paragraph</p>
      <div>
        <p>Inner Paragraph</p>
      </div>
      <style jsx>{`
        .root {
          width: 200px;
          border: solid 1px;
          text-align: center;
        }

        .root > p {
          font-size: 1.2em;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
