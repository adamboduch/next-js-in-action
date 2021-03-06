import React, { Fragment } from "react";
import Link from "next/link";

export default function Home({ messages, friends }) {
  return (
    <Fragment>
      <div className="container">
        <header>
          <nav>
            <h1>Home</h1>
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
            <h2>Latest Messages</h2>
            <ul className="itemList">
              {messages.map(message => (
                <li key={message.id} className="messageItem">
                  <div>{message.content}</div>
                  <div>
                    <Link href={`/friends/${message.from.name}`}>
                      <a>{message.from.displayName}</a>
                    </Link>{" "}
                    <Link href={`/messages/${message.id}`}>
                      <a>{message.sent}</a>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Online</h2>
            <ul className="itemList">
              {friends.map(friend => (
                <li key={friend.name}>
                  <Link href={`/friends/${friend.name}`}>
                    <a>{friend.displayName}</a>
                  </Link>
                </li>
              ))}
            </ul>
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
        nav h1 {
          margin: unset;
        }
        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
        .itemList {
          list-style: none;
          margin: unset;
          padding-left: 0;
        }
        .messageItem {
          width: 400px;
          display: flex;
          justify-content: space-between;
        }
        .messageItem a:last-of-type {
          font-size: small;
        }
        .messageItem div:last-of-type {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 120px;
        }
      `}</style>
    </Fragment>
  );
}

Home.getInitialProps = async function() {
  return {
    messages: [
      {
        id: 1,
        sent: "2 minutes ago",
        content: "Did you see this?",
        from: { name: "josh", displayName: "Josh" }
      },
      {
        id: 2,
        sent: "1 hour ago",
        content: "I can't tell if it's on or not...",
        from: { name: "beth", displayName: "Beth" }
      },
      {
        id: 3,
        sent: "3 hours ago",
        content: "You don't need it for another week?",
        from: { name: "ryan", displayName: "Ryan" }
      }
    ],
    friends: [
      { name: "beth", displayName: "Beth" },
      { name: "ryan", displayName: "Ryan" }
    ]
  };
};
