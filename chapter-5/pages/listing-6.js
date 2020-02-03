import React, { Fragment } from "react";

export default function MyPage() {
  return (
    <Fragment>
      <p>First Paragraph</p>
      <p>Second Paragraph</p>
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
      `}</style>
      <style jsx>{`
        p::first-letter {
          font-size: 130%;
        }
      `}</style>
    </Fragment>
  );
}
