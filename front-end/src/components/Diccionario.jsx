import axios from 'axios';
import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import "../style/Diccionario.css";

const Diccionario = () => {
  
    const { palabra, setPalabra } = useStateContext();

    function buscar() {
        axios.get(`http://127.0.0.1:5000/palabras`)
        .then(response => {
            setPalabra(response.data);
        })
        .catch(error =>{
            console.log(error);
        });
    }

    function ordenarPor(campo) {
        let palabras = palabra;
        palabras.sort((a, b) => {
            if (a[campo] > b[campo]) {
                return 1;
            }
            if (a[campo] < b[campo]) {
                return -1;
            }
            return 0;
        });
        setPalabra([...palabras]);
    }

    function buscarPorCategoria(categoria) {
        axios.get(`http://127.0.0.1:5000/palabrasPorCategoria/${categoria}`)
        .then(response => {
            setPalabra(response.data);
        })
        .catch(error =>{
            console.log(error);
        });
    }

    return (
        <div>
            {palabra.length === 0 
            ? 
            <button className="diccionario" onClick={() => {buscar()}}> Cargar Diccionario </button> 
            : 
            <table className='diccionario'>
                <thead>
                    <tr>
                        <th><button id='filter' onClick={() => {ordenarPor("español")}}>Español</button></th>
                        <th><button id='filter' onClick={() => {ordenarPor("hiragana")}}>Japones</button></th>
                        <th><button id='filter' onClick={() => {ordenarPor("romaji")}}>Pronunciacion</button></th>
                        <th><button id='filter' onClick={() => {ordenarPor("categoria")}}>Categoria</button></th>
                    </tr>
                </thead>
                <tbody>
                    {palabra.map((palabra) => (
                        <tr key={palabra.español}>
                            <td>{palabra.español}</td>
                            <td>{palabra.hiragana}</td>
                            <td>{palabra.romaji}</td>
                            <td><a id='categoryButton' onClick={() => {buscarPorCategoria(palabra.categoria)}}>{palabra.categoria}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>} 
        </div>
    )
    
}

export default Diccionario