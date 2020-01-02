import React from "react";
import Layout from "../../../components/Layout";
import FormField from "../../../components/FormField";

export default function NewMessage() {
  return (
    <Layout title="New Message" flexDirection="column">
      <FormField>
        <label htmlFor="to">To:</label>
        <input id="to" value="Beth" readOnly />
      </FormField>
      <FormField>
        <label htmlFor="message">Message:</label>
        <textarea id="message" />
      </FormField>
      <FormField>
        <button>Send</button>
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
