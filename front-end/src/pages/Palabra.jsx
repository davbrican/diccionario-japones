import React from 'react';
import Searcher from '../components/Searcher';
import { useStateContext } from '../contexts/ContextProvider';
import "../style/Diccionario.css";

const Palabra = () => {
  
  const { palabra } = useStateContext();

  return (
    <div>
        <Searcher />
        <table className="diccionario">
            <thead>
                <tr>
                    <th>Español</th>
                    <th>Japones</th>
                    <th>Pronunciacion</th>
                    <th>Categoria</th>
                </tr>
            </thead>
            <tbody>
                {palabra.map((palabra) => (
                    <tr key={palabra.español}>
                        <td>{palabra.español}</td>
                        <td>{palabra.hiragana}</td>
                        <td>{palabra.romaji}</td>
                        <td>{palabra.categoria}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Palabra