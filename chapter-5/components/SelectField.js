import React, { memo } from 'react';
import Field from './Field';

function SelectField({ id, label, options }) {
  return (
    <Field id={id} label={label}>
      <select id={id}>
        {options.map(option => (
          <option key={option.name}>{option.name}</option>
        ))}
      </select>
    </Field>
  );
}

export default memo(SelectField);
