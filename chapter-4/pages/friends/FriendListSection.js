import React from "react";
import FriendList from "../../components/FriendList";

export default function FriendListSection({ friends }) {
  return (
    <section>
      <FriendList friends={friends} />
    </section>
  );
}
