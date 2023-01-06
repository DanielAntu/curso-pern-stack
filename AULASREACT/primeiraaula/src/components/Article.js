import React from 'react';

export default function Article(props){
    let numero = 20000
    return (
        <div>
            <article>
                <h1>{props.titulo}</h1>
                <h4>{props.descricao}</h4>
                <h5>Números de letras no artigo: {numero}</h5>
            </article>
            <br></br>
        </div>
    )
}