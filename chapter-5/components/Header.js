import React, { memo } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';

function Header({ text, ...props }) {
  return (
    <div>
      <Head>
        <title>Expendisure - {text}</title>
      </Head>
      <h1>{text}</h1>
      <Navigation {...props} />
      <style global jsx>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue';

          margin: 30px;
        }
      `}</style>
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}

export default memo(Header);
