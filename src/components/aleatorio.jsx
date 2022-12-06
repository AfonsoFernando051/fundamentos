import React from 'react';

export default (props) => {
    // props.min += 1000
    // props.max += 2000
    // let {min, max} = props
    // min += 1000
    // max += 2000
    const delta = props.max-props.min + 1
    const aleatorio = parseInt( Math.random() * delta) + props.min
    return (
        <>
        <h1>O número aleatório é: </h1>
        <p>{aleatorio}</p>
        </>
    )
}