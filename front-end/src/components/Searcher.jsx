import React from 'react'
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';
import "../style/Searcher.css";

const Searcher = () => {

    const { busqueda, setBusqueda, setPalabra } = useStateContext();

    const buscarPalabra = (busqueda) => {
        axios.get(`${process.env.REACT_APP_BACK_URL}buscarPalabra/${busqueda}`)
        .then(response => {
            setPalabra(response.data);
        })
        .catch(error =>{
            console.log(error);
        });
    }

    function goHome() {
        window.location.href = '/';
    }

    function goAdd() {
        window.location.href = '/Crear';
    }
    
    return (
        <div>
            <button onClick={() => {goHome()}} id='homeButton'>
                <svg width="30" height="30" viewBox="0 0 24 24">
                    <path d="M3 10v11h6v-7h6v7h6v-11L12,3z"/>
                </svg>
            </button>
            <input id="inputBar" type="text" value={busqueda} onChange={(e) => {setBusqueda(e.target.value)}}/>
            <button id="searchButton" onClick={() => {buscarPalabra(busqueda)}}>
                <svg className="svg-icon" viewBox="0 0 20 20">
                    <path fill="none" d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
                        c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
                        c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
                        s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z">
                        </path>
                </svg>
            </button>
            <button id="addButton" onClick={() => {goAdd()}}>
                <svg class="svg-icon" viewBox="0 0 20 20">
                    <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
                </svg>
            </button>
        </div>
    )
}

export default Searcher