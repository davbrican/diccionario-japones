import React from 'react'
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from "react-router-dom";

const Searcher = () => {

    const { busqueda, setBusqueda, setPalabra } = useStateContext();

    let navigate = useNavigate(); 
    const buscarPalabra = (busqueda) => {
        axios.get(`http://127.0.0.1:5000/buscarPalabra/${busqueda}`)
        .then(response => {
            setPalabra(response.data);
            let path = `Diccionario`; 
            navigate(path);
        })
        .catch(error =>{
            console.log(error);
        });
    }

    return (
        <div>
            <input type="text" value={busqueda} onChange={(e) => {setBusqueda(e.target.value)}}/>
            <button onClick={() => {buscarPalabra(busqueda)}}> Search </button>
        </div>
    )
}

export default Searcher