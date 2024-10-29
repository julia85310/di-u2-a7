import { useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');

  function handleClick() {
    setName(prompt('¿Cuál es tu nombre?'));
    alert(`Hola, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Saludar
    </button>
  );
}
