import React, { memo } from 'react';

function Navigation({ links }) {
  return (
    <ul
      style={{
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        minWidth: 300
      }}
    >
      {links.map(link => (
        <li key={link.path}>
          <a href={link.path}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
}

Navigation.defaultProps = {
  links: [
    { path: '/', text: 'Home' },
    { path: '/expense', text: 'New Expense' },
    { path: '/reports', text: 'Reports' },
    { path: '/history', text: 'History' }
  ]
};

export default memo(Navigation);
