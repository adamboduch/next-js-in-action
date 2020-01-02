import React, { Fragment } from "react";
import Link from "./Link";

export default function MessageList({ messages }) {
  return (
    <Fragment>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <div>{message.content}</div>
            <div>
              <Link
                href={`/friends/${message.from.name}`}
                text={message.from.displayName}
              />{" "}
              <Link href={`/messages/${message.id}`} text={message.sent} />
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          margin: unset;
          padding-left: 0;
        }
        li {
          width: 450px;
          display: flex;
          justify-content: space-between;
        }
        li a:last-of-type {
          font-size: small;
        }
        li div:last-of-type {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 140px;
        }
      `}</style>
    </Fragment>
  );
}
