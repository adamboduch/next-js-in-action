import React, { Fragment } from "react";
import Link from "next/link";
import Messages from "../messages";

export default function Friends({ friends }) {
  return (
    <Fragment>
      <div className="container">
        <header>
          <nav>
            <h1>Friends</h1>
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
            <ul className="itemList">
              {friends.map(friend => (
                <li className="friendItem">
                  <Link href={`/friends/${friend.name}`}>
                    <a>{friend.displayName}</a>
                  </Link>
                  <div>{friend.seen}</div>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <Link href="/new/friend">
              <button className="newFriend">New Friend</button>
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
        .itemList {
          list-style: none;
          margin: unset;
          padding-left: 0;
        }
        .friendItem {
          width: 350px;
          display: flex;
          justify-content: space-between;
        }
        .friendItem div:last-of-type {
          font-size: small;
        }
        .newFriend {
          font-family: inherit;
          margin-top: 10px;
          font-weight: 500;
        }
      `}</style>
    </Fragment>
  );
}

Friends.getInitialProps = async function() {
  return {
    friends: [
      { name: "josh", displayName: "Josh", seen: "last seen 12 minutes ago" },
      { name: "beth", displayName: "Beth", seen: "last seen 2 hours ago" },
      { name: "ryan", displayName: "Ryan", seen: "online now" }
    ]
  };
};
