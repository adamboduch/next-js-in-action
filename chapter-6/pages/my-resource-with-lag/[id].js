import Layout from "../../components/Layout";

export default function MyLaggyResource({ name }) {
  return (
    <Layout>
      <h3>{name}</h3>
    </Layout>
  );
}

MyLaggyResource.getInitialProps = ({ query }) => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve(
          {
            "123": { name: "My First Laggy Resource" },
            "456": { name: "My Second Laggy Resource" }
          }[query.id]
        ),
      2000
    );
  });
};
