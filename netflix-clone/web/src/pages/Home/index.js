import React from 'react';
import Filme from '../../components/Filme';

const Home = () => {
    // LÓGICA DO COMPONENTE
    const ListaFilmes = [
        { nome: 'Filme 1', ano: 2020, categoria: 'Terror' },
        { nome: 'Filme 2', ano: 2021, categoria: 'Ação' },
        { nome: 'Filme 3', ano: 2022, categoria: 'Suspense' },
        { nome: 'Filme 4', ano: 2023, categoria: 'Violência' },
        { nome: 'Filme 5', ano: 2024, categoria: 'infantis' },
    ]

    // RETORNAR O HTML DO COMPONENTE
    return (
        <div className="container">
            <br/>
            <h1>Lista Filmes</h1>
            <br/>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Ano</th>
                        <th scope="col" className="text-end">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {ListaFilmes.map(filme => (<Filme filme={filme} />))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;