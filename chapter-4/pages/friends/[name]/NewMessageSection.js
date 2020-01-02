import React from "react";
import { resolve } from "styled-jsx/css";
import Link from "../../../components/Link";

const { className: newMessageClassName, styles: newMessageStyles } = resolve`
  button {
    margin-top: 10px;
  }
`;

export default function NewMessageSection({ friend }) {
  return (
    <section>
      <Link
        button
        href={`/new/message/${friend.name}`}
        text="New Message"
        className={newMessageClassName}
      />
      {newMessageStyles}
    </section>
  );
}
