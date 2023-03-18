import Input from './Inputs';
import Botao from './Botao';
import {useState} from 'react';

const Formulario = ({props}) => {
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const url = "https://viacep.com.br/ws/"+cep+"/json";

    const handleChange = (e) => {
        if(e.target.name === "rua") {
            setRua(e.target.value);
        } else if(e.target.name === "cep") {
            setCep(e.target.value);
        } else if(e.target.name === "estado") {
            setEstado(e.target.value);
        } else if(e.target.name === "cidade") {
            setCidade(e.target.value);
        } else if(e.target.name === "bairro") {
            setBairro(e.target.value);
        }

        
    }

    const onClick = () => {
        console.log(cep);
        console.log(url);

        fetchCep(cep).then(data => {
            const rua = data.logradouro;
            const bairro = data.bairro;
            const estado = data.uf;
            const cidade = data.localidade;

            setRua(rua);
            setBairro(bairro);
            setEstado(estado);
            setCidade(cidade);
            setCep(cep);

            console.log(rua, bairro, estado, cidade);
        });
    }

    async function fetchCep(cep) {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        return data;
    }
      

    return (
        <div>
            <h1>{props}</h1>
            <Input props={"Nome Completo: "} /> <br />
            <Input props={"Logradouro: "} onChange={handleChange} value={rua} name={"rua"} /> <br />
            <Input props={"Bairro: "} onChange={handleChange} value={bairro} name={"bairro"} /> <br />
            <Input props={"Cep: "} onChange={handleChange} value={cep} name={"cep"} /> <br />
            <Botao props={"Pesquisar"} onClick={onClick} /> <br />
            <Input props={"Estado: "} onChange={handleChange} value={estado} name={"estado"} /> <br />
            <Input props={"Cidade: "} onChange={handleChange} value={cidade} name={"cidade"} />
        </div>
    )
}

export default Formulario;