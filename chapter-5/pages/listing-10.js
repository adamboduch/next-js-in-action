import React, { Fragment, createContext, useContext } from "react";

const ThemeContext = createContext();

function Layout({ title, children }) {
  const theme = useContext(ThemeContext);

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

function Section({ title, children }) {
  const theme = useContext(ThemeContext);

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

function Button({ children, className }) {
  const theme = useContext(ThemeContext);

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

export default function MyPage({ theme }) {
  return (
    <ThemeContext.Provider value={theme}>
      <Layout title="Home">
        <Section title="Section 1">
          <p>Section description</p>
          <Button>First</Button>
          <Button>Button</Button>
        </Section>
        <Section title="Section 1">
          <p>Section description</p>
          <Button>First</Button>
          <Button>Button</Button>
        </Section>
        <Section title="Section 1">
          <p>Section description</p>
          <Button>First</Button>
          <Button>Button</Button>
        </Section>
      </Layout>
    </ThemeContext.Provider>
  );
}

MyPage.getInitialProps = async function(context) {
  const theme = (context.query.theme === "demo"
    ? await import("../themes/demo")
    : await import("../themes/default-theme")
  ).default;
  return { theme };
};
