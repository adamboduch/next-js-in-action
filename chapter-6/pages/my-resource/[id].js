export default function MyResource({ name }) {
  return <h3>{name}</h3>;
}

MyResource.getInitialProps = ({ query }) => {
  return {
    "123": { name: "My First Resource" },
    "456": { name: "My Second Resource" }
  }[query.id];
};
