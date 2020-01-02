import React from "react";
import { resolve } from "styled-jsx/css";
import Link from "../../components/Link";

const { className: newFriendClassName, styles: newFriendStyles } = resolve`
  button {
    margin-top: 10px;
  }
`;

export default function NewFriendSection() {
  return (
    <section>
      <Link
        button
        href="/new/friend"
        text="New Friend"
        className={newFriendClassName}
      />
      {newFriendStyles}
    </section>
  );
}
