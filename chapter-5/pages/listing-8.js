import React, { Fragment } from "react";

function Layout({ title, children, theme }) {
  return (
    <div className="root">
      <h1>{title}</h1>
      <main>{children}</main>
      <style jsx global>{`
        body {
          font-family: ${theme.fontFamily};
        }
      `}</style>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: ${theme.contentDirection};
        }
      `}</style>
    </div>
  );
}

function Section({ title, children, theme }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      <style jsx>{`
        h2 {
          margin-top: ${theme.section.headingMargin};
          margin-bottom: ${theme.section.headingMargin};
        }
        section {
          width: ${theme.section.width};
          border: ${theme.section.border};
          margin: ${theme.section.margin};
          padding: ${theme.section.padding};
        }
      `}</style>
    </section>
  );
}

function Button({ children, className, theme }) {
  return (
    <Fragment>
      <button className={className}>{children}</button>
      <style jsx>{`
        button {
          margin: ${theme.button.margin};
          padding: ${theme.button.padding};
          border-style: ${theme.button.borderStyle};
        }
      `}</style>
    </Fragment>
  );
}

export default function MyPage() {
  const theme = {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    contentDirection: "row",
    section: {
      headingMargin: "5px",
      width: "300px",
      border: "solid 1px",
      margin: "5px",
      padding: "3px"
    },
    button: {
      margin: "3px",
      padding: "5px",
      borderStyle: "none"
    }
  };

  return (
    <Layout title="Home" theme={theme}>
      <Section title="Section 1" theme={theme}>
        <p>Section description</p>
        <Button theme={theme}>First</Button>
        <Button theme={theme}>Button</Button>
      </Section>
      <Section title="Section 1" theme={theme}>
        <p>Section description</p>
        <Button theme={theme}>First</Button>
        <Button theme={theme}>Button</Button>
      </Section>
      <Section title="Section 1" theme={theme}>
        <p>Section description</p>
        <Button theme={theme}>First</Button>
        <Button theme={theme}>Button</Button>
      </Section>
    </Layout>
  );
}
