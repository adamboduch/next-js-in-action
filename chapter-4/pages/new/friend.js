import React from "react";
import Layout from "../../components/Layout";
import FormField from "../../components/FormField";

export default function NewFriend() {
  return (
    <Layout title="New Friend" flexDirection="column">
      <FormField>
        <label htmlFor="id">ID:</label>
        <input id="id" />
      </FormField>
      <FormField>
        <label htmlFor="name">Display Name:</label>
        <input id="name" />
      </FormField>
      <FormField>
        <button>Save</button>
      </FormField>
      <style jsx>{`
        button {
          font-family: inherit;
          font-weight: 500;
        }
      `}</style>
    </Layout>
  );
}
