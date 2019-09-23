import React, { memo } from 'react';

function Field({ id, label, children }) {
  const fieldStyle = {
    margin: 4,
    maxWidth: 250,
    display: 'flex',
    justifyContent: 'space-between'
  };

  return (
    <div style={fieldStyle}>
      <label htmlFor={id}>{label}:</label>
      {children}
    </div>
  );
}

export default memo(Field);
