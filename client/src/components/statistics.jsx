import React, { useState } from 'react';
import style from '../style/content.module.css';
import {Modal} from './modal/Modal';

const Statistics = () =>{
    const [opened, setOpened] = useState(false);
return (
    <div className={style.content}>
        <h1>stat</h1>
        <button onClick={() => setOpened(true)}>x</button>
        <Modal opened={opened} onClose={() => setOpened(false)}> <h2>Simple animation content</h2></Modal>
    </div>
);
}

export default Statistics;