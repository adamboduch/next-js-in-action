import React, { memo } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';

function Header({ text, ...props }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Head>
        <title>Expendisure - {text}</title>
      </Head>
      <h1>{text}</h1>
      <Navigation {...props} />
    </div>
  );
}

export default memo(Header);
