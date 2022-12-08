import React from 'react'
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from "react-router-dom";
import "../style/Searcher.css";

const Searcher = () => {

    const { busqueda, setBusqueda, setPalabra } = useStateContext();

    let navigate = useNavigate(); 
    const buscarPalabra = (busqueda) => {
        axios.get(`http://127.0.0.1:5000/buscarPalabra/${busqueda}`)
        .then(response => {
            setPalabra(response.data);
            window.location.href = '../Palabra'; //one level up
        })
        .catch(error =>{
            console.log(error);
        });
    }

    return (
        <div>
            <a href="/" id='homeButton'>
                <svg width="30" height="30" viewBox="0 0 24 24">
                    <path d="M3 10v11h6v-7h6v7h6v-11L12,3z"/>
                </svg>
            </a>
            <input id="inputBar" type="text" value={busqueda} onChange={(e) => {setBusqueda(e.target.value)}}/>
            <button id="searchButton" onClick={() => {buscarPalabra(busqueda)}}>
                <svg class="svg-icon" viewBox="0 0 20 20">
                    <path fill="none" d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
                        c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
                        c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
                        s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z">
                        </path>
                </svg>
            </button>
            
        </div>
    )
}

export default Searcher