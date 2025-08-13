import { useEffect, useState } from 'react';
import "./ListaUsuarios.css";

function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsuarios(data);
                setCarregando(false);
            })
            .catch(error => {
                console.error('Erro ao buscar usuários:', error);
                setCarregando(false);
            });
    }, []);

    if (carregando) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaUsuarios;