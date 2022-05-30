import React from 'react';
import './MyItens.scss';
import quartinho from '../img/quartinho.png';
import garagemProperty from '../img/garagemProperty.jpg';
import garagemNautica from '../img/garagem-nautica.png';
import { Link } from 'react-router-dom';

const MyItens = () => {
    return (
        <div className="ItemContainer">
            <h1>Espaços disponíveis</h1>
            <ul className="ListItem">
                <li>
                    <img src={quartinho} alt="" />
                    <div className="block">
                        <div className="dados">
                            <h2>Categoria</h2>
                            <p>Espaço pequeno</p>
                        </div>
                        <div className="dados">
                            <h2>Data</h2>
                            <p>11 / 12 / 2021</p>
                        </div>
                        <div className="dados">
                            <h2>Disponível </h2>
                            <p>19:00 / 21:00</p>
                        </div>
                    </div>
                    <div className="bottomBlock">
                        <Link to={'/item'} className="linkBlock">
                            <h2>Ver</h2>
                        </Link>
                    </div>
                </li>
                <li>
                    <img src={garagemProperty} alt="" />

                    <div className="block">
                        <div className="dados">
                            <h2>Categoria</h2>
                            <p>Garagem</p>
                        </div>
                        <div className="dados">
                            <h2>Data</h2>
                            <p>11 / 12 / 2021</p>
                        </div>
                        <div className="dados">
                            <h2>Disponível </h2>
                            <p>19:00 / 21:00</p>
                        </div>
                    </div>

                    <div className="bottomBlock">
                        <Link to={'/item'} className="linkBlock">
                            <h2 className="viewLocation">Ver</h2>
                        </Link>
                    </div>
                </li>
                <li>
                   
                    <img src={garagemNautica} alt="" />
                    <div className="block">
                        <div className="dados">
                            <h2>Categoria</h2>
                            <p>Garagem Náutica</p>
                        </div>
                        <div className="dados">
                            <h2>Data</h2>
                            <p>11 / 12 / 2021</p>
                        </div>
                        <div className="dados">
                            <h2>Disponível </h2>
                            <p>19:00 / 21:00</p>
                        </div>

                    </div>
                   
                    <div className="bottomBlock">
                        <Link to={'/item'} className="linkBlock">
                            <h2>Ver</h2>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default MyItens;
