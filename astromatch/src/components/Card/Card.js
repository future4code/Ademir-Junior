import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { baseURL } from "../../constants/index";

function Card() {
    const [pessoa, setPessoa] = useState({});

    const pegarPerfil = () => {
        axios.get(`${baseURL}/person`)
        .then((response) =>{
            console.log(response.data)
            setPessoa(response.data.profile)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        pegarPerfil()
    },[])
    
    const escolhePessoa = (choice) => {
        const body = {
            id: pessoa.id,
            choice: choice
        }
        axios.post(`${baseURL}/choice-person`, body)
        .then((response) => {
            pegarPerfil()
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const like = () => {
        escolhePessoa(true)
    }

    const deslike = () => {
        escolhePessoa(false)
    }

    return (
        <div>
            <p>Card</p>
        </div>
    )
}