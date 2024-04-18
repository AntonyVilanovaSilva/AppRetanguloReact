import './style.css';

function Input(props) {
  return (
    <div className="Input">
    <input onChange={props.onChange}/>
    </div>
  );
}

export default Input;
