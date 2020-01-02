import React from "react";
import Layout from "../../components/Layout";
import MessageList from "../../components/MessageList";

export default function Messages({ messages }) {
  return (
    <Layout title="Messages">
      <MessageList messages={messages} />
    </Layout>
  );
}

Messages.getInitialProps = async function() {
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
    ]
  };
};
