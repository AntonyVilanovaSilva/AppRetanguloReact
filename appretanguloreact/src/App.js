import { useState } from 'react';
import './App.css';
import Button from './components/Button/Index';
import Input from './components/Input';
import Label from './components/Label';

function App() {

  const [valor1,setValor1] = useState(0);
  const [valor2,setValor2] = useState(0);
  const [resultado,setResultado] = useState(0);

  function calcularResultado(){
    console.log('Valor1: '+valor1)
    setResultado(parseFloat(valor1)*parseFloat(valor2));
  }

  return (
    <div className="App">
      <Label legenda="Valor 1"/>
      <Input onChange={(e)=>setValor1(e.target.value)}/>
      <Label legenda="Valor 2"/>
      <Input onChange={(e)=>setValor2(e.target.value)}/>
     <Button onClick={calcularResultado}/>
     <Label legenda={resultado}/>
    </div>
  );
}

export default App;
