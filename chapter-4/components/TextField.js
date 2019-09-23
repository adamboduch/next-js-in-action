import React, { memo } from 'react';
import Field from './Field';

function TextField({ id, label }) {
  return (
    <Field id={id} label={label}>
      <input id={id} />
    </Field>
  );
}

export default memo(TextField);
