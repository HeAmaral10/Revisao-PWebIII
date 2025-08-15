import { useState, useEffect } from 'react';
import "./Contador.css";

function Contador() {

    const [contador, setContador] = useState(() => {
        const valorSalvo = localStorage.getItem("contador");
        return valorSalvo !== null ? Number(valorSalvo) : 0;
    });

    useEffect(() => {
        localStorage.setItem("contador", contador);
    }, [contador]);

    return (
        <div>
            <h1>Contador</h1>
            <p>Valor atual: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Somar</button>
            <button onClick={() => {
                if (contador > 0) {
                    setContador(contador - 1);
                }}}> Subtrair </button>
            <button onClick={() => setContador(0)}>Zerar</button>
        </div>
    );
}

export default Contador;
