import React, { useState } from 'react';
import * as Yup from 'yup';


import {RegisterContainer} from './styles';

export default function Register() {

    const [name, setName] = useState("")
    const [birth, setBirth] = useState("")
    const [cpf, setCpf] = useState("")
    const [cep, setCEP] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [numero, setNumero] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")

    async function getAddres(valor:string) {
        let cep = valor.replace(/\D/g, '');
            if(valor.length >= 8) {
                cep = valor.substr(0,8)
            }

        setCEP(cep)

        if (cep !== "" && cep.length === 8) {
            const url = `https://viacep.com.br/ws/${cep}/json/unicode/`

            fetch(url)
                .then((res) => res.json())
                .then(address => {
                    setLogradouro(address.logradouro)
                    setBairro(address.bairro)
                    setCidade(address.localidade)
                    setEstado(address.uf)
                })

            $('#numero').focus()
            
        }
    }

    async function Registrar() {
        let users = [];

        let formatCPF = cpf.replace("-", "").replace(".", "").replace(".", "");
        
        let validCPF = Number(formatCPF)

        console.log(validCPF)

        const data = {
            name,
            birth,
            validCPF,
            cep,
            logradouro,
            numero,
            bairro,
            cidade,
            estado
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            birth: Yup.date().required(),
            validCPF: Yup.number().required(),
            cep: Yup.number().required(),
            logradouro: Yup.string().required(),
            numero: Yup.string().required(),
            bairro: Yup.string().required(),
            cidade: Yup.string().required(),
            estado: Yup.string().required(),
        })

        const valid = await schema.isValid(data)


        if(!valid) {
            alert('Por favor preencher todos os campos corretamente!')
            return
        }

        let user = JSON.stringify({
            Name: name,
            Birht: birth,
            Cpf: cpf,
            Cep: cep
        });

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registro adicionado.");
        return true;
    }

    function testarCPF(strCPF:number) {
        var Soma;
        var Resto;
        Soma = 0;
        let cpf = strCPF.toString() 
        if (cpf === '00000000000') return false;

        for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) Resto = 0;
        if (Resto !== parseInt(cpf.substring(9, 10))) return false;

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) Resto = 0;
        if (Resto !== parseInt(cpf.substring(10, 11))) return false;
        return true;
    }

    function mascaraCpf(valor:any) {
        return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
    }

    function validarCPF(cpf:any) {
        setCpf(mascaraCpf(cpf))

        if(cpf.length === 11) {

            console.log(cpf)
            const testar = testarCPF(cpf)

            if (!testar) {
                alert('CPF inválido')
                setCpf("")
            }
        }
    }

    return (
            <RegisterContainer>
                <form action="" className="register">
                    <fieldset>
                        <legend>
                            Register
                        </legend>

                        <div className="input-block">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="birth">Date of Birth</label>
                            <input
                                type="date"
                                id="birth"
                                value={birth}
                                onChange={event => setBirth(event.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="cpf">CPF</label>
                            <input
                                type="text"
                                id="cpf"
                                value={cpf}
                                onChange={event => validarCPF(event.target.value)}
                                placeholder="(Apenas números)"
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="cep">CEP</label>
                            <input
                                id="cep"
                                type="text"
                                value={cep}
                                onChange={event => getAddres(event.target.value)}
                                placeholder="(Apenas números)"
                            />
                        </div>

                    <div className="input-block">
                        <label htmlFor="logradouro">Address</label>
                        <input
                            id="logradouro"
                            type="text"
                            value={logradouro}
                            onChange={event => setLogradouro(event.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="numero">Number / Complement</label>
                        <input
                            id="string"
                            type="text"
                            value={numero}
                            onChange={event => setNumero(event.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="bairro">District</label>
                        <input
                            id="bairro"
                            type="text"
                            value={bairro}
                            onChange={event => setBairro(event.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="cidade">City</label>
                        <input
                            id="cidade"
                            type="text"
                            value={cidade}
                            onChange={event => setCidade(event.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="estado">State</label>
                        <input
                            id="estado"
                            type="text"
                            value={estado}
                            onChange={event => setEstado(event.target.value)}
                        />
                    </div>

                    <button type="submit" onClick={Registrar} className="links">Send</button>

                    </fieldset>
                </form>
        </RegisterContainer>
    )
}