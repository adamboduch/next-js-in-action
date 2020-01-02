import React from "react";
import { useRouter } from "next/router";
import { resolve } from "styled-jsx/css";
import Layout from "../../components/Layout";
import Link from "../../components/Link";

const { className: replyClassName, styles: replyStyles } = resolve`
  button {
    margin-top: 10px;
  }
`;

export default function MessageDetails({ message }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="Message Details">
      <section>
        <p>
          From:{" "}
          <Link
            href={`/friends/${message.from.name}`}
            text={message.from.displayName}
          />
        </p>
        <p>{message.content}</p>
      </section>
      <section>
        <Link
          button
          href={`/new/message/${message.from.name}`}
          text="Reply"
          className={replyClassName}
        />
      </section>
      {replyStyles}
    </Layout>
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
