import React from "react";

function Section({ title, children, titleClass }) {
  return (
    <section>
      <h2 className={titleClass}>{title}</h2>
      {children}
      <style jsx>{`
        section {
          width: 300px;
          border: solid 1px;
          margin: 5px;
          padding: 3px;
        }
      `}</style>
    </section>
  );
}

export default function MyPage() {
  return (
    <div className="root">
      <Section title="First Section" titleClass="sectionTitle">
        <p>First Paragraph</p>
      </Section>
      <Section title="Second Section" titleClass="sectionTitle">
        <p>Second Paragraph</p>
      </Section>
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
      `}</style>
      <style jsx>{`
        .root :global(.sectionTitle) {
          margin-top: unset;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}
