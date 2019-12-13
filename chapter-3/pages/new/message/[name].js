import React, { Fragment } from "react";
import Link from "next/link";

export default function NewMessage() {
  return (
    <Fragment>
      <div className="container">
        <header>
          <nav>
            <h1>New Message</h1>
            <ul>
              <li>
                <Link href="/messages">
                  <a>Messages</a>
                </Link>
              </li>
              <li>
                <Link href="/friends">
                  <a>Friends</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="field">
            <label htmlFor="to">To:</label>
            <input id="to" value="Beth" readOnly />
          </div>
          <div className="field">
            <label htmlFor="message">Message:</label>
            <textarea id="message" />
          </div>
          <div className="field">
            <button className="send">Send</button>
          </div>
        </main>
      </div>
      <style jsx global>
        {`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            color: #333;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              "Helvetica Neue", Arial, Noto Sans, sans-serif,
              "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
              "Noto Color Emoji";
          }
        `}
      </style>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        a {
          text-decoration: none;
          color: unset;
          transition: color 0.2s ease;
        }
        a:hover {
          color: gray;
        }
        .container {
          max-width: 65rem;
          margin: 1.5rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        nav {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
        }
        nav ul {
          display: flex;
          list-style: none;
          margin: unset;
          padding-left: 0;
          align-items: center;
        }
        nav li {
          margin-right: 1rem;
        }
        nav li:first-child {
          margin-left: auto;
        }
        nav a {
          color: #fff;
          text-decoration: none;
        }
        nav a:hover {
          color: #68b5fb;
        }
        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
        nav h1 {
          margin: unset;
        }
        .field {
          width: 300px;
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
        .send {
          font-family: inherit;
          font-weight: 500;
        }
      `}</style>
    </Fragment>
  );
}
