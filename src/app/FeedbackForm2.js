export default function FeedbackForm() {
  /*No necesitas que se guarde el estado para 
  otros renderizados, por ello la variable de estado
  está eliminada*/

  function handleClick() {
    let name = prompt('¿Cuál es tu nombre?');
    alert(`Hola, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Saludar
    </button>
  );
}
