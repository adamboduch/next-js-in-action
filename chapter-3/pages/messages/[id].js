import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MessageDetails({ message }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Fragment>
      <div className="container">
        <header>
          <nav>
            <h1>Message Details</h1>
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
          <section>
            <p>
              From:{" "}
              <Link href={`/friends/${message.from.name}`}>
                <a>{message.from.displayName}</a>
              </Link>
            </p>
            <p>{message.content}</p>
          </section>
          <section>
            <Link href={`/new/message/${message.from.name}`}>
              <button className="reply">Reply</button>
            </Link>
          </section>
        </main>
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
        main {
          display: flex;
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
        .reply {
          font-family: inherit;
          margin-top: 10px;
          font-weight: 500;
        }
      `}</style>
    </Fragment>
  );
}

MessageDetails.getInitialProps = async function() {
  return {
    message: {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
      from: {
        name: "beth",
        displayName: "Beth"
      }
    }
  };
};
