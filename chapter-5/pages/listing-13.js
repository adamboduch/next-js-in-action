import React, { Fragment } from "react";
import Link from "next/link";
import MyComponent from "../components/MyComponent";

export default function MyPage() {
  return (
    <Fragment>
      <MyComponent />
      <Link href="/listing-12">
        <a>Previous Page</a>
      </Link>
    </Fragment>
  );
}
