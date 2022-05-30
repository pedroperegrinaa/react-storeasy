import React from 'react';
import './Item.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Gallery from '../../components/pageItem/gallery/Gallery';
import Imovel from '../../components/pageItem/dadosImovel/Imovel';
import Infos from '../../components/pageItem/infosImovel/InfosImovel';
const Item = () => {
    return (
        <div className="Container--item">
            <Sidebar />
            <main className="item-conteudo">
                <div className="item-conteudo-inicio">
                    <Gallery />
                    <Imovel />

                </div>
                <div className="item-conteudo-infos">
                    
                    <Infos />
                </div>
            </main>
        </div>
    );
};

export default Item;
