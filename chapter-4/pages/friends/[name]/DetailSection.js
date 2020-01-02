import React from "react";
import MessageList from "../../../components/MessageList";

export default function DetailSection({ friend }) {
  return (
    <section>
      <h2>Info</h2>
      <p>
        Name: <strong>{friend.displayName}</strong>
      </p>
      <p>{friend.seen}</p>
      <p>{friend.friendSince}</p>
      <h2>Latest Messages</h2>
      <MessageList messages={friend.latestMessages} />
    </section>
  );
}
