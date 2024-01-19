import {  useState } from "react";
import { FiSearch } from "react-icons/fi"; /* Biblioteca de React - Icons */
import Input from "./Components/Input";

function App() {
 
  const [ input , setInput] = useState('')   /* hook para monitorar o input */
  const [ dadosCep , setDadosCep] = useState({}) /* hook para armarzenar os dados da api */


  const fetchData = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput == 9) {
      alert('Digite um CEP válido');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${input}/json/`);
      const data = await response.json();
      console.log(data);
      setDadosCep(data);
    } catch (error) {
      alert('Número de CEP inválido');
      setInput('');
    }
  };

  return (
    <>
      <div className="Container">
          <h1>Buscador De CEP</h1>

          <div className="ContainerInput">

              <Input
              type='text'
              placeholder="Digite Apenas Numero"
              value={input}
              onChange={(ev) => setInput(ev.target.value)}
              />

               <button className="ButtonSearch" onClick={() => fetchData() }>
                <FiSearch/>
              </button>

         </div>

         <main className="main">

                {dadosCep.cep ? (
            <>
              <h2>{dadosCep.cep}</h2>
              <span>{dadosCep.logradouro}</span>
              <span>{dadosCep.ddd}</span>
              <span>{dadosCep.bairro}</span>
              <span>{dadosCep.uf}</span>
            </>
          ) : (
            <p>Insira um CEP válido para obter informações.</p>
          )}

         </main>

      </div>
    </>
  )
}

export default App
