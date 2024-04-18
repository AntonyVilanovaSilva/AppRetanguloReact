import './style.css';

function Button(props) {
  return (
    <div className="Btn" onClick={props.onClick}>
      Calcular
    </div>
  );
}

export default Button;
