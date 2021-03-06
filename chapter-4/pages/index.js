import React from "react";
import Layout from "../components/Layout";
import MessageList from "../components/MessageList";
import FriendList from "../components/FriendList";

export default function Home({ messages, friends }) {
  return (
    <Layout title="Home">
      <section>
        <h2>Latest Messages</h2>
        <MessageList messages={messages} />
      </section>
      <section>
        <h2>Online</h2>
        <FriendList friends={friends} />
      </section>
    </Layout>
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
