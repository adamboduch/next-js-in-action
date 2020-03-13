import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import Layout from "../components/Layout";
import StatefulLink from "../components/StatefulLink";
import ActiveLink from "../components/ActiveLink";

export default function Home() {
  const [enabled, setEnabled] = useState(true);
  const [name, setName] = useState("");
  const [prefetchVisibility, setPrefetchVisibility] = useState(false);

  function onSearchClick() {
    Router.push({ pathname: "/search", query: { name, enabled } });
  }

  return (
    <Layout>
      <section>
        <h2>Simple Resource Link</h2>
        <Link href="/my-resource/[id]" as="/my-resource/123">
          <a>My Resource</a>
        </Link>
      </section>
      <section>
        <h2>Multiple URL Parameters</h2>
        <label>
          Enabled
          <input
            type="checkbox"
            onChange={target => {
              setEnabled(target.checked);
            }}
            checked={enabled}
          ></input>
        </label>
        <label>
          Name contains
          <input
            onChange={({ target }) => {
              setName(target.value);
            }}
            value={name}
          ></input>
        </label>
        <button onClick={onSearchClick}>Search</button>
        <p>
          <Link href={{ pathname: "/search", query: { enabled: true } }}>
            <a>All Enabled</a>
          </Link>
        </p>
      </section>
      <section>
        <h2>Link State</h2>
        <p>
          <StatefulLink
            href="/my-resource-with-lag/[id]"
            as="/my-resource-with-lag/123"
            title="My First Laggy Resource"
          />
        </p>
        <p>
          <StatefulLink
            href="/my-resource-with-lag/[id]"
            as="/my-resource-with-lag/456"
            title="My Second Laggy Resource"
          />
        </p>
      </section>
      <section>
        <h2>Non-Existent Resources</h2>
        <p>
          <Link
            href="/my-resource-with-constraints/[id]"
            as="/my-resource-with-constraints/abc"
          >
            <a>Non-existent Resource</a>
          </Link>
        </p>
        <p>
          <Link
            href="/my-resource-with-constraints/[id]"
            as="/my-resource-with-constraints/123"
          >
            <a>Resource That Exists</a>
          </Link>
        </p>
      </section>
      <section>
        <h2>Active Links</h2>
        <p>
          <ActiveLink href="/" title="Home" />
        </p>
        <p>
          <ActiveLink
            href="/page-with-active-links"
            title="Page with Active Links"
          />
        </p>
      </section>
      <section>
        <h2>Prefetching Visible Page Components</h2>
        <button onClick={() => setPrefetchVisibility(true)}>Show Links</button>
        {prefetchVisibility ? (
          <div>
            <Link href="/prefetched-page">
              <a>Prefetched Page</a>
            </Link>
          </div>
        ) : null}
      </section>
      <style jsx>{`
        a {
          text-decoration: none;
          color: unset;
          transition: color 0.2s ease;
        }
        a:hover {
          color: gray;
        }
        label {
          margin: 2px;
        }
      `}</style>
    </Layout>
  );
}
