import React from "react";
import Layout from "../../components/Layout";
import FriendListSection from "./FriendListSection";
import NewFriendSection from "./NewFriendSection";

export default function Friends({ friends }) {
  return (
    <Layout title="Friends">
      <FriendListSection friends={friends} />
      <NewFriendSection />
    </Layout>
  );
}

Friends.getInitialProps = async function() {
  return {
    friends: [
      { name: "josh", displayName: "Josh", seen: "last seen 12 minutes ago" },
      { name: "beth", displayName: "Beth", seen: "last seen 2 hours ago" },
      { name: "ryan", displayName: "Ryan", seen: "online now" }
    ]
  };
};
