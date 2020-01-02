import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import DetailSection from "./DetailSection";
import NewMessageSection from "./NewMessageSection";

export default function FriendDetails({ friend }) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Layout title="Friend Details">
      <DetailSection friend={friend} />
      <NewMessageSection friend={friend} />
    </Layout>
  );
}

FriendDetails.getInitialProps = async function() {
  return {
    friend: {
      name: "josh",
      displayName: "Josh",
      friendSince: "Friends since 2014",
      seen: "Last seen 3 hours ago",
      latestMessages: [
        {
          id: 1,
          sent: "1 hour ago",
          content: "Nope. I don't have it.",
          from: { name: "josh", displayName: "Josh" }
        },
        {
          id: 2,
          sent: "2 minutes ago",
          content: "Did you see this?",
          from: { name: "josh", displayName: "Josh" }
        }
      ]
    }
  };
};
