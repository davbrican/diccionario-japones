import axios from 'axios';
import React from 'react';
import Searcher from '../components/Searcher';
import "../style/Formulario.css";

const Insert = () => {

    const [formulario, setFormulario] = React.useState({
        español: '',
        japones: '',
        romaji: '',
        categoria: ''
    });

    function validateForm(formulario) {
        if (formulario.español === '' || formulario.japones === '' || formulario.romaji === '' || formulario.categoria === '') {
            alert('Debes rellenar todos los campos');
        } else {
            axios.post('http://127.0.0.1:5000/insertarPalabra', {
                español: formulario.español,
                hiragana: formulario.japones,
                romaji: formulario.romaji,
                categoria: formulario.categoria
            })
            .then((response) => {
                console.log(response);
                alert('Palabra añadida correctamente');
                setFormulario({
                    español: '',
                    japones: '',
                    romaji: '',
                    categoria: ''
                })
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <div>
            <Searcher />
            <input id="firstInput" className="inputForm" type="text" name="español" placeholder="Español" onChange={(e) => {setFormulario({
                español: e.target.value,
                japones: formulario.japones,
                romaji: formulario.romaji,
                categoria: formulario.categoria
            })}}/>
            <input className="inputForm" type="text" name="japones" placeholder="Japones" onChange={(e) => {setFormulario({
                español: formulario.español,
                japones: e.target.value,
                romaji: formulario.romaji,
                categoria: formulario.categoria
            })}}/>
            <input className="inputForm" type="text" name="romaji" placeholder="Romaji" onChange={(e) => {setFormulario({
                español: formulario.español,
                japones: formulario.japones,
                romaji: e.target.value,
                categoria: formulario.categoria
            })}}/>
            <input className="inputForm" type="text" name="categoria" placeholder="Categoria" onChange={(e) => {setFormulario({
                español: formulario.español,
                japones: formulario.japones,
                romaji: formulario.romaji,
                categoria: e.target.value
            })}}/>
            <br />
            <button className="sendButton" onClick={() => {validateForm(formulario)}}> Crear </button>
        </div>
    )
}

export default Insert