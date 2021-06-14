import React from 'react';
import style from '../../style/styleSubcomponents/input.module.css';

const Input = props =>{
return (
    <input onChange = {(e) => {
        props.setValue(e.target.value)
    }} value = {props.value}  className = {style.input} type={props.type}  placeholder = {props.placeholder} />
);
}

export default Input;