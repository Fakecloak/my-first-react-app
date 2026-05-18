import { useState } from 'react';

export default function SyncedInputs() {
    const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input label="First input" onChange={handleChange} value={text} />
      <Input label="Second input" onChange={handleChange} value={text} />
    </>
  );
}

function Input(props) {
  

  return (
    <label>
      {props.label}
      {' '}
      <input
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  );
}
