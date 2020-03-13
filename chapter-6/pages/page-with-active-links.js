import Layout from "../components/Layout";
import ActiveLink from "../components/ActiveLink";

export default function PageWithActiveLinks() {
  return (
    <Layout>
      <p>
        <ActiveLink href="/" title="Home" />
      </p>
      <p>
        <ActiveLink
          href="/page-with-active-links"
          title="Page with Active Links"
        />
      </p>
    </Layout>
  );
}
