import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function FriendDetails({ friend }) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Fragment>
      <div className="container">
        <header>
          <nav>
            <h1>Friend Details</h1>
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
            <h2>Info</h2>
            <p>
              Name: <strong>{friend.displayName}</strong>
            </p>
            <p>{friend.seen}</p>
            <p>{friend.friendSince}</p>
            <h2>Latest Messages</h2>
            <ul className="itemList">
              {friend.latestMessages.map(message => (
                <li className="messageItem">
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
            <Link href={`/new/message/${friend.name}`}>
              <button className="newMessage">New Message</button>
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
        .newMessage {
          font-family: inherit;
          margin-top: 10px;
          font-weight: 500;
        }
      `}</style>
    </Fragment>
  );
}

FriendDetails.getInitialProps = async function() {
  return {
    friend: {
      name: "josh",
      displayName: "Josh",
      friendSince: "Friends since 2014",
      seen: "Last seen 3 hours ago",
      latestMessages: [
        {
          id: 1,
          sent: "1 hour ago",
          content: "Nope. I don't have it.",
          from: { name: "josh", displayName: "Josh" }
        },
        {
          id: 2,
          sent: "2 minutes ago",
          content: "Did you see this?",
          from: { name: "josh", displayName: "Josh" }
        }
      ]
    }
  };
};
