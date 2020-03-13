import Error from "next/error";
import Layout from "../../components/Layout";

export default function MyResource({ error, name }) {
  if (error) {
    return <Error {...error} />;
  } else {
    return (
      <Layout>
        <h3>{name}</h3>
      </Layout>
    );
  }
}

function notFound(id) {
  return {
    error: {
      statusCode: 404,
      title: `My Resource with ID "${id}" could not be found`
    }
  };
}

function getResource(id) {
  return new Map([
    [123, { name: "My First Resource" }],
    [456, { name: "My Second Resource" }]
  ]).get(id);
}

MyResource.getInitialProps = ({ query }) => {
  const id = Number(query.id);

  if (Number.isNaN(id)) {
    return notFound(query.id);
  }

  const resource = getResource(id);

  if (resource === undefined) {
    return notFound;
  }

  return resource;
};
