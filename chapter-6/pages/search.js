import Layout from "../components/Layout";

export default function Search({ results }) {
  return (
    <Layout>
      {results.length === 0 ? <p>No results</p> : null}
      <ul>
        {results.map(result => (
          <li key={result.name}>{result.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

Search.getInitialProps = ({ query }) => {
  const name = query.name;
  const enabled = Boolean(query.enabled);

  return {
    results: [
      { name: "resource one", enabled: true },
      { name: "resource two", enabled: false },
      { name: "resource three", enabled: true },
      { name: "resource four", enabled: false }
    ].filter(
      resource =>
        resource.enabled === enabled &&
        (name ? resource.name.includes(name) : true)
    )
  };
};
