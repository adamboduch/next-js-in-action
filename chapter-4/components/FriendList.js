import React, { Fragment } from "react";
import Link from "./Link";

export default function FriendList({ friends }) {
  return (
    <Fragment>
      <ul>
        {friends.map(friend => (
          <li key={friend.name}>
            <Link href={`/friends/${friend.name}`} text={friend.displayName} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          margin: unset;
          padding-left: 0;
        }
      `}</style>
    </Fragment>
  );
}
