import { useState } from 'react';
import "./Contador.css";

function Contador() {
    const [contador, setContador] = useState(0);
    
    return (
        <div>
        <h1>Contador</h1>
        <p>Valor atual: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Somar</button>
        <button onClick={() => setContador(contador - 1)}>Subtrair</button>
        <button onClick={() => setContador(0)}>Zerar</button>
        </div>
    );
}

export default Contador;