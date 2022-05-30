import React from 'react';
import './InfosImovel.scss';
import imagemGoogle from '../imgs/maps.jpeg';
const Infos = () => {
    return (
        <div className="container-infosImovel">
            <div className="infosImovel-title">
                <h1>Garagem</h1>
                <h3>Descrição</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, eligendi? Molestias quibusdam ut odio minus quis
                    reiciendis fuga nulla dolores, aut eveniet rem recusandae
                    dolorum beatae sunt ipsam asperiores. Nobis.
                </p>
            </div>

            <div className="infosImovel-local">
                <div className="local-infos">
                    <p>Rua: Juiz Nazário</p>
                    <p>Número: 3230</p>
                    <p>Bairro: Santa Tereza</p>
                    <p>Complemento: Apto 202</p>
                </div>
                <div className="local-map">
                    <img src={imagemGoogle} alt="MAPA" />
                </div>
            </div>
        </div>
    );
};

export default Infos;
