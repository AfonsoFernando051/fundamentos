import React from "react";
import "./App.css";
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Produtos from './components/repeticao/TabelaProdutos'
import Primeiro from './components/basicos/Primeiro'
import Fragmento from './components/basicos/fragmento'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/aleatorio';
import Card from './components/layout/Card'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from './components/formulario/Input'

export default _ => 
      <div className="App">
        <h1>Fundamentos React (Arrow)</h1>

        <div className="Cards" >
        <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
          <Input></Input>
        </Card>
        <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
          <IndiretaPai></IndiretaPai>
        </Card>
        <Card titulo="#9 - Comunicação Direta" color="#59323C">
          <DiretaPai></DiretaPai>
        </Card>
        <Card titulo="#8 - Renderização Condicional" color="#982395">
         <ParOuImpar numero={21}></ParOuImpar>
         <UsuarioInfo usuario={{nome :"Fernando"}}></UsuarioInfo>
         <UsuarioInfo usuario={{email :"afonsofernando051@gmail.com"}}/>

        </Card>
        <Card titulo="#7 - Desafio Repetição" color="#FF4C65">
         <Produtos/>
        </Card>

        <Card titulo="#6 - Repetição" color="#FF4C65">
         <ListaAlunos></ListaAlunos>
        </Card>
          
          <Card titulo="#4 -Desafio Aleatório" color="#FA6900">
            <Aleatorio min={100} max={1000}/> 
          </Card>
          <Card titulo="#3 - Fragmento" color="#E94C6F">
            <Fragmento  key="1"/>
          </Card>
          <Card titulo="#2 - Com Parâmetro" color="#E8B71A">
           <ComParametro
              titulo="Situação do Aluno"
             aluno="Pedro"
             nota={9.3}/>
           <ComParametro
            titulo="Situação do Aluno"
            aluno="Maria"
            nota={9.9}/>
          </Card>
          <Card titulo="#1 - Primeiro Componente" color="#588C73">
           <Primeiro></Primeiro>
          </Card>
        </div>
    </div>
 