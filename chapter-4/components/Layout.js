import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "./Navigation";

export default function Layout({ children, title, flexDirection }) {
  return (
    <Fragment>
      <Head>
        <title>Messenger - {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <header>
          <h1>{title}</h1>
          <Navigation />
        </header>
        <main>{children}</main>
      </div>
      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
      `}</style>
      <style jsx>{`
        .container {
          max-width: 65rem;
          margin: 1.5rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        h1 {
          margin: unset;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          color: #fff;
          background-color: #333;
        }
        main {
          display: flex;
          justify-content: space-between;
          flex-direction: ${flexDirection};
        }
      `}</style>
    </Fragment>
  );
}

Layout.defaultProps = {
  flexDirection: "row"
};
