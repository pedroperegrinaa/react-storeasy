import React from 'react';
import './Imovel.scss';
import Pessoa from '../imgs/pessoa.png';
const Imovel = () => {
    return (
        <div className="dadosImovel">
            <div className="dadosImovel-preco">
                <div className="preco-valor">
                    Valor: R$ <b>210,00</b>
                </div>
                <div className="preco-tempo">HORA</div>
            </div>
            <div className="proprietario-dados">
                <div className="dados-prop">
                    <div className="prop-name">
                        <img src={Pessoa} alt="" />
                        <h3>Geferson Silveira</h3>
                    </div>
                    <div className="prop-usuario">
                        <h4>Ususário desde 26/02/2022</h4>
                    </div>
                </div>
                <div className="dados-Chat">
                    <h3>Falar com Geferson</h3>
                </div>
            </div>
        </div>
    );
};

export default Imovel;
